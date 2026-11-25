import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Bot,
} from 'lucide-react';

import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import AddDocument from './pages/AddDocument';
import Fallback from './pages/Fallback';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetLinkSent from './pages/ResetLinkSent';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f6fb] flex flex-col items-center justify-center px-5 py-10">

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

      <div className="w-full max-w-[460px] bg-white border border-[#dce4f1] rounded-[15px] px-9 py-9">

        <div className="flex items-center gap-2 mb-3">
          <LockKeyhole size={16} className="text-[#526486]" />
          <span className="text-[10px] text-[#64748b]">
            AKSES KHUSUS PETUGAS
          </span>
        </div>

        <h2 className="text-[27px] font-bold text-[#1e293b] mb-2">
          Masuk Admin
        </h2>

        <p className="text-[13px] text-[#64748b] mb-7">
          Gunakan akun petugas untuk mengelola layanan dan pengetahuan desa.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = '/dashboard';
          }}
          className="space-y-5"
        >
          <div>
            <label className="block text-[13px] font-medium mb-2">
              Email/ID Petugas
            </label>

            <div className="relative">
              <UserRound size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#526486]" />
              <input
                required
                type="text"
                placeholder="Masukkan Email/ID Petugas"
                className="w-full h-[54px] pl-10 pr-4 rounded-[10px] border border-[#dce4f1] text-[14px] outline-none focus:border-[#315ed0]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium mb-2">
              Kata Sandi
            </label>

            <div className="relative">
              <LockKeyhole size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#526486]" />

              <input
                required
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan kata sandi"
                className="w-full h-[54px] pl-10 pr-11 rounded-[10px] border border-[#dce4f1] text-[14px] outline-none focus:border-[#315ed0]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#526486]"
              >
                {showPassword ? <Eye size={19} /> : <EyeOff size={19} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <a href="/forgot-password" className="text-[13px] text-[#315ed0]">
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-[#315ed0] hover:bg-[#254db5] text-white rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold"
          >
            <ArrowRight size={18} />
            Masuk Dasbor
          </button>
        </form>
      </div>

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/new" element={<AddDocument />} />
          <Route path="/fallback" element={<Fallback />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;