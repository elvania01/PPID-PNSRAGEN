import { ClipboardList } from "lucide-react";

type InfoCard = {
  title: string;
  description: string;
};

const CARDS: InfoCard[] = [
  { title: "Informasi Berkala", description: "Informasi yang wajib diperbaharui kemudian disediakan dan diumumkan kepada publik secara rutin"},
  { title: "Informasi Serta Merta", description: "Informasi yang diumumkan secara serta merta tanpa penundaan"},
  { title: "Informasi Wajib Tersedia", description: "Informasi yang wajib tersedia setiap saat dan dapat diakses publik"},
  { title: "Informasi Tanggap Cepat", description: "Layanan informasi cepat yang disediakan oleh Pengadilan Negeri Sragen dengan menggunakan Whatsapp Bot"},
];

export default function InfoCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF0FC]">
              <ClipboardList className="h-5 w-5 text-[#2A38E8]" />
            </div>
            <h3 className="mb-2 text-base font-bold text-slate-900">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
