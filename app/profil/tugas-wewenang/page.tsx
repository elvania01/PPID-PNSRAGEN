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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900"> Tugas Fungsi dan Wewenang PPID </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Beranda
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Tugas Fungsi dan Wewenang PPID</span>
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
            
            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Tugas, Tanggung Jawab dan Kewenangan Dewan Pertimbangan </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Memberikan pertimbangan kepada Atasan PPID dalam menetapkan standar biaya perolehan salinan Informasi di unit/satuan kerjanya dalam hal salinan Informasi Publik perlu digandakan dengan menggunakan sarana berbayar.
                </li>
                <li>
                  Memberikan pertimbangan kepada Atasan PPID dalam menetapkan dan memutakhirkan secara berkala DIP di unit/satuan kerjanya.
                </li>
                <li>
                  Memberikan pertimbangan kepada Atasan PPID dalam menyusun tanggapan atas keberatan yang diajukan oleh Pemohon Informasi yang mengajukan keberatan.
                </li>
                <li>
                  Memberikan pertimbangan kepada PPID dalam pengujian tentang konsekuensi yang timbul sebagaimana diatur dalam Pasal 19 Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan
                  Informasi Publik sebelum menyatakan informasi publik tertentu dikecualikan.
                </li>
                <li>
                  Memberikan pertimbangan kepada Atasan PPID dalam hal terjadi sengketa Informasi.
                </li>
                <li>
                  Memberikan pertimbangan lain kepada Atasan PPID/PPID terkait pelaksanaan layanan Informasi Publik di Pengadilan.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Tugas, Tanggung Jawab, dan Kewenangan Atasan PPID </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li> Membangun dan mengembangkan sistem pengelolaan informasi dan dokumentasi secara efektif dan efisien berbasis teknologi informasi di unit/satuan kerjanya. </li>
                <li> Mengangkat PPID, PPID Pelaksana, dan Petugas Layanan Informasi. </li>
                <li>Menganggarkan pembiayaan layanan Informasi.</li>
                <li> Menyediakan sarana dan prasarana layanan informasi, termasuk papan pengumuman dan meja informasi unit satuan kerjanya serta situs resmi. </li>
                <li> Menetapkan standar biaya perolehan salinan Informasi di unit/satuan kerjanya dalam hal salinan Informasi Publik perlu digandakan dengan menggunakan sarana berbayar. </li>
                <li> Menetapkan dan memutakhirkan secara berkala DIP di unit/satuan kerjanya. </li>
                <li> Memberikan tanggapan atas keberatan yang diajukan oleh Pemohon Informasi yang mengajukan keberatan. </li>
                <li> Membuat dan mengumumkan laporan tentang layanan informasi sesuai dengan Pedoman ini melalui media e-LID di unit/satuan kerjanya. </li>
                <li> Melakukan evaluasi dan pengawasan terhadap pelaksanaan layanan Informasi di unit/satuan kerjanya. </li>
                <li> Mewakili unit/satuan kerjanya di dalam proses penyelesaian sengketa di Komisi Informasi dan pengadilan atau mewakilkan kepada kuasanya. </li>
                <li> Memperhatikan pertimbangan yang disampaikan oleh Dewan Pertimbangan. </li>
                <li>
                  Menetapkan Standar Operasional Prosedur (SOP) baik secara manual maupun secara elektronik berupa:
                  <ol className="mt-1 list-[lower-alpha] space-y-1 pl-6">
                    <li>pengumuman informasi;</li>
                    <li>pengelolaan permohonan Informasi;</li>
                    <li>pengelolaan keberatan atas Informasi;</li>
                    <li>penanganan sengketa Informasi Publik oleh Atasan PPID;</li>
                    <li>penetapan dan pemutakhiran DIP;</li>
                    <li>pengujian tentang konsekuensi;</li>
                    <li>pendokumentasian Informasi Publik; dan</li>
                    <li>pendokumentasian Informasi yang dikecualikan.</li>
                  </ol>
                </li>
                <li> Atasan PPID yang berada di bawah Mahkamah Agung menyusun SOP sebagaimana dimaksud pada angka 12 mengikuti standar yang diberlakukan di lingkungan Mahkamah Agung. </li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Tugas, Tanggung Jawab, dan Kewenangan PPID </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Menetapkan kebijakan layanan Informasi Publik.</li>
                <li>
                  Mengkoordinasikan pendokumentasian seluruh Informasi dalam bentuk cetak atau elektronik yang meliputi:
                  <ol className="mt-1 list-[lower-alpha] space-y-1 pl-6">
                    <li> Informasi yang wajib disediakan dan diumumkan secara berkala. </li>
                    <li>Informasi yang wajib tersedia setiap saat.</li>
                    <li> Informasi terbuka lainnya yang diminta Pemohon Informasi. </li>
                  </ol>
                </li>
                <li> Mengkoordinasikan pendataan Informasi di Pengadilan dalam rangka pembuatan dan pemutakhiran DIP paling kurang 2 (dua) kali dalam 1 (satu) tahun guna memastikan ketersediaan
                     Informasi Publik dan jangka waktu penyimpanan Informasi Publik. </li>
                <li> Mengkoordinasikan pengumuman Informasi yang wajib diumumkan secara berkala melalui media e-LID atau media lainnya. </li>
                <li> Mengkoordinasikan pemberian Informasi yang dapat diakses oleh publik dengan Petugas Layanan Informasi. </li>
                <li> Melaksanakan rapat koordinasi dan rapat kerja secara berkala dan/atau sesuai dengan kebutuhan dalam melaksanakan pelayanan Informasi Publik. </li>
                <li> Meminta klarifikasi kepada PPID Pelaksana dan/atau Petugas Layanan Informasi dalam melaksanakan pelayanan Informasi Publik. </li>
                <li> Melakukan pengujian tentang konsekuensi yang timbul sebagaimana diatur dalam Pasal 19 Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik sebelum menyatakan Informasi Publik tertentu dikecualikan. </li>
                <li> Menyertakan alasan tertulis pengecualian Informasi secara jelas dan tegas dalam hal permohonan informasi ditolak. </li>
                <li> Mengkoordinasikan penghitaman atau pengaburan Informasi yang dikecualikan beserta alasannya kepada Petugas Layanan Informasi. </li>
                <li> Mengembangkan kapasitas pengelola layanan Informasi dalam rangka memberikan layanan secara prima (service excellent). </li>
                <li> Mengkoordinasikan dan memastikan agar pengajuan keberatan Informasi diproses berdasarkan prosedur yang berlaku. </li>
                <li> Melakukan koordinasi dengan kementerian/lembaga terkait dalam pelaksanaan layanan Informasi Publik yang efektif dan efisien. </li>
                <li> Memperhatikan pertimbangan yang disampaikan oleh Dewan Pertimbangan. </li>
                <li>Menetapkan laporan layanan Informasi Publik.</li>
                <li> PPID bertanggung jawab kepada Atasan PPID dalam melaksanakan tugas, tanggung jawab, dan wewenangnya. </li>
              </ol>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Tugas, Tanggung Jawab, dan Kewenangan PPID Pelaksana </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li> Membantu PPID melaksanakan tanggung jawab, tugas, dan kewenangannya. </li>
                <li>
                  Mendokumentasikan seluruh Informasi dalam bentuk cetak atau elektronik yang meliputi:
                  <ol className="mt-1 list-[lower-alpha] space-y-1 pl-6">
                    <li> Informasi yang wajib disediakan dan diumumkan secara berkala; </li>
                    <li>Informasi yang wajib tersedia setiap saat; dan</li>
                    <li> Informasi terbuka lainnya yang diminta Pemohon Informasi. </li>
                  </ol>
                </li>
                <li> Membantu PPID melakukan pemutakhiran DIP paling kurang 2 (dua) kali dalam 1 (satu) tahun. </li>
                <li> Membantu PPID mengumumkan Informasi yang wajib diumumkan secara berkala melalui media e-LID atau media lainnya. </li>
                <li> Membantu PPID melakukan pengujian tentang konsekuensi yang timbul sebagaimana diatur dalam Pasal 19 Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik sebelum menyatakan Informasi Publik tertentu dikecualikan. </li>
                <li> Membantu PPID menyusun alasan tertulis pengecualian Informasi secara jelas dan tegas dalam hal permohonan Informasi ditolak. </li>
                <li> Mengkoordinasikan layanan Informasi Publik dengan Petugas Layanan Informasi. </li>
                <li> Membantu PPID dalam menyusun laporan layanan Informasi Publik. </li>
              </ol>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-900"> Tugas, Tanggung Jawab, dan Kewenangan Petugas Layanan Informasi </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li> Memberikan layanan secara prima (service excellent) kepada Pemohon Informasi. </li>
                <li> Menerima dan memilah permohonan Informasi baik secara manual maupun elektronik. </li>
                <li> Mendokumentasikan permohonan Informasi dan keberatan atas permohonan Informasi secara manual maupun elektronik. </li>
                <li>Meneruskan permohonan Informasi kepada PPID pelaksana.</li>
                <li> Dalam hal sudah tersedia sistem layanan informasi secara elektronik yang andal, petugas layanan Informasi melakukan pendokumentasian sebagaimana dimaksud pada angka 3 secara elektronik. </li>
              </ol>
            </div>

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