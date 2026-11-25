import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Plus,
  Trash2,
} from 'lucide-react';

export default function AddDocument() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    condition: '',
    requirements: ['', '', ''],
    referenceUrl: '',
    notes: '',
  });

  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateRequirement = (index, value) => {
    setForm((current) => ({
      ...current,
      requirements: current.requirements.map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const addRequirement = () => {
    setForm((current) => ({
      ...current,
      requirements: [...current.requirements, ''],
    }));
  };

  const removeRequirement = (index) => {
    setForm((current) => ({
      ...current,
      requirements: current.requirements.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validRequirements = form.requirements
      .map((item) => item.trim())
      .filter(Boolean);

    if (!form.name.trim() || validRequirements.length === 0) {
      alert('Nama layanan dan minimal satu syarat wajib diisi.');
      return;
    }

    console.log('Data SOP:', {
      ...form,
      requirements: validRequirements,
    });

    setSaved(true);
  };

  return (
    <div>

      {/* Page Heading */}
      <div className="mb-7">
        <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-2">
          PENGELOLAAN PEPEBOT
        </p>

        <h1 className="text-[28px] font-bold text-[#1e293b] tracking-tight">
          Tambah Dokumen Desa
        </h1>

        <p className="text-[13px] text-[#64748b] mt-2">
          Tambah SOP dan Peraturan Desa sebagai sumber jawaban Pepebot.
        </p>
      </div>

      {/* Form Card */}
      <section className="bg-white border border-[#dce4f1] rounded-[15px] px-8 py-8 md:px-12 md:py-10">

        {/* Form Introduction */}
        <div className="mb-6">
          <div className="w-[58px] h-[58px] rounded-[14px] bg-[#e9eef7] flex items-center justify-center mb-5">
            <FileText size={25} className="text-[#1e293b]" />
          </div>

          <h2 className="text-[16px] font-semibold text-[#1e293b]">
            Isi Formulir Dokumen
          </h2>

          <p className="text-[12px] text-[#64748b] mt-2">
            Isi judul, kategori, dan isi dokumen untuk ditinjau sebelum disimpan.
          </p>

          <p className="text-[11px] text-[#64748b] mt-2">
            Pastikan judul, kategori, dan isi dokumen sudah sesuai.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name and Condition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-[11px] text-[#64748b] mb-2">
                Nama Layanan / SOP
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Contoh: Panduan KK"
                className="w-full h-[46px] px-3 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] placeholder:text-[#64748b] outline-none focus:border-[#315ed0] transition"
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#64748b] mb-2">
                Kondisi Khusus
              </label>

              <input
                type="text"
                value={form.condition}
                onChange={(e) => updateField('condition', e.target.value)}
                placeholder="Contoh: Pindah KK"
                className="w-full h-[46px] px-3 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] placeholder:text-[#64748b] outline-none focus:border-[#315ed0] transition"
              />
            </div>

          </div>

          {/* Requirements */}
          <div>
            <label className="block text-[11px] text-[#64748b] mb-3">
              Daftar Syarat & Ketentuan
            </label>

            <div className="space-y-2">
              {form.requirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-2">

                  <input
                    type="text"
                    value={requirement}
                    onChange={(e) =>
                      updateRequirement(index, e.target.value)
                    }
                    placeholder={`Syarat ${index + 1}`}
                    className="w-full h-[46px] px-3 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] placeholder:text-[#64748b] outline-none focus:border-[#315ed0] transition"
                  />

                  {form.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="h-[42px] w-[42px] shrink-0 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition"
                      aria-label={`Hapus syarat ${index + 1}`}
                    >
                      <Trash2 size={17} />
                    </button>
                  )}

                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addRequirement}
              className="mt-5 h-[38px] px-4 rounded-[10px] border border-[#8494b3] bg-[#dce4f1] hover:bg-[#cbd6e9] text-[#1e293b] text-[11px] font-semibold flex items-center gap-2 transition"
            >
              <Plus size={16} />
              Tambah Syarat
            </button>
          </div>

          {/* Reference and Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-[11px] text-[#64748b] mb-2">
                URL Rujukan (Opsional)
              </label>

              <input
                type="url"
                value={form.referenceUrl}
                onChange={(e) =>
                  updateField('referenceUrl', e.target.value)
                }
                placeholder="https://..."
                className="w-full h-[46px] px-3 rounded-[10px] border border-[#dce4f1] text-[13px] outline-none focus:border-[#315ed0] transition"
              />

              <p className="text-[11px] text-[#64748b] mt-2">
                Tautan sumber aturan, jika ada.
              </p>
            </div>

            <div>
              <label className="block text-[11px] text-[#64748b] mb-2">
                Catatan Tambahan (Opsional)
              </label>

              <input
                type="text"
                value={form.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Contoh: Proses 3 hari kerja"
                className="w-full h-[46px] px-3 rounded-[10px] border border-[#dce4f1] text-[13px] outline-none focus:border-[#315ed0] transition"
              />

              <p className="text-[11px] text-[#64748b] mt-2">
                Informasi tambahan, misalnya lama proses.
              </p>
            </div>

          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="h-[42px] px-5 bg-[#315ed0] hover:bg-[#254db5] text-white rounded-[10px] text-[13px] font-semibold transition"
            >
              Simpan SOP
            </button>
          </div>

        </form>
      </section>

      {/* Success Message */}
      {saved && (
        <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-sm font-semibold text-green-700">
            Data SOP berhasil divalidasi!
          </p>

          <p className="text-xs text-green-700 mt-1">
            Data masih berupa simulasi dan belum tersimpan ke database.
          </p>

          <button
            onClick={() => navigate('/documents')}
            className="mt-3 text-sm font-semibold text-green-700 hover:underline"
          >
            Kembali ke Manajemen SOP
          </button>
        </div>
      )}

    </div>
  );
}