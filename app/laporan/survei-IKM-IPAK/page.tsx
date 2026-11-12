"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type GrupLaporan = {
  kode: string;
  nama: string;
  links: { [key: string]: string };};

const GRUP: GrupLaporan[] = [
  { kode: "A.",
    nama: "Laporan Survei IKM",
    links: {
      "Triwulan 1": "https://drive.google.com/file/d/14Vo-Utw8brPYf8CFyNXWsprUO183GBQP/view",
      "Triwulan 2": "https://drive.google.com/file/d/12n5iIxjYRXx0AkqKpH3RobRDWD841PIq/view",
      "Triwulan 3": "https://drive.google.com/file/d/1wgip7eMNdVaN5cjiDzJwFiH0Fxf-38Nz/view",
    },},
  { kode: "B.",
    nama: "Laporan Survei IPAK",
    links: {
      "Triwulan 1": "https://drive.google.com/file/d/1ORY0-uLLNDb-KP3HIY_WUswmTxThxErR/view?usp=drive_link",
      "Triwulan 2": "https://drive.google.com/file/d/1YNNw3IQdmvYqAXwSwkBmCAmvXH4ExRIw/view",
      "Triwulan 3": "https://drive.google.com/file/d/1do_OZlUTZpDmV9Kyiy6IAyRHNggPGZZ4/view",
    },},];

const TRIWULAN = ["Triwulan 1", "Triwulan 2", "Triwulan 3"];

export default function ProfilePage() {
    const tanggalSekarang = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const [jumlahKunjungan, setJumlahKynjungan] = useState<number | null>(null);

  useEffect(() => {
    const hariIni = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const savedTanggal = localStorage.getItem("tanggalKunjungan");
    const kunjunganStr = localStorage.getItem("jumlahKunjungan");
    let kunjunganNum: number;

    if (savedTanggal !== hariIni) {
      kunjunganNum = 1;
      localStorage.setItem("tanggalKunjungan", hariIni);
    } else {
      if (kunjunganStr === null) { kunjunganNum = 1;} 
      else {kunjunganNum = Number(kunjunganStr) + 1;}}
      
    localStorage.setItem("jumlahKunjungan", String(kunjunganNum));
    setJumlahKynjungan(kunjunganNum);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Survei IKM dan IPAK </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Survei IKM dan IPAK</span>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <span>📅</span>
              <span>{tanggalSekarang}</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span>📖</span>
              <span>Dibaca : {jumlahKunjungan !== null ? `${jumlahKunjungan} kali` : "..."}</span>
            </div>
          </div>

          <p className="mb-6 text-[15px] font-medium text-slate-700"> Berikut Laporan Survei IKM dan IPAK Per Triwulan Tahun 2026 </p>

          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl border-collapse border border-black text-sm">
              <tbody>{GRUP.map((grup) => ( <Fragment key={grup.kode}>
                    <tr>
                      <td className="w-12 border border-black px-3 py-2 text-center font-bold text-slate-900"> {grup.kode} </td>
                      <td className="border border-black px-4 py-2 font-bold text-slate-900"> {grup.nama} </td>
                      <td className="w-32 border border-black px-4 py-2 text-center font-bold text-slate-900"> Keterangan </td>
                    </tr>

                    {TRIWULAN.map((tw) => (
                      <tr key={`${grup.kode}-${tw}`}>
                        <td className="border border-black px-3 py-2"></td>
                        <td className="border border-black px-4 py-2 text-slate-700">
                          - {tw}
                        </td>
                        <td className="border border-black px-4 py-2 text-center">
                          <Link
                            href={grup.links[tw] || "#"}
                            className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                          >
                            Lihat
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <p className="text-center text-sm text-slate-500">
          © Pengadilan Negeri Sragen - 2026
        </p>
      </footer>
    </main>
  );
}