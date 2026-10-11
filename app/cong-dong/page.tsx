import type { Metadata } from "next";
import Link from "next/link";
import { Loop, Ring } from "@/components/Diagrams";
import { Arrow, PageHero, TodoTag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cộng đồng giàu có toàn diện",
  description: "Bốn trụ cột: tài chính, sức khỏe, mối quan hệ, nội tâm. Cộng đồng của những người cùng khát vọng và giá trị sống.",
};

const QUALITIES = [
  ["Khát vọng thành công", "Mong muốn thay đổi, phát triển và xây dựng cuộc sống tốt đẹp hơn."],
  ["Tư duy mở", "Sẵn sàng học hỏi nguyên lý, kiến thức và phương pháp mới."],
  ["Tinh thần chủ động", "Có thời gian, sự nghiêm túc, trách nhiệm và sẵn sàng hành động."],
  ["Tư duy hệ thống", "Quan tâm giá trị lâu dài thay vì lợi ích ngắn hạn."],
  ["Tinh thần giúp người", "Muốn thành công cùng những người xung quanh, biết chia sẻ và hợp tác."],
];

const WHO = ["Chủ doanh nghiệp", "Nhà quản lý", "Chuyên gia", "Người kinh doanh", "Nhà đầu tư", "Người đang phát triển sự nghiệp"];

const PHOTOS = ["Ảnh hội thảo", "Ảnh lớp học", "Ảnh kết nối", "Ảnh hoạt động sức khỏe", "Ảnh thiện nguyện"];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Cộng đồng giàu có toàn diện" }]}
        kicker="Cộng đồng giàu có toàn diện"
        title={<>Cộng đồng giàu có toàn diện <em>là đích đến.</em></>}
        lede="Nhiều người tìm đến một cộng đồng vì mong muốn cải thiện tài chính. Khi có môi trường đồng hành phù hợp, họ nhận ra thành công thực sự không chỉ nằm ở tiền bạc."
      />

      <section className="band band--navy">
        <div className="wrap pillars-grid">
          <div className="ring-wrap"><Ring /></div>
          <div className="stack-lg">
            <div className="sec-head">
              <p className="kicker">Bốn trụ cột</p>
              <h2>Thịnh vượng tài chính, sức khỏe, mối quan hệ, <em>nội tâm an vui.</em></h2>
            </div>
            <div className="stack">
              <div><h3 className="text-[1.2rem]">Giàu có về tài chính</h3><p className="muted">Tư duy quản lý tiền bạc, sử dụng nguồn lực phù hợp, phát triển năng lực tạo thu nhập và từng bước xây dựng nhiều nguồn tài chính để tự chủ.</p></div>
              <div><h3 className="text-[1.2rem]">Giàu có về sức khỏe</h3><p className="muted">Chủ động chăm sóc bản thân. Sức khỏe là nền tảng để tận hưởng thành quả và đồng hành cùng gia đình.</p></div>
              <div><h3 className="text-[1.2rem]">Giàu có về các mối quan hệ</h3><p className="muted">Tin tưởng, yêu thương, tôn trọng. Trở thành người bạn, người đồng nghiệp và thành viên gia đình tốt hơn.</p></div>
              <div><h3 className="text-[1.2rem]">Giàu có về nội tâm</h3><p className="muted">Biết ơn những gì đang có, sống có mục tiêu, cảm nhận hạnh phúc và ý nghĩa trong hiện tại.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--ivory">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Chân dung thành viên</p>
            <h2>Cộng đồng không hướng đến tất cả mọi người.</h2>
            <p className="muted">Điểm chung không nằm ở nghề nghiệp, độ tuổi hay mức tài sản hiện tại, mà ở khát vọng, tư duy, cam kết và tinh thần đồng hành.</p>
          </div>
          <div className="qualities">
            {QUALITIES.map(([h, p]) => <div key={h}><h4>{h}</h4><p>{p}</p></div>)}
          </div>
          <div className="stack mt-11">
            <span className="kicker">Thành viên có thể là</span>
            <div className="chips">{WHO.map((w) => <span key={w} className="chip">{w}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap two items-center">
          <div className="stack-lg">
            <div className="sec-head">
              <p className="kicker">Văn hóa đồng hành</p>
              <h2>Mình làm được, <em>giúp người khác cùng làm được.</em></h2>
            </div>
            <ul className="ticks ticks--gold">
              <li>Tiếp cận tư duy mới về tiền bạc, đầu tư và kinh doanh.</li>
              <li>Học phương pháp, quy trình và kinh nghiệm thực tế.</li>
              <li>Kết nối với những người cùng chí hướng.</li>
              <li>Phát triển năng lực giao tiếp, hợp tác và lãnh đạo.</li>
              <li>Tìm hiểu các mô hình ứng dụng tư duy dòng tiền.</li>
              <li>Tham gia môi trường đề cao sự trưởng thành và hỗ trợ lẫn nhau.</li>
            </ul>
          </div>
          <div className="panel"><Loop /></div>
        </div>
      </section>

      <section className="band band--navy">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Hoạt động cộng đồng</p>
            <h2>Hình ảnh thật từ các buổi gặp gỡ</h2>
          </div>
          <div className="photo-grid">
            {PHOTOS.map((p) => <div key={p}><TodoTag>{p}</TodoTag></div>)}
          </div>
          <div className="btns mt-10">
            <Link className="btn btn--gold" href="/ket-noi">Đăng ký tham gia hoạt động <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
