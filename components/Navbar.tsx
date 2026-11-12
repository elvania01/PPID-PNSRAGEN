"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const MENU: MenuItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profile",
    href: "/",
    children: [
      { label: "Profile Singkat", href: "/profil/profil-singkat" },
      { label: "Struktur PPID", href: "/profil/struktur-ppid" },
      { label: "Tugas Fungsi & Wewenang PPID", href: "/profil/tugas-wewenang" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
    ],
  },
  {
    label: "Regulasi",
    href: "/",
    children: [
      { label: "Penetapan SK DIP", href: "/regulasi/penetapan-sk" },
      { label: "Daftar Rancangan Peraturan, keputusan dan/atau kebijakan yang akan dikeluarkan/ditetapkan", href: "/regulasi/daftar-rancangan" },
      { label: "Peraturan Mengenai Keterbukaan Informasi Publik", href: "https://jdih.mahkamahagung.go.id/legal-product/sk-kma-nomor-2-144kmaskviii2022/detail" },
      { label: "SK PPID", href: "https://jdih.mahkamahagung.go.id/legal-product/sk-kptun-semarang-nomor-1694kptunw3-tun2skhm12viii2026/detail" },
      { label: "Regulasi Badan Publik", href: "/regulasi/regulasi-badan-publik" },
    ],
  },
  {
    label: "Informasi Publik",
    href: "/",
    children: [
      { label: "Daftar Informasi Publik", href: "/informasi-publik/daftar-informasi-publik" },
      { label: "Informasi Berkala", href: "/informasi-publik/informasi-berkala" },
      { label: "Informasi Serta Merta", href: "/informasi-publik/informasi-serta-merta" },      
      { label: "Informasi Tersedia Setiap Saat", href: "/informasi-publik/informasi-tersedia" },
      { label: "Informasi yang Dikecualikan", href: "/informasi-publik/informasi-dikecualikan" },
      { label: "Prosedur Permohonan Informasi", href: "/informasi-publik/prosedur-permohonan" },
      { label: "Prosedur Keberatan Informasi", href: "/informasi-publik/keberatan-informasi" },
      { label: "Prosedur Sengketa Informasi", href: "/informasi-publik/sengketa-informasi" },
      { label: "Formulir Permohonan Informasi", href: "https://drive.google.com/file/d/1ubO6qxu6qfbWLFGZYKPb2ru9ArJo0JGZ/view" },
      { label: "Formulir Keberatan Informasi", href: "https://drive.google.com/file/d/1XmzL4UnA3TJgakB0Dynl5T_SSN48HKn1/view" },
    ],
  },
  {
    label: "Laporan",
    href: "/",
    children: [
      { label: "Laporan Hasil Penanganan Pengaduan", href: "/laporan/laporan-hasil" },
      { label: "Laporan Bulanan", href: "/laporan/laporan-bulanan" },
      { label: "Survei IKM dan IPAK", href: "/laporan/survei-IKM-IPAK" },
      { label: "Informasi mengenai Laporan Akses Informasi Badan Publik", href: "/laporan/informasi-akses" },
      { label: "Laporan Layanan Informasi dan Dokumentasi", href: "/laporan/laporan-layanan" },
    ],
  },
  {
    label: "Standar Pelayanan", 
    href: "/",
    children: [
      { label: "SOP Peringatan Dini dan Evakuasi", href: "/standar-pelayanan/SOP-peringatan-dini" },
      { label: "SOP Pelayanan Informasi untuk Penyandang Disabilitas", href: "/standar-pelayanan/SOP-pelayanan-disabilitas" },
      { label: "SOP PPID", href: "/standar-pelayanan/SOP-PPID" },
      { label: "Jam Kerja dan Pelayanan", href: "/standar-pelayanan/jam-kerja-pelayanan" },
      { label: "Maklumat Pelayanan", href: "/standar-pelayanan/maklumat-pelayanan" },
    ],
  },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#EEF0FC]/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-pnsrg.png"
            alt="Logo PPID Pengadilan Negeri Sragen"
            width={55}
            height={55}
            className="h-11 w-11 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-slate-900">
              PPID
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              Pengadilan Negeri SRAGEN
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex" ref={dropdownRef}>
          {MENU.map((item) => (
            <li
              key={item.label}
              className="relative py-6" 
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <div 
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => item.children && setOpenDropdown(openDropdown === item.label ? null : item.label)}
              >
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-slate-700 transition-colors hover:text-slate-950"
                >
                  {item.label}
                </Link>
                {item.children && <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>

              {item.children && openDropdown === item.label && (
                <ul className="absolute left-0 top-full z-50 w-72 overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-xl max-h-[70vh]">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-[#EEF0FC] hover:text-slate-900"
                        onClick={() => setOpenDropdown(null)} 
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          aria-label="Buka menu"
          onClick={() => setOpenMobile((v) => !v)}
        >
          {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {openMobile && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden max-h-[80vh] overflow-y-auto">
          {MENU.map((item) => (
            <div key={item.label} className="border-b border-slate-100 py-2 last:border-none">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => item.children && setOpenDropdown(openDropdown === item.label ? null : item.label)}
              >
                <Link href={item.href} className="block font-medium text-slate-800">
                  {item.label}
                </Link>
                {item.children && <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>
              
              {item.children && openDropdown === item.label && (
                <div className="mt-2 ml-3 flex flex-col gap-2 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="text-sm text-slate-500 hover:text-slate-800"
                      onClick={() => setOpenMobile(false)} 
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}