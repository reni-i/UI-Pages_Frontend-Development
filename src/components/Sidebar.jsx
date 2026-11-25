import { NavLink } from 'react-router-dom';
import {
  Bot,
  LayoutDashboard,
  Files,
  SlidersHorizontal,
  UserRound,
  BookOpen,
  LockKeyhole,
} from 'lucide-react';

const menus = [
  {
    name: 'Dasbor',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Manajemen SOP',
    path: '/documents',
    icon: Files,
  },
  {
    name: 'Pengaturan Fallback',
    path: '/fallback',
    icon: SlidersHorizontal,
  },
  {
    name: 'Profil',
    path: '/profile',
    icon: UserRound,
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-[252px] bg-white border-r border-[#dce4f1] flex flex-col shrink-0 self-start overflow-y-auto">

      {/* Logo */}
      <div className="h-[100px] flex items-center px-5 gap-3">
        <Bot size={40} className="text-[#315ed0]" />

        <div>
          <h1 className="text-[23px] font-bold text-[#1e293b] leading-tight">
            Pepebot
          </h1>
          <p className="text-[9px] tracking-[2px] text-[#64748b]">
            ADMIN DESA
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="px-5 mt-4">
        <p className="text-[10px] tracking-[1.5px] text-[#64748b] mb-3">
          RUANG KELOLA
        </p>

        <nav className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3.5 rounded-xl text-[13px] transition ${
                    isActive
                      ? 'bg-[#e7efff] text-[#1e293b] font-semibold'
                      : 'text-[#64748b] hover:bg-[#f3f6fb]'
                  }`
                }
              >
                <Icon size={19} />
                {menu.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Information Card */}
      <div className="mt-auto px-5 mb-5">
        <div className="bg-[#f3f6fb] rounded-xl p-4 mb-5">
          <BookOpen size={19} className="text-[#526486] mb-3" />

          <h3 className="text-[12px] font-semibold text-[#1e293b] leading-5 mb-2">
            Panduan terjaga, layanan lebih terbantu.
          </h3>

          <p className="text-[11px] text-[#64748b] leading-[18px]">
            Perbarui dokumen SOP secara berkala agar layanan desa tetap akurat.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#64748b]">
          <LockKeyhole size={15} />
          Khusus petugas desa
        </div>
      </div>
    </aside>
  );
}