"use client";

import { useState } from "react";
import { Arrow } from "./ui";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TOPICS = [
  { value: "Tư duy dòng tiền", label: "Tư duy dòng tiền" },
  { value: "S&P500 & IB", label: "Đầu tư S&P500 & IB" },
  { value: "Vinalink", label: "Vinalink" },
  { value: "Đào tạo", label: "Đào tạo & phát triển" },
  { value: "Cộng đồng", label: "Hoạt động cộng đồng" },
];

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (get("name").length < 2) next.name = "Vui lòng nhập họ và tên.";
    if (!EMAIL_RE.test(get("email"))) next.email = "Email chưa đúng định dạng. Ví dụ: ten@email.com";
    if (get("phone") && !/^[0-9 +().-]{8,}$/.test(get("phone"))) next.phone = "Số điện thoại chỉ gồm chữ số, tối thiểu 8 số.";
    if (!fd.get("consent")) next.consent = "Vui lòng đồng ý để chúng tôi liên hệ lại.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="success" role="status" aria-live="polite">
        <h3>Cảm ơn bạn đã kết nối.</h3>
        <p>Thông tin đã được ghi nhận trên bản mẫu này. Khi website vận hành, biểu mẫu sẽ gửi về hộp thư và hệ thống quản lý liên hệ.</p>
        <div><button className="btn btn--line-light" type="button" onClick={() => setSent(false)}>Gửi lời nhắn khác</button></div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="fld">
        <label htmlFor="c-name">Họ và tên</label>
        <input id="c-name" name="name" autoComplete="name" required aria-invalid={!!errors.name} />
        <span className="err">{errors.name}</span>
      </div>
      <div className="fld">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} />
        <span className="err">{errors.email}</span>
      </div>
      <div className="fld">
        <label htmlFor="c-phone">Điện thoại / Zalo</label>
        <input id="c-phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} />
        <span className="err">{errors.phone}</span>
      </div>
      <div className="fld">
        <label htmlFor="c-role">Công việc hiện tại</label>
        <input id="c-role" name="role" placeholder="Ví dụ: chủ doanh nghiệp, nhà quản lý" />
        <span className="err" />
      </div>
      <fieldset className="fld full">
        <legend>Bạn quan tâm đến</legend>
        <div className="checks">
          {TOPICS.map((t, i) => (
            <label key={t.value}>
              <input type="checkbox" name="topic" value={t.value} defaultChecked={i === 0} />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="fld full">
        <label htmlFor="c-msg">Lời nhắn</label>
        <textarea id="c-msg" name="msg" placeholder="Bạn đang ở đâu trên hành trình của mình, và mong muốn điều gì?" />
      </div>
      <label className="consent full" htmlFor="c-consent">
        <input id="c-consent" name="consent" type="checkbox" required />
        Tôi đồng ý để Lê Nguyễn Trãi liên hệ qua thông tin trên. Thông tin của bạn không được chia sẻ cho bên thứ ba.
      </label>
      <span className="full text-[.8rem] text-[#A23B2A]">{errors.consent}</span>
      <div className="full">
        <button className="btn btn--gold" type="submit">Gửi thông tin <Arrow /></button>
      </div>
    </form>
  );
}
