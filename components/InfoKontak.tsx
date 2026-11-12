"use client";

import Link from "next/link";
import { ClipboardList, MapPin, Phone, Clock } from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Permohonan Informasi",
    description:
      "e-PPID ini dapat digunakan untuk mengajukan permintaan informasi sesuai dengan Undang-Undang Keterbukaan Informasi Publik.",
    href: "/permohonan",
  },
  {
    title: "Keberatan Informasi",
    description:
      "e-PPID ini dapat digunakan untuk mengajukan keberatan atas permohonan informasi yang tidak sesuai dengan ketentuan Undang-Undang Keterbukaan Informasi Publik.",
    href: "/keberatan",
  },
];

type ContactCard = {
  icon: React.ElementType;
  title: string;
  lines: string[];
};

const CONTACTS: ContactCard[] = [
  {
    icon: MapPin,
    title: "Alamat",
    lines: [
      "Jalan Raya Sukowati No. 253 Sragen, Jawa Tengah",
       "57211",
    ],
  },
  {
    icon: Phone,
    title: "Kontak Kami",
    lines: ["Phone: (0271) 891098", "Email: info@pn1-sragen.go.id"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: [
            "Senin - Kamis : 08:00 - 16:30 WIB |",
            "Istirahat 12:00 - 13:00 WIB",
            "Jum'at : 07:30 - 16:30 WIB |",
            "Istirahat 11:30 - 13:00 WIB",
          ],},];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-900" />
    </div>
  );
}

export default function InfoKontak() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading title="Ajukan Permohonan dan Keberatan" />
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-slate-600">
          Silahkan login untuk mengajukan permohonan informasi publik atau
          menyampaikan keberatan terkait informasi yang Anda terima.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FC]">
                <ClipboardList className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-800 hover:text-blue-900"
              >
                Selengkapnya
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading title="Kontak" />

        <div className="grid gap-6 md:grid-cols-3">
          {CONTACTS.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0FC]">
                <Icon className="h-5 w-5 text-blue-900" />
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <p className="text-center text-sm text-slate-500">
          © Pengadilan Negeri Sragen - 2026
        </p>
      </footer>
    </>
  );
}