import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid"; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address } = body;

    console.log("Data diterima dari frontend:", body);

    // Validasi sederhana
    if (!name || !email) {
      return NextResponse.json(
        { message: "Nama dan Email wajib diisi" },
        { status: 400 }
      );
    }

    // Cek apakah email sudah digunakan
    const existingCustomer = await prisma.customer.findUnique({
      where: { email },
    });

    if (existingCustomer) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 400 }
      );
    }

    // Generate id manual
    const generatedId = uuidv4();

    // Simpan customer baru ke database
    const newCustomer = await prisma.customer.create({
      data: {
        id: generatedId,
        name,
        email,
        phone,
        address,
      },
    });

    return NextResponse.json(
      {
        message: "Registrasi berhasil!",
        user: newCustomer,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saat registrasi:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan di server" },
      { status: 500 }
    );
  }
}
