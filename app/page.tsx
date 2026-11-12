import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import InfoKontak from "@/components/InfoKontak";

export const metadata = {
  title: "Beranda",
  description:"Media layanan informasi publik Pengadilan Negeri Sragen sesuai UU No. 14 Tahun 2008 dan SK KMA No. 2-144/KMA/SK/VIII/2022."};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#EEF0FC]">
      <Navbar />
      <Hero />
      <InfoCards />
      <InfoKontak />
    </main>
  );
}