"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

type GrupLaporan = {
  kode: string;
  nama: string;
  link: Record<string, string>;
};

const GRUP: GrupLaporan[] = [
  {
    kode: "A.",
    nama: "Laporan Bulanan Kesekretariatan",
    link: {
      "Januari":   "https://drive.google.com/file/d/1bhiywGjxxQ8BIrB38YL2Vp4QfiQy7tM9/view?usp=drive_link",
      "Februari":  "https://drive.google.com/file/d/1e_yX_-KUvBrtea4s_msz_wesHnx_DtS7/view?usp=drive_link",
      "Maret":     "https://drive.google.com/file/d/1juLqS9MNB_wCWxjJwNZZztC_qkWKuy6x/view?usp=drive_link",
      "April":     "https://drive.google.com/file/d/1T0BnEfjggUSGhlxdq4xzOV4GEdT6QoBm/view?usp=drive_link",
      "Mei":       "https://drive.google.com/file/d/1Jo06d8EPzSxUpDPslY-0Tt2f8bEII1vj/view?usp=drive_link",
      "Juni":      "https://drive.google.com/file/d/1jm7rc09gw_DsvnCkoHmFSPRv_3SCpSrs/view?usp=drive_link",
      "Juli":      "https://drive.google.com/file/d/1mlPYd97eK-T7-xKWNghJJR4-uNQpuED1/view?usp=drive_link",
      "Agustus":   "https://drive.google.com/file/d/1lEKe8uAos8SRpN3f7v-4-rTtPif73INY/view?usp=drive_link",
      "September": "https://drive.google.com/file/d/1O8e8-c0gUwry_FiyXkrwYd3Hy1tYN10m/view?usp=drive_link",
      "Oktober":   "#",
      "November":  "#",
      "Desember":  "#",
    },
  },
  {
    kode: "B.",
    nama: "Laporan Bulanan Kepaniteraan",
    link: {
      "Januari":   "https://drive.google.com/file/d/1OaRolF-TylXX0XA8xG0B9AfeTojrypqT/view?usp=drive_link",
      "Februari":  "https://drive.google.com/file/d/1cVhndChbwXOox_IxgsIG3sONrvEehsDf/view?usp=drive_link",
      "Maret":     "https://drive.google.com/file/d/1wPRibbXeC_IxNfHdilq2TFcEfj7tKaOW/view?usp=drive_link",
      "April":     "https://drive.google.com/file/d/1Or5Y2uVGRKcaM9ldZVeFibun3x8F-LUi/view?usp=drive_link",
      "Mei":       "https://drive.google.com/file/d/1Sg8Y9bf26CLbY8S_oqGCncVRkZ9ucFpQ/view?usp=drive_link",
      "Juni":      "https://drive.google.com/file/d/1vWrMedkLGCWWNxwiJLN3blJXaIkuvkze/view?usp=drive_link",
      "Juli":      "https://drive.google.com/file/d/1CfxCrFpNt4KPJ_Ey1Ycdz6MBveDH83NG/view?usp=drive_link",
      "Agustus":   "https://drive.google.com/file/d/1nSECN5fddh0uO3JyTZpkz5Mu5zy2rUeu/view?usp=drive_link",
      "September": "https://drive.google.com/file/d/1_ZMGVWETZ83jHsP3dG7OxqlPgxUZhcJX/view?usp=drive_link",
      "Oktober":   "#",
      "November":  "#",
      "Desember":  "#",
    },
  },
];

export default function LaporanBulananPage() {
  const tanggalSekarang = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [jumlahKunjungan, setJumlahKunjungan] = useState<number | null>(null);

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
      kunjunganNum = kunjunganStr === null ? 1 : Number(kunjunganStr) + 1;
    }

    localStorage.setItem("jumlahKunjungan", String(kunjunganNum));
    setJumlahKunjungan(kunjunganNum);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="bg-white py-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-slate-900 md:text-4xl">
          Laporan Bulanan
        </h1>
      </section>

      <div className="border-y border-gray-200 bg-[#F5F5F7]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Beranda
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Laporan Bulanan</span>
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

          <p className="mb-6 text-[15px] font-medium text-slate-700"> Berikut Laporan Bulanan Kesekretariatan dan Kepaniteraan Tahun 2026 </p>

          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl border-collapse border border-black text-sm">
              <tbody>
                {GRUP.map((grup) => (
                  <Fragment key={grup.kode}>
                    <tr>
                      <td className="w-12 border border-black px-3 py-2 text-center font-bold text-slate-900">
                        {grup.kode}
                      </td>
                      <td className="border border-black px-4 py-2 font-bold text-slate-900">
                        {grup.nama}
                      </td>
                      <td className="w-32 border border-black px-4 py-2 text-center font-bold text-slate-900">
                        Keterangan
                      </td>
                    </tr>

                    {BULAN.map((bulan) => {
                      const url = grup.link[bulan];
                      const tersedia = url && url !== "#";

                      return (
                        <tr key={`${grup.kode}-${bulan}`}>
                          <td className="border border-black px-3 py-2"></td>
                          <td className="border border-black px-4 py-2 text-slate-700">
                            {bulan}
                          </td>
                          <td className="border border-black px-4 py-2 text-center">
                            {tersedia ? (
                              <Link
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                              >
                                Lihat
                              </Link>
                            ) : (
                              <span className="inline-block rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                                Belum Tersedia
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
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