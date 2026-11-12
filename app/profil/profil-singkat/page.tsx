"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> Profil Singkat </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Profil Singkat</span>
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

          <div className="space-y-4 text-justify text-[15px] leading-relaxed text-slate-700">
            <p>Pengadilan Negeri Sragen berkomitmen untuk memberikan layanan kepada masyarakat guna memenuhi kebutuhan informasi publik. Hal ini ditunjukkan dengan adanya unit yang memiliki meja layanan informasi yang menjadi satu dengan meja PTSP.</p>

            <p> Setelah itu, terbitlah{" "}
              <Link href="#" className="text-blue-600 hover:underline"> SK KMA nomor 144/KMA/SK/VIII/2007 </Link>{" "}
              tentang Keterbukaan Informasi di Pengadilan sebagai pedoman pelayanan informasi di Mahkamah Agung dan pengadilan. Di tahun 2007 ini, belum dikenal istilah PPID (Pejabat Pengelola Informasi
              dan Dokumentasi) dan Atasan PPID melainkan Petugas Informasi dan Dokumentasi dan Penanggung Jawab. Di dalam{" "}
              <Link href="#" className="text-blue-600 hover:underline"> SK KMA 144 tahun 2007 </Link>{" "}
              ini dijelaskan mengenai informasi yang harus diumumkan pengadilan, tata cara pengumumannya, informasi yang dapat diakses publik, dan tata cara mendapatkan informasi tersebut, biaya, prosedur keberatan, dan pemanfaatan informasi.
            </p>

            <p> Kemudian, terbitlah{" "}
              <Link href="#" className="text-blue-600 hover:underline"> Undang-Undang Nomor 14 Tahun 2008 </Link>{" "}
              tentang Keterbukaan Informasi Publik (UU KIP) yang disahkan pada bulan April 2008 dan kemudian mulai berlaku pada bulan April 2010. UU tersebut menggunakan istilah-istilah yang sedikit
              berbeda dengan yang digunakan pada SK KMA 144 tahun 2007, sehingga Mahkamah Agung menindaklanjuti dengan menerbitkan{" "}
              <Link href="#" className="text-blue-600 hover:underline"> SK KMA nomor 1-144/KMA/SK/I/2011 </Link>{" "}
              tentang Pedoman Pelayanan Informasi di Pengadilan.
            </p>

            <p>
              <Link href="#" className="text-blue-600 hover:underline"> SK KMA 1-144 tahun 2011 </Link>{" "}
              menambahkan beberapa detail yang belum diatur pada{" "}
              <Link href="#" className="text-blue-600 hover:underline"> SK KMA 144 tahun 2007 </Link>
              , di antaranya informasi yang dikecualikan, prosedur pengaburan informasi yang disertai dengan contoh, dan formulir-formulir terkait pelayanan informasi. Selain itu, pelaksana pelayanan
              informasi menjadi empat, yaitu atasan PPID, PPID, penanggung jawab informasi, dan petugas informasi.
            </p>

            <p> Kemudian Mahkamah Agung kembali menerbitkan SK KMA terbaru pada Tahun 2022 yaitu{" "}
              <Link href="https://drive.google.com/file/d/1cgllbCMT9DwIcfl8RTcFmeoyZFCWXI3_/view" className="text-blue-600 hover:underline"> Surat Keputusan Ketua Mahkamah Agung Republik Indonesia Nomor 2-144/KMA/SK/VIII/2022 </Link>{" "}
              tentang Standar Pelayanan Informasi Publik di Pengadilan, karena ketentuan dalam Keputusan Ketua Mahkamah Agung Nomor 1-144/KMA/SK/I/2011 tentang Pedoman Pelayanan Informasi di
              Pengadilan sudah tidak sesuai dengan perubahan regulasi serta kebutuhan agar sesuai dengan standar pelayanan informasi;
            </p>

            <p> Pada tahun 2025, Pengadilan Negeri Sragen mengembangkan sistem permohonan informasi secara elektronik pada situs web{" "}
              <Link href="#" className="text-blue-600 hover:underline"> ppid.pn-sragen.go.id </Link>{" "}
              yang terkoneksi dengan jaringan internet. Dengan fasilitas tersebut, pemohon informasi dapat mengajukan permohonan informasi atau keberatan dengan cepat, tanpa perlu menyampaikan surat
              ataupun datang ke meja layanan informasi. Situs tersebut juga dilengkapi dengan informasi mengenai pengelolaan keterbukaan informasi publik di Pengadilan Negeri Sragen.
            </p>
            <footer className="border-t border-slate-200 bg-slate-50 py-6">
                <p className="text-center text-sm text-slate-500">
                  © Pengadilan Negeri Sragen - 2026
                </p>
              </footer>
          </div>
        </div>
      </section>
    </main>
  );
}