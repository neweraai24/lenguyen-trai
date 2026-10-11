"use client";

import { useId, useRef, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function SubscribeForm({ lead, className = "" }: { lead?: string; className?: string }) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = input.current?.value.trim() ?? "";
    if (!EMAIL_RE.test(value)) {
      setMsg("Email chưa đúng định dạng. Ví dụ: ten@email.com");
      input.current?.focus();
      return;
    }
    setMsg(`Đã ghi nhận ${value}. Bài viết mới sẽ được gửi khi website vận hành.`);
    if (input.current) input.current.value = "";
  }

  return (
    <form className={`subscribe ${className}`} onSubmit={onSubmit} noValidate>
      <h3>Nhận bài viết mới</h3>
      {lead && <p className="muted text-[.9rem]">{lead}</p>}
      <div className="field-row">
        <label className="sr" htmlFor={id}>Email của bạn</label>
        <input ref={input} className="input" id={id} type="email" placeholder="Email của bạn" autoComplete="email" />
        <button className="btn btn--gold" type="submit">Đăng ký</button>
      </div>
      <p className="form-msg" role="status" aria-live="polite">{msg}</p>
    </form>
  );
}
