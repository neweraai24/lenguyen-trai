import Link from "next/link";
import { Arrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="band band--navy">
      <div className="wrap stack-lg">
        <p className="kicker">404</p>
        <h1>Trang này <em>không tồn tại.</em></h1>
        <p className="lede muted measure">Có thể đường dẫn đã đổi hoặc bài viết chưa được xuất bản.</p>
        <div className="btns">
          <Link className="btn btn--gold" href="/">Về trang chủ <Arrow /></Link>
          <Link className="btn btn--line-light" href="/thu-vien">Vào thư viện</Link>
        </div>
      </div>
    </section>
  );
}
