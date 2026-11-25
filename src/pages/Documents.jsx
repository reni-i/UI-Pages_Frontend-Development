import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Plus,
  FileText,
} from 'lucide-react';

const initialDocuments = [
  {
    id: 1,
    name: 'Panduan KTP',
    size: '248 KB',
    date: '7 Nov 2026',
    time: '09.15',
    author: 'Admin Desa',
  },
  {
    id: 2,
    name: 'Panduan KK',
    size: '216 KB',
    date: '7 Nov 2026',
    time: '09.30',
    author: 'Admin Desa',
  },
  {
    id: 3,
    name: 'Panduan Surat Domisili',
    size: '186 KB',
    date: '6 Nov 2026',
    time: '14.20',
    author: 'Admin Desa',
  },
  {
    id: 4,
    name: 'Panduan KIA',
    size: '186 KB',
    date: '6 Nov 2026',
    time: '14.20',
    author: 'Admin Desa',
  },
  {
    id: 5,
    name: 'Panduan Akte Kematian',
    size: '186 KB',
    date: '5 Nov 2026',
    time: '14.20',
    author: 'Admin Desa',
  },
  {
    id: 6,
    name: 'Panduan Akte Kelahiran',
    size: '186 KB',
    date: '5 Nov 2026',
    time: '14.20',
    author: 'Admin Desa',
  },
  {
    id: 7,
    name: 'Panduan Bansos Ternak',
    size: '186 KB',
    date: '4 Nov 2026',
    time: '10.00',
    author: 'Admin Desa',
  },
];

export default function Documents() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [search, setSearch] = useState('');

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Apakah kamu yakin ingin menghapus dokumen ini?'
    );

    if (confirmed) {
      setDocuments((current) =>
        current.filter((doc) => doc.id !== id)
      );
    }
  };

  const handleView = (doc) => {
    window.alert(
      `Nama Dokumen: ${doc.name}\nUkuran: ${doc.size}\nTanggal: ${doc.date}`
    );
  };

  return (
    <div>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">

        <div>
          <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-2">
            PENGELOLAAN PEPEBOT
          </p>

          <h1 className="text-[28px] font-bold text-[#1e293b] tracking-tight">
            Manajemen Dokumen Desa
          </h1>

          <p className="text-[13px] text-[#64748b] mt-2">
            Kelola SOP dan Peraturan Desa sebagai sumber jawaban Pepebot.
          </p>
        </div>

        <Link
          to="/documents/new"
          className="h-[44px] px-5 bg-[#315ed0] hover:bg-[#254db5] text-white rounded-[10px] flex items-center justify-center gap-2 text-[14px] font-semibold transition shrink-0"
        >
          <Plus size={18} />
          Tambah SOP
        </Link>

      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#526486]"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari nama dokumen..."
          className="w-full h-[48px] pl-11 pr-4 bg-white border border-[#dce4f1] rounded-[10px] text-[13px] text-[#1e293b] placeholder:text-[#64748b] outline-none focus:border-[#315ed0] transition"
        />
      </div>

      {/* Document Table */}
      <section className="bg-white border border-[#dce4f1] rounded-[15px] overflow-hidden">

        {/* Table Heading */}
        <div className="px-5 py-5 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-[#1e293b]">
            Daftar dokumen
          </h2>

          <span className="text-[12px] text-[#64748b]">
            {documents.length} dokumen
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">

            <thead>
              <tr className="bg-[#f3f6fb] text-[12px] text-[#64748b]">
                <th className="font-medium px-6 py-4">
                  Nama Dokumen
                </th>

                <th className="font-medium px-6 py-4">
                  Tanggal
                </th>

                <th className="font-medium px-6 py-4">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredDocuments.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-b border-[#dce4f1] last:border-b-0 hover:bg-[#fafbfe] transition"
                >

                  {/* Document Name */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-11 rounded-lg bg-[#f3f6fb] flex items-center justify-center shrink-0">
                        <FileText
                          size={19}
                          className="text-[#1e293b]"
                        />
                      </div>

                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1e293b]">
                          {doc.name}
                        </h3>

                        <p className="text-[11px] text-[#64748b] mt-1">
                          PDF • {doc.size} • {doc.author}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-5">
                    <p className="text-[12px] text-[#1e293b]">
                      {doc.date}
                    </p>

                    <p className="text-[11px] text-[#64748b] mt-1">
                      {doc.time} • {doc.author}
                    </p>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => handleView(doc)}
                        className="h-[48px] px-4 border border-[#dce4f1] rounded-[10px] text-[13px] font-medium text-[#1e293b] hover:bg-[#f3f6fb] transition"
                      >
                        Lihat
                      </button>

                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="h-[48px] px-4 border border-[#dce4f1] rounded-[10px] text-[13px] font-medium text-[#cf443c] hover:bg-red-50 transition"
                      >
                        Hapus
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

              {filteredDocuments.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-12 text-[13px] text-[#64748b]"
                  >
                    Dokumen tidak ditemukan.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
}