import { Files } from 'lucide-react';

const documents = [
  {
    name: 'Panduan KTP',
    size: '248 KB',
    date: '7 Nov 2026',
  },
  {
    name: 'Panduan KK',
    size: '216 KB',
    date: '7 Nov 2026',
  },
  {
    name: 'Panduan Surat Domisili',
    size: '186 KB',
    date: '6 Nov 2026',
  },
  {
    name: 'Panduan KIA',
    size: '186 KB',
    date: '6 Nov 2026',
  },
  {
    name: 'Panduan Akte Kematian',
    size: '186 KB',
    date: '5 Nov 2026',
  },
];

const categories = [
  {
    name: 'Kependudukan',
    total: 3,
    percentage: 43,
    description: 'KTP, KK, KIA',
  },
  {
    name: 'Surat Keterangan',
    total: 1,
    percentage: 15,
    description: 'Surat Domisili',
  },
  {
    name: 'Catatan Sipil',
    total: 2,
    percentage: 29,
    description: 'Akte Kematian, Akte Kelahiran',
  },
  {
    name: 'Lainnya',
    total: 1,
    percentage: 15,
    description: 'Bansos Ternak',
  },
];

export default function Dashboard() {
  return (
    <div>

      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-2">
          PENGELOLAAN PEPEBOT
        </p>

        <h1 className="text-[28px] font-bold text-[#1e293b] tracking-tight">
          Dasbor Ringkasan
        </h1>

        <p className="text-[13px] text-[#64748b] mt-2">
          Selamat pagi, Admin Desa. Ringkasan dokumen SOP dan layanan desa.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

        <div className="bg-white border border-[#dce4f1] rounded-[15px] p-6">
          <p className="text-[13px] text-[#64748b]">
            Total SOP
          </p>

          <h2 className="text-[36px] font-bold text-[#1e293b] mt-1">
            7
          </h2>

          <p className="text-[12px] text-[#64748b] mt-1">
            Dokumen layanan terdaftar
          </p>
        </div>

        <div className="bg-white border border-[#dce4f1] rounded-[15px] p-6">
          <p className="text-[13px] text-[#64748b]">
            Kategori Layanan
          </p>

          <h2 className="text-[36px] font-bold text-[#1e293b] mt-1">
            4
          </h2>

          <p className="text-[12px] text-[#64748b] mt-1">
            Kependudukan, Surat Keterangan, Catatan Sipil, Lainnya
          </p>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_0.9fr] gap-4">

        {/* Document Summary */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] p-6">

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[15px] font-semibold text-[#1e293b]">
                Ringkasan SOP
              </h2>

              <p className="text-[12px] text-[#64748b] mt-1">
                SOP terbaru yang diperbarui
              </p>
            </div>

            <a
              href="/documents"
              className="text-[12px] font-medium text-[#315ed0] hover:underline"
            >
              Lihat semua →
            </a>
          </div>

          <div className="space-y-6">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center gap-3">

                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#e9eef7] flex items-center justify-center">
                  <Files size={19} className="text-[#526486]" />
                </div>

                <div>
                  <h3 className="text-[13px] font-medium text-[#1e293b]">
                    {doc.name}
                  </h3>

                  <p className="text-[11px] text-[#64748b] mt-1">
                    PDF • {doc.size} • Admin Desa • {doc.date}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* Service Summary */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] p-6">

          <h2 className="text-[15px] font-semibold text-[#1e293b]">
            Ringkasan Layanan Desa
          </h2>

          <p className="text-[12px] text-[#64748b] mt-4 mb-5">
            Jumlah SOP per kategori layanan
          </p>

          <div className="space-y-5">
            {categories.map((category) => (
              <div key={category.name}>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-medium text-[#1e293b]">
                    {category.name}
                  </span>

                  <span className="text-[12px] text-[#1e293b]">
                    {category.total} SOP
                  </span>
                </div>

                <div className="w-full h-[8px] bg-[#e9eef7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3154b5] rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>

                <p className="text-[11px] text-[#64748b] mt-2">
                  {category.description}
                </p>

              </div>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}