'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

type Produk = {
  id: string;
  name: string;
  price: number;
};

export default function EditTransactionPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null);

  const [formData, setFormData] = useState({
    produkId: '',
    nama_pembeli: '',
    tanggal_transaksi: '',
    quantity: 1,
    total_harga: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch produk list
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProdukList(data));

    // Fetch transaksi
    if (id) {
      fetch(`/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            produkId: data.produkId,
            nama_pembeli: data.nama_pembeli,
            tanggal_transaksi: data.tanggal_transaksi.slice(0, 10),
            quantity: data.quantity || 1,
            total_harga: data.total_harga,
          });

          setTimeout(() => setLoading(false), 100); // Delay supaya produkList sempat terisi
        });
    }
  }, [id]);

  useEffect(() => {
    if (produkList.length > 0 && formData.produkId) {
      const produk = produkList.find((p) => p.id === formData.produkId) || null;
      setSelectedProduk(produk);
    }
  }, [produkList, formData.produkId]);

  useEffect(() => {
    if (selectedProduk) {
      const total = selectedProduk.price * formData.quantity;
      setFormData((prev) => ({
        ...prev,
        total_harga: total,
      }));
    }
  }, [selectedProduk, formData.quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'produkId') {
      const produk = produkList.find((p) => p.id === value) || null;
      setSelectedProduk(produk);

      setFormData((prev) => ({
        ...prev,
        produkId: value,
        total_harga: produk ? produk.price * prev.quantity : 0,
      }));
    } else if (name === 'quantity') {
      const qty = parseInt(value) || 1;
      setFormData((prev) => ({
        ...prev,
        quantity: qty,
        total_harga: selectedProduk ? selectedProduk.price * qty : 0,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/transactions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/admin/transactions');
    } else {
      alert('Gagal mengedit transaksi');
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Transaksi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="produkId"
          value={formData.produkId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Pilih Produk</option>
          {produkList.map((produk) => (
            <option key={produk.id} value={produk.id}>
              {produk.name} - Rp {produk.price.toLocaleString()}
            </option>
          ))}
        </select>

        <input
          name="nama_pembeli"
          value={formData.nama_pembeli}
          onChange={handleChange}
          placeholder="Nama Pembeli"
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="tanggal_transaksi"
          type="date"
          value={formData.tanggal_transaksi}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="quantity"
          type="number"
          min={1}
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Jumlah Bunga"
          required
        />

        <input
          name="total_harga"
          type="number"
          value={formData.total_harga}
          readOnly
          className="w-full p-2 border rounded bg-gray-100 text-gray-600"
        />

        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
