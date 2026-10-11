import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Crumbs, RingDeco, TodoTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Về tôi",
  description: "Câu chuyện, hành trình kinh doanh – đầu tư và triết lý Inside–Out Growth của Lê Nguyễn Trãi.",
};

const MILESTONES = [
  { when: "[Năm]", title: "Khởi đầu kinh doanh", text: "Những trải nghiệm đầu tiên với việc tạo thu nhập và bài học về giới hạn của thời gian, công sức cá nhân." },
  { when: "[Năm]", title: "Đầu tư S&P500", text: "Tiếp cận thị trường, xây dựng phương pháp và kỷ luật giao dịch." },
  { when: "[Năm]", title: "Đào tạo nhà đầu tư & hệ thống IB", text: "Chuyển kinh nghiệm thành chương trình đào tạo, hỗ trợ nhà đầu tư và phát triển cộng đồng." },
  { when: "[Năm]", title: "Nghiên cứu mạng lưới tiêu dùng", text: "Tìm hiểu mô hình tiêu dùng lặp lại và cách xây dựng hệ thống chăm sóc khách hàng bền vững." },
  { when: "Hôm nay", title: "Kiến tạo cộng đồng giàu có toàn diện", text: "Chia sẻ tư duy dòng tiền và xây dựng môi trường để mỗi người phát triển tài chính, sức khỏe, mối quan hệ và nội tâm." },
];

const INSIDE = [
  ["Tư duy", "Cách nhìn về tiền bạc và giá trị"],
  ["Niềm tin", "Điều mình tin là có thể"],
  ["Thái độ", "Trách nhiệm, kỷ luật, cầu thị"],
  ["Hành động", "Làm đúng, làm đều đặn"],
  ["Năng lực", "Kỹ năng được rèn qua thực hành"],
  ["Kết quả", "Điều thể hiện ra bên ngoài"],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <RingDeco />
        <div className="wrap hero-grid">
          <div>
            <Crumbs trail={[{ label: "Về Lê Nguyễn Trãi" }]} />
            <p className="kicker">Về Lê Nguyễn Trãi</p>
            <h1 className="mt-3.5">Từ hành trình thực tiễn <em>đến tư duy kiến tạo hệ thống.</em></h1>
            <p className="lede">Câu chuyện cá nhân, hành trình kinh doanh và đầu tư, triết lý sống, những cột mốc và tầm nhìn phía trước.</p>
          </div>
          <div className="hero-portrait relative">
            <div className="portrait portrait--photo">
              <span className="ph-ring" aria-hidden="true" />
              <Image className="cutout" src="/images/chan-dung.webp" alt="Chân dung Lê Nguyễn Trãi" width={720} height={899} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap two">
          <div className="sec-head">
            <p className="kicker">Câu chuyện</p>
            <h2>Câu hỏi đã dẫn đường cho tôi</h2>
          </div>
          <div className="stack">
            <p className="lede">Tôi là Lê Nguyễn Trãi. Trong hành trình kinh doanh, đầu tư và phát triển cộng đồng, có một câu hỏi tôi luôn mang theo:</p>
            <p className="pull">Làm thế nào để những giá trị mà một người tạo ra không chỉ dừng lại ở chính họ, mà có thể được chia sẻ, chuyển giao và phát triển qua nhiều thế hệ con người?</p>
            <p className="muted">Với kinh nghiệm hoạt động trong lĩnh vực S&amp;P500, đào tạo nhà đầu tư và phát triển cộng đồng, cùng quá trình nghiên cứu các mô hình mạng lưới tiêu dùng, tôi ngày càng tin vào sức mạnh của tư duy dòng tiền và hệ thống có khả năng nhân bản.</p>
            <p className="muted">Tôi mong muốn chia sẻ những nguyên lý và kinh nghiệm này với những người có khát vọng thành công, đồng thời cùng họ xây dựng một môi trường phát triển lâu dài.</p>
          </div>
        </div>
      </section>

      <section className="band band--ivory">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Hành trình</p>
            <h2>Những cột mốc</h2>
            <p className="muted">Các mốc dưới đây là khung nội dung. Năm và chi tiết sẽ được cập nhật từ tiểu sử chính thức đã kiểm chứng.</p>
          </div>
          <ol className="timeline">
            {MILESTONES.map((m) => (
              <li key={m.title}>
                <span className="when">{m.when} {m.when !== "Hôm nay" && <TodoTag />}</span>
                <div><h3>{m.title}</h3><p>{m.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--navy">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Triết lý · Inside–Out Growth</p>
            <h2>Trưởng thành từ bên trong <em>để kiến tạo kết quả bên ngoài.</em></h2>
            <p className="muted">Sự thay đổi bắt đầu từ tư duy, tiếp đến là niềm tin, thái độ, hành động, năng lực và cuối cùng mới thể hiện qua kết quả.</p>
          </div>
          <ol className="inside">
            {INSIDE.map(([b, s]) => <li key={b}><b>{b}</b><span>{s}</span></li>)}
          </ol>
          <div className="roles mt-14">
            <div><h4>Người khai mở tư duy</h4><p>Giúp mọi người nhận ra thành công tài chính bền vững không chỉ phụ thuộc vào làm việc chăm chỉ, mà còn ở cách sử dụng nguồn lực, tổ chức công việc, phát triển con người và xây dựng hệ thống.</p></div>
            <div><h4>Người kiến tạo hệ thống</h4><p>Chuyển hóa nguyên lý thành phương pháp, quy trình và mô hình có thể học hỏi, chuẩn hóa và nhân bản, để người học từng bước tự làm chủ và hỗ trợ người tiếp theo.</p></div>
            <div><h4>Người kiến tạo cộng đồng</h4><p>Kết nối những con người cùng khát vọng và giá trị sống, tạo môi trường phát triển cả tài chính, năng lực, các mối quan hệ, sức khỏe và đời sống tinh thần.</p></div>
          </div>
        </div>
      </section>

      <section className="band band--paper band--tight">
        <div className="wrap two items-center">
          <p className="statement">Bắt đầu từ tư duy dòng tiền. Phát triển bằng sức mạnh hệ thống. <em>Cùng kiến tạo cuộc sống giàu có toàn diện.</em></p>
          <div className="btns">
            <Link className="btn btn--gold" href="/ket-noi">Kết nối với tôi <Arrow /></Link>
            <Link className="btn btn--line-dark" href="/tu-duy-dong-tien">Đọc các nguyên lý</Link>
          </div>
        </div>
      </section>
    </>
  );
}
