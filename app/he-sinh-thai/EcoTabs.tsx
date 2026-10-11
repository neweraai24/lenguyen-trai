"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "sp500", label: "Đầu tư S&P500 & IB" },
  { id: "vinalink", label: "Mạng lưới tiêu dùng Vinalink" },
  { id: "dao-tao", label: "Đào tạo & phát triển con người" },
];

/** Thanh tab dính: đánh dấu lĩnh vực đang xem theo vị trí cuộn và theo #anchor. */
export default function EcoTabs() {
  const [active, setActive] = useState("sp500");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (TABS.some((t) => t.id === h)) setActive(h);
    };
    sync();
    window.addEventListener("hashchange", sync);

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    TABS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("hashchange", sync);
      obs.disconnect();
    };
  }, []);

  return (
    <nav className="tabs" aria-label="Lĩnh vực">
      <div className="wrap">
        {TABS.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={active === t.id ? "on" : undefined} aria-current={active === t.id ? "true" : undefined}>
            {t.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
