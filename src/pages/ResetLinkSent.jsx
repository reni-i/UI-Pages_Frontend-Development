import { Link, useLocation } from 'react-router-dom';
import {
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
  Bot,
  CircleCheck,
} from 'lucide-react';

export default function ResetLinkSent() {
  const location = useLocation();

  const email = location.state?.email || 'admin@pepe.desa.id';

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

      {/* Confirmation Card */}
      <div className="w-full max-w-[460px] bg-white border border-[#dce4f1] rounded-[15px] px-9 py-9">

        <div className="flex items-center gap-2 mb-3">
          <LockKeyhole size={16} className="text-[#526486]" />
          <span className="text-[10px] text-[#64748b]">
            AKSES KHUSUS PETUGAS
          </span>
        </div>

        <h2 className="text-[27px] font-bold text-[#1e293b] mb-2">
          Periksa Email Anda
        </h2>

        <p className="text-[13px] text-[#64748b] leading-[21px] mb-7">
          Jika email terdaftar, tautan pengaturan ulang kata sandi akan tiba dalam beberapa menit.
        </p>

        {/* Success Notification */}
        <div className="bg-[#eef5ef] border border-[#cce0d0] rounded-[10px] p-4 flex items-start gap-3 mb-7">

          <CircleCheck
            size={19}
            className="text-[#52785a] shrink-0 mt-0.5"
          />

          <p className="text-[13px] text-[#1e293b] leading-[20px]">
            Tautan reset kata sandi telah dikirim ke{' '}
            <span className="font-medium">{email}</span>.
            {' '}Tautan berlaku selama 30 menit.
          </p>

        </div>

        {/* Back to Login */}
        <Link
            to="/"
            className="w-full h-[48px] bg-[#315ed0] hover:bg-[#254db5] text-white rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold"
          >
            <ArrowRight size={18} />
            Kembali ke Halaman Masuk
          </Link>

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