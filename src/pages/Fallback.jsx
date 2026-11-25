import { useState } from 'react';
import {
  MessageCircle,
  SlidersHorizontal,
  Info,
  LockKeyhole,
} from 'lucide-react';

const initialSettings = {
  active: true,
  phone: '+62 857-2800-4678',
  hours: 'Senin–Jumat, 08.00–15.00 WIB',
  url: 'https://pepebot.desa.id/layanan',
  message:
    'Maaf, saya belum menemukan jawabannya di panduan desa. Silakan hubungi petugas di {nomor_wa} pada {jam_layanan}, atau kunjungi {url_layanan}.',
};

export default function Fallback() {
  const [settings, setSettings] = useState(initialSettings);
  const [savedSettings, setSavedSettings] = useState(initialSettings);
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (field, value) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));
    setShowSuccess(false);
  };

  // Mengganti variabel pesan dengan data formulir
  const previewMessage = settings.message
    .replaceAll('{nomor_wa}', settings.phone || '{nomor_wa}')
    .replaceAll('{jam_layanan}', settings.hours || '{jam_layanan}')
    .replaceAll('{url_layanan}', settings.url || '{url_layanan}');

  const handleSave = (e) => {
    e.preventDefault();

    setSavedSettings({ ...settings });
    setShowSuccess(true);
  };

  const handleCancel = () => {
    setSettings({ ...savedSettings });
    setShowSuccess(false);
  };

  return (
    <div>

      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-2">
          PENGELOLAAN PEPEBOT
        </p>

        <h1 className="text-[28px] font-bold text-[#1e293b] tracking-tight">
          Pengaturan Fallback
        </h1>

        <p className="text-[13px] text-[#64748b] mt-2">
          Atur balasan otomatis saat Pepebot belum menemukan jawaban di Knowledge Base.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.65fr_0.9fr] gap-6 items-start">

        {/* Settings Form */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] px-7 py-7">

          <form onSubmit={handleSave}>

            {/* Section Heading */}
            <div className="flex items-center justify-between gap-4 mb-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#e9efff] flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-[#4776ff]" />
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold text-[#1e293b]">
                    Balasan fallback WhatsApp
                  </h2>

                  <p className="text-[12px] text-[#64748b] mt-1">
                    Dikirim otomatis bila pertanyaan di luar SOP
                  </p>
                </div>
              </div>

              {/* Active Toggle */}
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-[11px] font-semibold ${
                  settings.active ? 'text-[#477451]' : 'text-[#94a3b8]'
                }`}>
                  {settings.active ? 'Aktif' : 'Nonaktif'}
                </span>

                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.active}
                  onClick={() => updateField('active', !settings.active)}
                  className={`w-[46px] h-[26px] rounded-full p-[3px] flex items-center transition ${
                    settings.active ? 'bg-[#315ed0]' : 'bg-[#cbd5e1]'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                    settings.active ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

            </div>

            {/* Phone and Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

              <div>
                <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                  Nomor WhatsApp petugas
                </label>

                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+62 812-xxxx-xxxx"
                  className="w-full h-[50px] px-4 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                  Jam layanan
                </label>

                <input
                  type="text"
                  value={settings.hours}
                  onChange={(e) => updateField('hours', e.target.value)}
                  placeholder="Senin–Jumat, 08.00–15.00 WIB"
                  className="w-full h-[50px] px-4 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
                />
              </div>

            </div>

            {/* URL */}
            <div className="mb-5">
              <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                URL layanan online
              </label>

              <input
                type="url"
                value={settings.url}
                onChange={(e) => updateField('url', e.target.value)}
                placeholder="https://..."
                className="w-full h-[50px] px-4 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
              />
            </div>

            {/* Fallback Message */}
            <div className="mb-6">
              <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                Pesan fallback
              </label>

              <textarea
                value={settings.message}
                onChange={(e) => updateField('message', e.target.value)}
                rows={3}
                className="w-full min-h-[70px] px-4 py-3 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] leading-6 outline-none focus:border-[#315ed0] transition resize-y"
              />

              <p className="text-[11px] text-[#64748b] mt-2">
                Variabel yang tersedia: {'{nomor_wa}'}, {'{jam_layanan}'}, {'{url_layanan}'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={handleCancel}
                className="h-[48px] px-6 rounded-[10px] border border-[#dce4f1] text-[13px] font-semibold text-[#1e293b] hover:bg-[#f8fafc] transition"
              >
                Batalkan
              </button>

              <button
                type="submit"
                className="h-[48px] px-6 rounded-[10px] bg-[#315ed0] hover:bg-[#254db5] text-white text-[13px] font-semibold transition"
              >
                Simpan Pengaturan
              </button>

            </div>

            {showSuccess && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-[12px]">
                Pengaturan berhasil disimpan dalam simulasi frontend.
              </div>
            )}

          </form>
        </section>

        {/* WhatsApp Preview */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] p-6">

          <h2 className="text-[14px] font-semibold text-[#1e293b] mb-4">
            Pratinjau di WhatsApp
          </h2>

          {/* WhatsApp Chat */}
          <div className="bg-[#eee9e1] rounded-[12px] p-4 space-y-3">

            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[88%] bg-[#d9f8c6] rounded-[12px] rounded-tr-[3px] px-4 py-3">
                <p className="text-[12px] text-[#1e293b] leading-[19px]">
                  Kapan pajak PBB mulai dibuka?
                </p>
              </div>
            </div>

            {/* Bot Message */}
            <div className="flex justify-start">
              <div className="max-w-full bg-white rounded-[12px] rounded-tl-[3px] px-4 py-3">
                <p className="text-[12px] text-[#1e293b] leading-[19px] whitespace-pre-wrap break-words">
                  {settings.active
                    ? previewMessage
                    : 'Balasan fallback sedang dinonaktifkan.'}
                </p>

                <p className="text-[10px] text-[#64748b] mt-2">
                  09.41
                </p>
              </div>
            </div>

          </div>

          {/* Preview Information */}
          <div className="mt-4 bg-[#f3f6fb] rounded-[10px] p-3 flex items-start gap-2">
            <Info size={17} className="text-[#526486] shrink-0 mt-0.5" />

            <p className="text-[11px] leading-[17px] text-[#64748b]">
              Pratinjau memakai data di formulir. Variabel diganti otomatis saat dikirim.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
}