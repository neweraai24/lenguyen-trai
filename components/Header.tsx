"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand, Icon } from "./ui";

const LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-toi", label: "Về tôi" },
  { href: "/tu-duy-dong-tien", label: "Tư duy dòng tiền" },
  { href: "/he-sinh-thai", label: "Phương pháp & Hệ sinh thái" },
  { href: "/cong-dong", label: "Cộng đồng" },
  { href: "/thu-vien", label: "Thư viện" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className={`site-header${open ? " open" : ""}`}>
      <div className="wrap hdr">
        <Brand />
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((o) => !o)}>
          <Icon name="i-menu" />
          Menu
        </button>
        <nav className="nav" id="nav" aria-label="Điều hướng chính">
          {LINKS.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn--gold" href="/ket-noi" onClick={() => setOpen(false)} aria-current={isActive("/ket-noi") ? "page" : undefined}>
            Kết nối
          </Link>
        </nav>
      </div>
    </header>
  );
}
