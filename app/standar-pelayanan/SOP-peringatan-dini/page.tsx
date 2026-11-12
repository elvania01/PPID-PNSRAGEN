"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function StandarPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> Peringatan Dini dan Evakuasi </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Peringatan Dini dan Evakuasi</span>
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

          <div className="space-y-6 text-justify text-[15px] leading-relaxed text-slate-700">
            <p> Prosedur peringatan dini dan evakuasi keadaan darurat adalah hal-hal yang dilakukan sebagai antisipasi awal dalam menghadapi keadaan darurat. </p>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> A. Apabila Anda Melihat Keadaan Tanda Bahaya / Alat Terdekat </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Tetap tenang;</li>
                <li>Bunyikan alat tanda bahaya / terdekat;</li>
                <li>Putar nomor keadaan darurat.</li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> B. Prosedur Evakuasi Dalam Keadaan Darurat Kebakaran </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Saat melihat api tetap tenang dan jangan panik;</li>
                <li>Menjauh dari sumber api;</li>
                <li> Segera menuju tangga darurat yang terdekat dengan berjalan biasa dengan cepat namun tidak berlari; </li>
                <li> Bila memungkinkan ambil alat pemadam api ringan (APAR) untuk memadamkan api; </li>
                <li> Bila tidak, berjalanlah dengan biasa dengan cepat.{" "} <strong>JANGAN LARI</strong>; </li>
                <li> Lepaskan sepatu hak tinggi karena menyulitkan dalam langkah kaki; </li>
                <li> Janganlah membawa barang yang lebih besar dari tas kantor/tas tangan; </li>
                <li> Beritahu orang lain / tamu yang masih berada di dalam ruangan lain untuk segera melakukan evakuasi; </li>
                <li> Bila api dirasa membesar jangan panik dan tetap tertib segera meninggalkan gedung sesuai petunjuk/jalur yang ada; </li>
                <li> Bila pandangan tertutup asap, berjalanlah dengan merayap pada tembok atau pegangan pada tangga, atur pernafasan pendek-pendek; </li>
                <li> Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang Anda dan menghambat evakuasi; </li>
                <li> Segeralah menuju titik kumpul yang ada di tempat tersebut untuk menunggu instruksi berikutnya. </li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> C. Prosedur Evakuasi Dalam Keadaan Darurat Gempa Bumi </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Tetap tenang jangan panik;</li>
                <li> Bila memungkinkan segera lari keluar gedung sesuai petunjuk/jalur evakuasi yang telah ada, bila tidak memungkinkan cari tempat berlindung yang dirasa aman. Tempat berlindung yang dirasa aman adalah:
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li> Disamping almari atau meja, posisi merunduk dengan tangan melindungi kepala; </li>
                    <li> Disamping pintu dalam kondisi setengah terbuka/jangan ditutup; </li>
                    <li> Disamping benda/mebel yang dirasa cukup kuat menopang benda jatuh. </li>
                  </ul>
                </li>
              </ol>
              <p className="mt-3 font-bold text-red-600"> JANGAN BERLINDUNG DIBAWAH TANGGA DAN JAUHI AREA TANGGA! </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> D. Apabila Anda Mengalami Keadaan Darurat, Maka: </h2>
              <ul className="space-y-3 pl-2">
                <li> <strong>SEGERA</strong> : Hentikan pekerjaan dan tinggalkan gedung ketika diketahui/didengar terdapat tanda bahaya atau ketika Anda diminta untuk melakukannya. </li>
                <li> <strong>HINDARI</strong> : Kepanikan. </li>
                <li> <strong>IKUTI</strong> : Instruksi dan bekerjasamalah dengan mereka yang bertanggung jawab atas keadaan darurat. </li>
                <li> <strong>MATIKAN</strong> : Semua peralatan kerja terutama listrik dan tutup laci meja. </li>
                <li> <strong>JANGAN</strong> : Menunda untuk segera meninggalkan gedung dengan mencari barang-barang pribadi/atau orang lain. </li>
                <li> <strong>PERGI</strong> : Ke daerah terbuka yang cukup jauh dari gedung dan jangan menghalangi petugas dan peralatan mereka. </li>
                <li> <strong>JANGAN</strong> : Masuk kembali ke dalam gedung sampai ada instruksi dari atasan atau petugas. </li>
              </ul>
            </div>

            <p className="italic"> Kita tidak pernah menginginkan musibah terjadi, namun paling tidak jika kita memahami prosedur peringatan dini dan keadaan darurat
              maka kita akan bisa mengambil langkah-langkah dan keputusan yang tepat sesuai prosedur, jika suatu saat terjadi keadaan darurat seperti keadaan darurat kebakaran maupun gempa bumi di lingkungan
              yang kita tinggali. </p>
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