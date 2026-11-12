"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type DocumentItem = {
  id: number;
  deskripsi?: string;
  judul: string;
  fileUrl: string;
  isPdf?: boolean;
};

const documents: DocumentItem[] = [
  {
    id: 1,
    deskripsi: "Berikut Surat Keputusan/ Dokumen Publikasi dibawah ini.",
    judul: "Peraturan Mahkamah Agung Republik Indonesia Nomor 1 Tahun 2014 Tentang Pedoman Pemberian Layanan Hukum Bagi Masyarakat Tidak Mampu di Pengadilan.",
    fileUrl: "https://drive.google.com/file/d/11i8sfMEAc4xXnVbvkk2pJQVtTSmxPD1Y/preview",
    isPdf: true,
  },
  {
    id: 2,
    judul: "Peraturan Menteri Keuangan Republik Indonesia Nomor 190/PMK.05/2012 Tentang Tata Cara Pembayaran Dalam Rangka Pelaksanaan Anggaran Pendapatan dan Belanja Negara.",
    fileUrl: "https://drive.google.com/file/d/1cfNxEci5mA0Zp9JxZ7CH5wua2T_BG09K/preview",
    isPdf: true, 
  },
  {
    id: 3,
    judul: "Standar Operasional Prosedur (SOP) Pedoman Pemberian Layanan Hukum Bagi Masyarkat Tidak Mampu di Pengadilan.",
    fileUrl: "https://drive.google.com/file/d/19fC3yDvedTZZ19ACy6txrIys5KSB2_B5/preview",
    isPdf: true,
  },
];

export default function PenetapanSKDIPPage() {
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

  const [zoom, setZoom] = useState(100);
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));
  const handleSearch = () => console.log("Search clicked");
  const handleMenu = () => console.log("Menu clicked");

  const handleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    const container = e.currentTarget.parentElement;
    const target = container?.querySelector("iframe, img") as
      | HTMLIFrameElement
      | HTMLImageElement
      | null;

    if (target) {
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if ((target as any).webkitRequestFullscreen) {
        (target as any).webkitRequestFullscreen();
      }}};

  return (
    <main className="min-h-screen bg-[#f0f2f5] font-sans text-slate-800">
      <Navbar />

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline"> Beranda </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Penetapan SK DIP</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <p className="mb-4 text-xs text-slate-500"> Dipublikasikan pada: {tanggalSekarang} </p>

        <div className="space-y-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
            >
              {( <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 bg-white px-3 py-2 text-xs text-slate-600">
                  <span>📅</span>
                  <span>{tanggalSekarang}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-300">|</span>
                  <span>📄</span>
                  <span>Dibaca: {jumlahKunjungan !== null ? `${jumlahKunjungan} kali` : "..."}</span>
                </div> )}

              <div className="border-b border-gray-300 bg-[#dbeafe] px-4 py-3 text-[13px] leading-relaxed text-[#1e40af]">
                {doc.deskripsi && <p className="mb-2">{doc.deskripsi}</p>}
                <p className="font-medium">{doc.judul}</p>
              </div>

              <div className="relative flex h-[500px] items-center justify-center overflow-hidden bg-[#1a1a1a]">
                {doc.isPdf ? (
                  <iframe
                    src={doc.fileUrl}
                    title={`Preview ${doc.judul}`}
                    className="h-full w-full border-none"
                    allow="autoplay"
                    loading="lazy"
                    style={{
                      transform: `scale(${zoom / 100})`,
                      transformOrigin: "center center",
                    }}
                  />
                ) : (
                  <img
                    src={doc.fileUrl}
                    alt={`Preview ${doc.judul}`}
                    className="h-full w-auto object-contain shadow-2xl transition-transform duration-200"
                    style={{ transform: `scale(${zoom / 100})` }}
                  />
                )}

                <button
                  onClick={handleFullscreen}
                  className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded bg-white/80 text-sm text-gray-800 shadow transition hover:bg-white"
                  title="Fullscreen"
                >
                  ⛶
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <p className="text-center text-sm text-slate-500">
          © Pengadilan Negeri Sragen - 2026
        </p>
      </footer>
    </main>
  );
}