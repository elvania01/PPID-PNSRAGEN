import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          Selamat datang di E-PPID
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
          E-PPID merupakan media layanan informasi, sebagai bentuk keterbukaan informasi publik pada Pengadilan Negeri Sragen dan amanat Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik serta SK KMA
          Nomor 2-144/KMA/SK/VIII/2022 tentang Standar Pelayanan Informasi Publik di Pengadilan.
        </p>
      </div>
      <div className="relative aspect-[9/6] w-full overflow-hidden rounded-2xl">
        <Image
          src="/images.png"
          alt="Ilustrasi petugas PPID Pengadilan Negeri Sragen mengoperasikan laptop"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
