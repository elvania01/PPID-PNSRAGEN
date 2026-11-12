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

  const linkDrive = "https://drive.google.com/file/d/1-FCA5U6E8V8UWhHmgnwECyu8BljZ-HkA/view";

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl"> Informasi yang Dikecualikan </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Informasi yang Dikecualikan</span>
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
              <p className="mb-2">
                <span className="font-bold text-slate-900"> I. Informasi yang Dikecualikan </span>
              </p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Informasi yang dikecualikan adalah seluruh atau bagian tertentu dari Informasi yang tidak disebutkan secara tegas dalam kelompok Informasi pada bagian IV.E, bagian IV.F, dan bagian
                  IV.G yang menurut PPID atau Atasan PPID, setelah melalui proses uji konsekuensi, dianggap sebagai :
                  <ol className="list-[lower-alpha] mt-2 space-y-2 pl-6">
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat menghambat proses penegakan hukum; </li>
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat mengganggu kepentingan perlindungan hak atas kekayaan intelektual dan perlindungan dari persaingan usaha tidak sehat; </li>
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat membahayakan pertahanan dan keamanan negara; </li>
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat mengungkapkan kekayaan alam Indonesia; </li>
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat merugikan ketahanan ekonomi nasional; </li>
                    <li> Informasi yang apabila dibuka dan diberikan kepada Pemohon Informasi Publik dapat merugikan kepentingan hubungan luar negeri; </li>
                    <li> Informasi yang apabila diberikan kepada Pemohon Informasi Publik dapat mengungkapkan isi akta otentik yang bersifat pribadi dan kemauan terakhir ataupun wasiat seseorang; </li>
                    <li> Informasi yang apabila diberikan kepada Pemohon Informasi Publik dapat mengungkap rahasia pribadi; </li>
                    <li> Memorandum atau surat antara Pengadilan dengan badan publik lain atau intra Pengadilan, yang menurut sifatnya dirahasiakan yang apabila dibuka dapat secara serius merugikan proses penyusunan kebijakan; dan </li>
                    <li> Informasi yang tidak boleh diungkapkan berdasarkan undang-undang sesuai dengan perincian dan penjelasan sebagaimana dimaksud dalam Pasal 17 dan Pasal 18 Undang-Undang Nomor 14 tahun 2008 tentang Keterbukaan Informasi Publik. </li>
                  </ol>
                </li>

                <li>
                  Informasi yang dikecualikan di Pengadilan adalah:
                  <ol className="list-[lower-alpha] mt-2 space-y-2 pl-6">
                    <li> Informasi dalam proses musyawarah hakim, termasuk advisblaad; </li>
                    <li> identitas lengkap hakim dan aparatur Pengadilan yang diberikan sanksi; </li>
                    <li> Sasaran Kinerja Pegawai (SKP) atau evaluasi kinerja individu hakim atau aparatur Pengadilan; </li>
                    <li> identitas pelapor yang meminta identitasnya dirahasiakan terkait laporan dugaan pelanggaran hakim dan aparatur Pengadilan; </li>
                    <li> identitas hakim dan aparatur Pengadilan yang dilaporkan yang belum diketahui publik; </li>
                    <li> catatan dan dokumen yang diperoleh dalam proses mediasi di pengadilan; </li>
                    <li> Informasi yang dapat mengungkap identitas pihak tertentu dalam putusan atau penetapan hakim dalam perkara tertentu sebagaimana dimaksud dalam bagian VIII huruf B Pedoman ini; dan </li>
                    <li>berita acara sidang dan alat bukti.</li>
                  </ol>
                </li>

                <li> Uji konsekuensi terhadap Informasi yang dikecualikan sebagaimana dimaksud pada angka 2 dilakukan oleh PPID di lingkungan Mahkamah Agung. </li>
                <li> Pengecualian terhadap sebagian Informasi dalam suatu salinan Informasi tidak dapat dijadikan alasan untuk mengecualikan akses publik terhadap keseluruhan salinan Informasi tersebut. </li>
                <li> Informasi yang dikecualikan dan dinyatakan terbuka oleh putusan Komisi Informasi atau pengadilan yang telah berkekuatan hukum tetap dimasukkan ke dalam DIP dan wajib disediakan untuk dapat diakses setiap Orang. </li>
                <li> Jangka waktu pengecualian Informasi ditetapkan berdasarkan ketentuan peraturan perundang-undangan. </li>
                <li> PPID menetapkan Informasi yang dikecualikan menjadi Informasi Publik paling lama 30 (tiga puluh) hari sebelum berakhirnya jangka waktu pengecualiannya. </li>
                <li> Dalam hal PPID tidak melakukan penetapan sebagaimana dimaksud pada angka 7, Informasi tersebut menjadi Informasi Publik pada saat berakhirnya jangka waktu pengecualian. </li>
              </ol>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="mb-3 text-[15px] font-bold text-slate-900"> Dokumen Terkait : </p>
              <a
                href={linkDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#1a5c3a] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#144a2e]"
              >
                🔗 Buka Dokumen Informasi yang Dikecualikan
              </a>
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