import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Landmark, ChevronDown, ShieldCheck } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function AdminLayout() {
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const pageNames = {
    '/dashboard': 'Dasbor',
    '/documents': 'Manajemen SOP',
    '/documents/new': 'Manajemen SOP',
    '/fallback': 'Pengaturan Fallback',
    '/profile': 'Profil',
  };

  const currentPage = pageNames[location.pathname] || 'Dasbor';

  return (
    <div className="min-h-screen flex bg-[#f3f6fb]">

      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">

        {/* Header */}
        <header className="sticky top-0 z-30 h-[84px] shrink-0 bg-white border-b border-[#dce4f1] px-8 flex items-center justify-between">

          <div className="flex items-center gap-4 text-[12px]">
            <Landmark size={19} className="text-[#526486]" />

            <span className="text-[#64748b]">
              Desa Pepe, Sidoarjo
            </span>

            <span className="text-[#cbd5e1]">/</span>

            <span className="font-medium text-[#1e293b]">
              {currentPage}
            </span>
          </div>

          <div className="relative">

            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-[#e9eef7] flex items-center justify-center text-[11px] text-[#1e293b]">
                AD
              </div>

              <span className="text-[13px] text-[#1e293b]">
                Admin Desa
              </span>

              <ChevronDown
                size={17}
                className={`text-[#526486] transition-transform ${
                  showDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-full mt-3 w-[160px] bg-white border border-[#dce4f1] rounded-xl shadow-lg py-2 z-50">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/');
                  }}
                  className="w-full px-4 py-2.5 text-left text-[13px] text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}

          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="h-14 px-8 flex items-center gap-2 text-[10px] text-[#64748b]">
          <ShieldCheck size={16} />
          Ruang kerja internal perangkat Desa Pepe
        </footer>

      </div>
    </div>
  );
}