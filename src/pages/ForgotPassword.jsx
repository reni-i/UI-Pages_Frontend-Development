import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LockKeyhole,
  UserRound,
  ArrowRight,
  ShieldCheck,
  Bot,
} from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('admin@pepe.desa.id');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/reset-link-sent', {
      state: { email },
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f6fb] flex flex-col items-center justify-center px-5 py-10">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-7">
        <Bot size={42} className="text-[#315ed0]" />

        <div>
          <h1 className="text-[24px] font-bold text-[#1e293b]">
            Pepebot
          </h1>
          <p className="text-[9px] tracking-[2px] text-[#64748b]">
            ADMIN DESA
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[460px] bg-white border border-[#dce4f1] rounded-[15px] px-9 py-9">

        <div className="flex items-center gap-2 mb-3">
          <LockKeyhole size={16} className="text-[#526486]" />
          <span className="text-[10px] text-[#64748b]">
            AKSES KHUSUS PETUGAS
          </span>
        </div>

        <h2 className="text-[27px] font-bold text-[#1e293b] mb-2">
          Lupa Kata Sandi
        </h2>

        <p className="text-[13px] text-[#64748b] leading-[21px] mb-7">
          Masukkan email petugas Anda. Kami akan mengirim tautan untuk mengatur ulang kata sandi.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-7">
            <label className="block text-[13px] font-medium text-[#1e293b] mb-2">
              Email Petugas
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#526486]"
              />

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email petugas"
                className="w-full h-[54px] pl-10 pr-4 rounded-[10px] border border-[#dce4f1] text-[14px] text-[#1e293b] outline-none focus:border-[#315ed0] transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-[#315ed0] hover:bg-[#254db5] text-white rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold"
          >
            <ArrowRight size={18} />
            Kirim Tautan Reset
          </button>

        </form>

        <div className="mt-7">
          <p className="text-[12px] font-semibold text-[#1e293b] mb-2">
            Ingat kata sandi Anda?
          </p>

          <Link
            to="/"
            className="text-[12px] text-[#315ed0] hover:underline"
          >
            Kembali ke halaman masuk
          </Link>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-7 text-center">
        <p className="text-[11px] text-[#64748b]">
          Pepebot Admin • Desa Pepe, Sidoarjo
        </p>

        <div className="flex items-center justify-center gap-2 mt-7">
          <ShieldCheck size={17} className="text-[#526486]" />
          <p className="text-[12px] text-[#64748b]">
            Ruang kerja internal perangkat Desa Pepe
          </p>
        </div>
      </div>

    </div>
  );
}