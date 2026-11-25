import { useState } from 'react';
import {
  UserRound,
  Eye,
  EyeOff,
} from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Admin Desa',
    email: 'admin@pepe.desa.id',
  });

  const [savedProfile, setSavedProfile] = useState(profile);

  const [passwords, setPasswords] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const [profileMessage, setProfileMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const updateProfile = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
    setProfileMessage('');
  };

  const updatePassword = (field, value) => {
    setPasswords((current) => ({
      ...current,
      [field]: value,
    }));
    setPasswordMessage('');
    setPasswordError('');
  };

  const togglePassword = (field) => {
    setShowPassword((current) => ({
      ...current,
      [field]: !current[field],
    }));
  };

  // Simulasi menyimpan profil
  const handleProfileSubmit = (e) => {
    e.preventDefault();

    if (!profile.name.trim() || !profile.email.trim()) {
      setProfileMessage('Nama dan email wajib diisi.');
      return;
    }

    setSavedProfile({ ...profile });
    setProfileMessage('Informasi profil berhasil disimpan (simulasi).');
  };

  // Simulasi mengubah kata sandi
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (!passwords.current || !passwords.newPassword || !passwords.confirm) {
      setPasswordError('Semua kolom kata sandi wajib diisi.');
      return;
    }

    if (passwords.newPassword.length < 8) {
      setPasswordError('Kata sandi baru minimal 8 karakter.');
      return;
    }

    if (passwords.newPassword !== passwords.confirm) {
      setPasswordError('Konfirmasi kata sandi baru tidak cocok.');
      return;
    }

    if (passwords.current === passwords.newPassword) {
      setPasswordError('Kata sandi baru harus berbeda dari kata sandi saat ini.');
      return;
    }

    setPasswordMessage('Validasi berhasil. Perubahan masih berupa simulasi frontend.');

    setPasswords({
      current: '',
      newPassword: '',
      confirm: '',
    });
  };

  // Simulasi penghapusan akun
  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      'Apakah kamu yakin ingin menghapus akun Admin Desa? Tindakan ini tidak dapat dibatalkan.'
    );

    if (confirmed) {
      window.alert(
        'Simulasi penghapusan akun. Akun asli tidak dihapus karena belum terhubung ke backend.'
      );
    }
  };

  // Komponen input kata sandi
  const PasswordField = ({ label, field, placeholder }) => (
    <div>
      <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword[field] ? 'text' : 'password'}
          value={passwords[field]}
          onChange={(e) => updatePassword(field, e.target.value)}
          placeholder={placeholder}
          className="w-full h-[50px] px-4 pr-12 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
        />

        <button
          type="button"
          onClick={() => togglePassword(field)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#315ed0]"
          aria-label={showPassword[field] ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
        >
          {showPassword[field] ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div>

      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-2">
          PENGELOLAAN PEPEBOT
        </p>

        <h1 className="text-[28px] font-bold text-[#1e293b] tracking-tight">
          Profil
        </h1>

        <p className="text-[13px] text-[#64748b] mt-2">
          Kelola informasi akun dan keamanan kata sandi Anda.
        </p>
      </div>

      {/* Profile and Password */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">

        {/* Profile Information */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] p-7 md:p-8">

          {/* Admin Identity */}
          <div className="flex items-center gap-4 mb-11">
            <div className="w-16 h-16 rounded-full bg-[#e9efff] flex items-center justify-center shrink-0">
              <span className="text-[20px] font-semibold text-[#3156bd]">
                {profile.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-[#1e293b]">
                {profile.name}
              </h2>

              <p className="text-[12px] text-[#64748b] mt-1">
                Petugas pengelola Pepebot
              </p>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleProfileSubmit}>

            <h3 className="text-[15px] font-semibold text-[#1e293b] mb-6">
              Informasi Profil
            </h3>

            <div className="space-y-5">

              <div>
                <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                  Nama
                </label>

                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile('name', e.target.value)}
                  placeholder="Masukkan nama"
                  className="w-full h-[50px] px-4 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
                />
              </div>

              <div>
                <label className="block text-[12px] font-medium text-[#1e293b] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => updateProfile('email', e.target.value)}
                  placeholder="Masukkan email"
                  className="w-full h-[50px] px-4 rounded-[10px] border border-[#dce4f1] text-[13px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-5 h-[48px] px-6 rounded-[10px] bg-[#315ed0] hover:bg-[#254db5] text-white text-[13px] font-semibold transition"
            >
              Simpan Perubahan
            </button>

            {profileMessage && (
              <p className={`mt-3 text-[12px] ${
                profileMessage.includes('berhasil')
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}>
                {profileMessage}
              </p>
            )}

          </form>
        </section>

        {/* Change Password */}
        <section className="bg-white border border-[#dce4f1] rounded-[15px] p-7 md:p-8">

          <h2 className="text-[16px] font-semibold text-[#1e293b]">
            Ubah Kata Sandi
          </h2>

          <p className="text-[12px] text-[#64748b] mt-4 mb-6">
            Gunakan kata sandi yang panjang dan sulit ditebak.
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-5">

            <PasswordField
              label="Kata sandi saat ini"
              field="current"
              placeholder="Masukkan kata sandi saat ini"
            />

            <PasswordField
              label="Kata sandi baru"
              field="newPassword"
              placeholder="Masukkan kata sandi baru"
            />

            <PasswordField
              label="Konfirmasi kata sandi baru"
              field="confirm"
              placeholder="Ulangi kata sandi baru"
            />

            {passwordError && (
              <p className="text-[12px] text-red-500">
                {passwordError}
              </p>
            )}

            {passwordMessage && (
              <p className="text-[12px] text-green-600">
                {passwordMessage}
              </p>
            )}

            <button
              type="submit"
              className="h-[48px] px-6 rounded-[10px] bg-[#315ed0] hover:bg-[#254db5] text-white text-[13px] font-semibold transition"
            >
              Perbarui Kata Sandi
            </button>

          </form>
        </section>

      </div>

      {/* Delete Account */}
      <section className="mt-6 bg-white border border-[#ffc7c1] rounded-[15px] px-7 py-6 flex flex-col md:flex-row md:items-center justify-between gap-5">

        <div>
          <h2 className="text-[14px] font-semibold text-[#d33d35]">
            Hapus Akun
          </h2>

          <p className="text-[12px] text-[#64748b] mt-2 leading-5">
            Menghapus akun akan mencabut akses Anda ke dasbor admin secara permanen.
            Tindakan ini tidak dapat dibatalkan.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDeleteAccount}
          className="h-[44px] px-6 rounded-[10px] border border-[#ffc7c1] text-[#d33d35] text-[13px] font-semibold hover:bg-red-50 transition shrink-0"
        >
          Hapus Akun
        </button>

      </section>

    </div>
  );
}