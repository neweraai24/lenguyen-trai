# Lê Nguyễn Trãi — lenguyentrai.com

Website thương hiệu cá nhân **Lê Nguyễn Trãi** · Tư duy dòng tiền & Kiến tạo cộng đồng giàu có toàn diện.

Dựng bằng **Next.js (App Router) · React · TypeScript · Tailwind CSS v4**.

## Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
npm run start    # chạy bản build
npm run lint
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `/` | Trang chủ: hành trình 6 bước (ấn tượng → khai mở → niềm tin → ứng dụng → tầm nhìn → kết nối) |
| `/ve-toi` | Câu chuyện, cột mốc, triết lý Inside–Out |
| `/tu-duy-dong-tien` | 4 nguyên lý cốt lõi kèm sơ đồ |
| `/he-sinh-thai` | S&P500 & IB · Vinalink · Đào tạo |
| `/cong-dong` | Bốn trụ cột giàu có toàn diện |
| `/thu-vien`, `/thu-vien/[slug]` | Thư viện bài viết / video / tài liệu (lọc + tìm kiếm) |
| `/ket-noi` | Biểu mẫu liên hệ, đăng ký nhận bài |

```
app/            các trang (App Router)
components/     Header, Footer, Diagrams (sơ đồ SVG động), PostCard, form...
lib/posts.ts    dữ liệu thư viện — thêm bài mới tại đây
public/         ảnh chân dung, sprite biểu tượng (sprite.svg)
app/globals.css token thương hiệu (@theme) + khối giao diện đặc trưng
```

## Thiết kế

- Màu: Navy `#0F1F3A` · Vàng `#C9A24A` · Ngà `#F6F2E8` (khai báo trong `@theme`, dùng được như `bg-navy`, `text-gold`…).
- Chữ: Playfair Display (tiêu đề) · Be Vietnam Pro (nội dung) · JetBrains Mono (nhãn).
- Dải Navy/Ngà xen kẽ và "đường ống vàng" nối 6 bước hành trình trên trang chủ.

## Còn thiếu nội dung thật

Các chỗ có nhãn **“Cần bổ sung”**: năm cột mốc, ảnh hoạt động, thông tin liên hệ chính thức, tài liệu S&P500/IB và Vinalink đã được phép công bố, video YouTube. Biểu mẫu hiện chỉ xác thực phía trình duyệt, chưa gửi dữ liệu đi đâu.

> Nội dung chỉ mang tính chia sẻ kiến thức, không phải lời khuyên đầu tư hay cam kết thu nhập.
