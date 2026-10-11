import Link from "next/link";
import { Brand } from "./ui";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="manifesto">
          <p><span>Gốc rễ</span>Tư duy dòng tiền là gốc rễ.</p>
          <p><span>Con đường</span>Phương pháp và hệ thống là con đường.</p>
          <p><span>Sức mạnh</span>Con người và sự nhân bản là sức mạnh.</p>
          <p><span>Đích đến</span>Cộng đồng giàu có toàn diện là đích đến.</p>
        </div>
        <div className="foot-grid">
          <div className="stack gap-3.5">
            <Brand />
            <p className="max-w-[40ch] text-[.92rem]">Tư duy dòng tiền – Kiến tạo hệ thống – Thành công cùng nhau.</p>
          </div>
          <div>
            <h5>Khám phá</h5>
            <ul>
              <li><Link href="/ve-toi">Về Lê Nguyễn Trãi</Link></li>
              <li><Link href="/tu-duy-dong-tien">Tư duy dòng tiền</Link></li>
              <li><Link href="/he-sinh-thai">Phương pháp & Hệ sinh thái</Link></li>
              <li><Link href="/cong-dong">Cộng đồng giàu có toàn diện</Link></li>
            </ul>
          </div>
          <div>
            <h5>Đồng hành</h5>
            <ul>
              <li><Link href="/thu-vien">Thư viện kiến thức</Link></li>
              <li><Link href="/ket-noi">Kết nối</Link></li>
              <li><Link href="/ket-noi">Đăng ký nhận bài viết</Link></li>
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <p>
            <strong>Tuyên bố miễn trừ:</strong> nội dung trên website mang tính chia sẻ kiến thức và kinh nghiệm cá nhân,
            không phải lời khuyên đầu tư, tư vấn pháp lý hay cam kết về thu nhập, lợi nhuận. Đầu tư tài chính luôn có rủi ro.
            Mỗi người cần tự tìm hiểu và chịu trách nhiệm với quyết định của mình.
          </p>
          <p>© 2026 Lê Nguyễn Trãi · LeNguyenTrai.com</p>
        </div>
      </div>
    </footer>
  );
}
