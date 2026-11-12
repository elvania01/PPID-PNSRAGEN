"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"; 

export default function ProsedurPermohonanPage() {
   const tanggalSekarang = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Prosedur Permohonan Informasi </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Prosedur Permohonan Informasi</span>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true">📅</span>
              <span>{tanggalSekarang}</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span>📖</span>
              <span>Dibaca : {jumlahKunjungan !== null ? `${jumlahKunjungan} kali` : "..."}</span>
            </div>
          </div>
          <div className="text-[15px] leading-relaxed text-slate-700">
            <div className="mb-10 flex justify-center">
              <Image 
                src="/prosedur-utama.png" 
                alt="Diagram Alur Prosedur Permohonan Informasi" 
                width={800} 
                height={600} 
                className="rounded border border-gray-200"
              />
            </div>

            <h2 className="mb-4 text-xl font-bold text-slate-900">Prosedur Biasa</h2>
            <p className="mb-4"> Prosedur Biasa digunakan dalam hal : </p>
            <ol className="mb-6 list-decimal space-y-1 pl-6">
              <li>Pemohon Informasi disampaikan secara tidak langsung, baik melalui surat atau media elektronik;</li>
              <li>Informasi yang diminta bersifat terbuka;</li>
              <li>Informasi yang diminta belum tersedia; atau</li>
              <li>Informasi yang diminta adalah informasi yang tidak secara tegas termasuk dalam kategori informasi yang harus diumumkan atau informasi yang secara tegas dinyatakan sebagai informasi yang rahasia sehingga harus mengadasi jangka waktu 10 hari kerja.</li>
            </ol>
            <p className="mb-6"> Pelayanan informasi dengan menggunakan prosedur biasa dilakukan sesuai dengan skema alur dalam gambar berikut: </p>

            <div className="mb-6 flex justify-center">
              <Image 
                src="/prosedur-biasa.png" 
                alt="Diagram Alur Prosedur Biasa" 
                width={800} 
                height={600} 
                className="rounded border border-gray-200"
              />
            </div>

            <p className="mb-6 text-sm text-slate-500"> * 2 s.d 6 hari kerja, tergantung informasi yang diminta (terbuka/tidak diikecualikan), dan kondisi pengadilan </p>

            <p className="mb-4 font-bold text-slate-900"> Penjelasan Prosedur Biasa: </p>
            <ol className="mb-10 list-decimal space-y-2 pl-6">
              <li>Pemohon mengisi formulir permohonan informasi yang disediakan dan memberikan salinanannya kepada Pemohon (Formulir dapat didownload disini).</li>
              <li>Petugas informasi mengisi Register Permohonan.</li>
              <li>Petugas informasi langsung menukarkan formulir permohonan kepada penanggung jawab informasi di unit/satuan kerja terkait, apabila informasi yang diminta tidak termasuk informasi yang akan disampaikan melalui PPID.</li>
              <li>Petugas informasi langsung menukarkan formulir permohonan kepada PPID apabila informasi yang diminta tidak termasuk informasi yang akan disampaikan melalui PPID.</li>
              <li>PPID melakukan koordinasi kepada PPID di Lingkungan Kementerian/Lembaga terkait Perihal permohonan yang diajukan.</li>
              <li>Dalam jangka waktu 5 (lima) hari kerja sejak menerima permohonan, PPID menyampaikan pemberitahuan tertulis kepada pemohon informasi, dalam hal permohonan ditolak.</li>
              <li>Dalam jangka waktu 5 (lima) hari kerja sejak menerima permohonan, PPID meminta penanggung jawab informasi di unit/satuan kerja terkait untuk mencari dan mengumpulkan informasi yang dibutuhkan.</li>
              <li>Setelah dokumen informasi ditemukan, PPID memeriksa apakah informasi tersebut mengandung informasi yang dikecualikan.</li>
              <li>Jika informasi yang diminta bersifat terbuka, PPID memberikan informasi tersebut kepada pemohon.</li>
              <li>Jika informasi yang diminta bersifat tertutup, PPID memberikan informasi tersebut kepada pemohon.</li>
              <li>Dalam hal permohonan informasi ditolak, PPID memberikan alasan penolakan secara tertulis kepada pemohon.</li>
              <li>Dalam hal informasi yang diminta terdapat dalam dokumen elektronik (softcopy), petugas informasi dapat memberikan salinan informasi tersebut dalam bentuk softcopy.</li>
              <li>Dalam hal informasi yang diminta terdapat dalam dokumen elektronik (softcopy), petugas informasi dapat memberikan salinan informasi tersebut dalam bentuk softcopy.</li>
              <li>Pemohon dapat mengajukan keberatan apabila permohonan informasi ditolak.</li>
              <li>Dalam hal permohonan informasi yang diminta tidak tersedia dalam bentuk softcopy, petugas informasi dapat memberikan salinan informasi tersebut dalam bentuk hardcopy.</li>
            </ol>

            <h2 className="mb-4 text-xl font-bold text-slate-900">Prosedur Khusus</h2>
            <p className="mb-4"> Prosedur Khusus digunakan dalam hal permohonan diajukan secara langsung dan informasi yang diminta : </p>
            <ol className="mb-6 list-decimal space-y-1 pl-6">
              <li>Termasuk dalam kategori yang wajib diumumkan;</li>
              <li>Termasuk dalam kategori informasi yang dapat diakses publik dan sudah tercatat dalam Daftar Informasi Publik dan sudah tersedia (sudah dibuka atau sudah diterima dari pihak atau pihak ketiga);</li>
              <li>Tidak berhubungan dengan (dalam bahasa hukum) dokumen yang belum selesai diproses; dan/atau</li>
              <li>Permintaan jumlahnya banyak atau permintaan yang tidak membutuhkan waktu yang lama untuk menyediakannya.</li>
            </ol>
            <p className="mb-6"> Pelayanan informasi dengan menggunakan prosedur khusus, mengikuti skema alur dalam gambar berikut: </p>

            <div className="mb-6 flex justify-center">
              <Image 
                src="/prosedur-khusus.jpg" 
                alt="Diagram Alur Prosedur Khusus" 
                width={800} 
                height={600} 
                className="rounded border border-gray-200"
              />
            </div>

            <p className="mb-6 text-sm text-slate-500"> * 2 s.d 6 hari kerja, tergantung informasi yang diminta (terbuka/tidak diikecualikan), dan kondisi pengadilan (tersedia fasilitas penggandaan yang mudah diakses/tidak). </p>
            <p className="mb-4 font-bold text-slate-900"> Penjelasan Prosedur Khusus: </p>
            <ol className="mb-10 list-decimal space-y-2 pl-6">
              <li>Pemohon mengisi formulir permohonan yang disediakan Pengadilan (Formulir dapat didownload disini).</li>
              <li>Petugas informasi mengisi Register Permohonan.</li>
              <li>Petugas informasi atau Penanggungjawab informasi di unit/satuan kerja terkait mencari informasi yang diminta oleh Pemohon dan memberikan biaya perolehan informasi dan waktu yang dibutuhkan untuk penggandaan.</li>
              <li>Petugas informasi Apabila informasi yang diminta oleh Pemohon tidak termasuk dalam kategori informasi yang harus diumumkan atau informasi yang dikecualikan, maka permohonan informasi tersebut dilakukan dengan menggunakan prosedur biasa.</li>
              <li>Proses untuk pembayaran, penyimpanan dan penyerahan salinan informasi kepada pemohon dalam Prosedur Khusus, sama dengan yang diatur untuk prosedur Biasa.</li>
              <li>Petugas informasi memberikan kesempatan bagi Pemohon apabila ingin melihat lebih dahulu informasi yang diminta, sebelum memutuskan untuk menggandakan atau tidak informasi tersebut.</li>
            </ol>
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