import Link from "next/link";
import type { ReactNode } from "react";

export type IconName =
  | "mark" | "mark-p" | "i-arrow" | "i-menu" | "i-play" | "i-index" | "i-leaf" | "i-people"
  | "i-coin" | "i-pulse" | "i-link" | "i-calm" | "i-mail" | "i-phone" | "i-chat" | "i-video" | "i-globe";

/** Biểu tượng lấy từ /public/sprite.svg — màu theo currentColor. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}

export function Arrow() {
  return <Icon name="i-arrow" />;
}

/** Nhãn đánh dấu chỗ còn thiếu nội dung thật cần sếp cung cấp. */
export function TodoTag({ children = "Cần bổ sung" }: { children?: ReactNode }) {
  return <span className="todo-tag">{children}</span>;
}

/** Nhãn bước hành trình trên trang chủ, kèm nút nối vào "đường ống vàng". */
export function Step({ n, label }: { n: string; label: string }) {
  return (
    <p className="step">
      <span className="node" aria-hidden="true" />
      <b>Bước {n}</b> {label}
    </p>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Lê Nguyễn Trãi – Trang chủ">
      <Icon name="mark-p" />
      <span className="brand-text">
        <span className="brand-name">LÊ NGUYỄN TRÃI</span>
        <span className="brand-url">LENGUYENTRAI.COM</span>
      </span>
    </Link>
  );
}

export function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Vị trí">
      <Link href="/">Trang chủ</Link>
      {trail.map((t) => (
        <span key={t.label} className="contents">
          <i>/</i>
          {t.href ? <Link href={t.href}>{t.label}</Link> : <span>{t.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function RingDeco({ className = "w-[520px] h-[520px] -right-[180px] -top-[220px]" }: { className?: string }) {
  return <span className={`ring-deco ${className}`} aria-hidden="true" />;
}

/** Hero dùng chung cho các trang con. */
export function PageHero({
  trail, kicker, title, lede,
}: {
  trail: { label: string; href?: string }[];
  kicker: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <section className="page-hero">
      <RingDeco />
      <div className="wrap">
        <Crumbs trail={trail} />
        <p className="kicker">{kicker}</p>
        <h1 className="mt-3.5">{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
