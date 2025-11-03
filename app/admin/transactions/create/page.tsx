'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Produk {
  id: string;
  name: string;
  price: number;
}

export default function CreateTransactionPage() {
  const router = useRouter();

  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null);

  const [form, setForm] = useState({
    produkId: '',
    nama_pembeli: '',
    tanggal_transaksi: '',
    quantity: 1,
    total_harga: 0,
  });

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProdukList(data));
  }, []);

  useEffect(() => {
    if (selectedProduk) {
      const total = selectedProduk.price * form.quantity;
      setForm((prev) => ({ ...prev, total_harga: total }));
    }
  }, [form.quantity, selectedProduk]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'produkId') {
      const produk = produkList.find((p) => p.id === value) || null;
      setSelectedProduk(produk);

      setForm((prev) => ({
        ...prev,
        produkId: value,
        total_harga: produk ? produk.price * prev.quantity : 0,
      }));
    } else if (name === 'quantity') {
      const qty = parseInt(value) || 1;
      setForm((prev) => ({
        ...prev,
        quantity: qty,
        total_harga: selectedProduk ? selectedProduk.price * qty : 0,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/admin/transactions');
    } else {
      alert('Gagal menyimpan transaksi');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tambah Transaksi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="produkId"
          value={form.produkId}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Pilih Produk</option>
          {produkList.map((produk) => (
            <option key={produk.id} value={produk.id}>
              {produk.name} - Rp {produk.price.toLocaleString()}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="nama_pembeli"
          value={form.nama_pembeli}
          onChange={handleChange}
          placeholder="Nama Pembeli"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="date"
          name="tanggal_transaksi"
          value={form.tanggal_transaksi}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          min={1}
          value={form.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Jumlah Bunga"
          required
        />

        <input
          type="number"
          name="total_harga"
          value={form.total_harga}
          readOnly
          className="w-full p-2 border rounded bg-gray-100 text-gray-600"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Simpan Transaksi
        </button>
      </form>
    </div>
  );
}
