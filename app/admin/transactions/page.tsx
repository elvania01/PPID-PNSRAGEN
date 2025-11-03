'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import DeleteButton from './DeleteButton';
import TransactionTableSkeleton from 'components/TransactionTableSkeleton';
import Pagination from '@/components/Pagination';
import TopNav2 from '@/components/topnav2';

interface Produk {
  id: number;
  name: string;
}

interface Transaksi {
  id_transaksi: number;
  nama_pembeli: string;
  tanggal_transaksi: string;
  total_harga: number;
  produk: Produk | null;
}

type SortKey = 'tanggal_transaksi' | 'nama_pembeli' | 'total_harga';

export default function TransactionListPage() {
  const [transactions, setTransactions] = useState<Transaksi[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' } | null>(null);

  const itemsPerPage = 7;

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = transactions.filter((trx) =>
    trx.produk?.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Sorting logic
  const sortedTransactions = [...filtered].sort((a, b) => {
    if (!sortConfig) return 0;

    const { key, direction } = sortConfig;

    let aValue = a[key];
    let bValue = b[key];

    // Convert to comparable values
    if (key === 'tanggal_transaksi') {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const getSortIcon = (key: SortKey) => {
    if (sortConfig?.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);
  const paginatedTransactions = sortedTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <TopNav2 />
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Transaksi</h1>
        <Link
          href="/admin/transactions/create"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          + Tambah Transaksi
        </Link>
      </div>

      <input
        type="text"
        placeholder="Cari Transaksi..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded mb-4 w-full"
      />

      {loading ? (
        <TransactionTableSkeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border shadow">
            <thead className="bg-pink-100">
              <tr>
                <th className="px-4 py-2 border">Produk</th>
                <th
                  className="px-4 py-2 border cursor-pointer"
                  onClick={() => handleSort('nama_pembeli')}
                >
                  Pembeli{getSortIcon('nama_pembeli')}
                </th>
                <th
                  className="px-4 py-2 border cursor-pointer"
                  onClick={() => handleSort('tanggal_transaksi')}
                >
                  Tanggal{getSortIcon('tanggal_transaksi')}
                </th>
                <th
                  className="px-4 py-2 border cursor-pointer"
                  onClick={() => handleSort('total_harga')}
                >
                  Total{getSortIcon('total_harga')}
                </th>
                <th className="px-4 py-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((trx) => (
                  <tr key={trx.id_transaksi} className="hover:bg-pink-50">
                    <td className="px-4 py-2 border">{trx.produk?.name ?? '-'}</td>
                    <td className="px-4 py-2 border">{trx.nama_pembeli}</td>
                    <td className="px-4 py-2 border">
                      {new Date(trx.tanggal_transaksi).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border">
                      Rp {trx.total_harga.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border flex space-x-2">
                      <Link
                        href={`/admin/transactions/edit/${trx.id_transaksi}`}
                        className="text-yellow-500 hover:text-yellow-700"
                      >
                        <FiEdit />
                      </Link>
                      <DeleteButton id={trx.id_transaksi} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    Tidak ada transaksi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {!loading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
