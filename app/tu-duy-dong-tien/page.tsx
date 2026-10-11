import type { Metadata } from "next";
import Link from "next/link";
import { Bucket, Loop, Pipe, Tree } from "@/components/Diagrams";
import { Arrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tư duy dòng tiền",
  description: "Bốn nguyên lý cốt lõi: xách nước và xây đường ống, vốn tài chính và vốn con người, công thức chuyển giao, thành công cùng nhau.",
};

export default function CashflowPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Tư duy dòng tiền" }]}
        kicker="Nền tảng khác biệt của thương hiệu"
        title={<>Tư duy dòng tiền <em>là gốc rễ.</em></>}
        lede="Bốn nguyên lý cốt lõi về xây dựng hệ thống, vốn con người, công thức có thể chuyển giao và thành công cùng nhau. Mỗi nguyên lý có sơ đồ để hiểu nhanh và bài viết để đi sâu."
      />

      <section className="band band--paper">
        <div className="wrap">
          <div className="principle" id="nguyen-ly-1">
            <span className="pn">Nguyên lý 01</span>
            <div className="stack-lg">
              <div className="sec-head">
                <h2>Xách nước và xây đường ống</h2>
                <p className="muted measure">Một người có thể rất chăm chỉ, có thu nhập tốt nhưng vẫn phụ thuộc hoàn toàn vào thời gian và sức lao động của mình. Khi ngừng làm việc, thu nhập từ công việc đó có thể giảm hoặc chấm dứt. Người có tư duy dòng tiền tìm cách xây dựng một hệ thống gồm phương pháp, quy trình, con người và cơ chế vận hành.</p>
              </div>
              <div className="compare mt-0!">
                <div className="ccard ccard--bucket"><span className="label">Xách nước</span><div className="dg-box"><Bucket /></div><p className="formula">Làm việc → Tạo thu nhập → Tiếp tục làm việc</p></div>
                <div className="ccard ccard--pipe"><span className="label">Xây đường ống</span><div className="dg-box"><Pipe /></div><p className="formula">Tạo giá trị → Xây hệ thống → Nhân bản → Duy trì &amp; phát triển</p></div>
              </div>
              <p className="note"><strong>Lưu ý:</strong> hệ thống không xóa bỏ công việc hay rủi ro. Nó giảm dần sự phụ thuộc vào một cá nhân thông qua chuẩn hóa, quản trị và chuyển giao.</p>
              <div><Link className="link" href="/thu-vien/xach-nuoc">Đọc bài: Xách nước hay xây đường ống? <Arrow /></Link></div>
            </div>
          </div>

          <div className="principle" id="nguyen-ly-2">
            <span className="pn">Nguyên lý 02</span>
            <div className="stack-lg">
              <div className="sec-head">
                <h2>Vốn tài chính và vốn con người</h2>
                <p className="muted measure">Phần lớn mọi người khi nghĩ đến đầu tư chỉ nghĩ đến số tiền mình đang có. Trong tư duy xây dựng hệ thống, con người còn một nguồn lực khác: khả năng kết nối, chia sẻ kiến thức, phát triển năng lực và hợp tác.</p>
              </div>
              <div className="two">
                <div className="panel stack"><span className="kicker">Vốn tài chính</span><p>Nguồn lực tiền bạc dùng để đầu tư, kinh doanh và phát triển tài sản. Thường bị giới hạn bởi khả năng của từng cá nhân.</p></div>
                <div className="panel stack border-gold!"><span className="kicker">Vốn con người</span><p>Kiến thức, kỹ năng, uy tín, mối quan hệ và khả năng tổ chức những người cùng tạo giá trị. Có thể mở rộng qua học hỏi, hợp tác, chuyển giao và nhân bản.</p></div>
              </div>
              <div className="panel max-w-[620px]"><Tree /></div>
              <p className="statement text-[clamp(1.25rem,2vw,1.6rem)]!">Không chỉ hỏi mình đang có bao nhiêu tiền, <em>mà hỏi mình có thể tạo ra giá trị cho bao nhiêu người.</em></p>
              <div><Link className="link" href="/thu-vien/von-con-nguoi">Đọc bài: Vốn tài chính và vốn con người <Arrow /></Link></div>
            </div>
          </div>

          <div className="principle" id="nguyen-ly-3">
            <span className="pn">Nguyên lý 03</span>
            <div className="stack-lg">
              <div className="sec-head">
                <h2>Công thức thành công có thể chuyển giao</h2>
                <p className="muted measure">Một người giỏi có thể tự tạo ra kết quả. Nhưng một hệ thống chỉ mở rộng được khi phương pháp đủ rõ để nhiều người cùng học và thực hành. Người mới không cần xuất sắc ngay từ đầu; họ cần một phương pháp rõ ràng, một môi trường học hỏi và những người đồng hành.</p>
              </div>
              <ol className="chain mt-0!" aria-label="Công thức chuyển giao">
                <li><span>Hiểu đúng</span></li><li><span>Làm đúng</span></li><li><span>Có kết quả</span></li><li><span>Chia sẻ</span></li><li><span>Hướng dẫn người tiếp theo</span></li>
              </ol>
              <div><Link className="link" href="/thu-vien/cong-thuc">Đọc bài: Công thức thành công và vai trò của người dẫn đường <Arrow /></Link></div>
            </div>
          </div>

          <div className="principle" id="nguyen-ly-4">
            <span className="pn">Nguyên lý 04</span>
            <div className="two items-center">
              <div className="stack-lg">
                <div className="sec-head">
                  <h2>Thành công cùng nhau</h2>
                  <p className="muted">Một hệ thống bền vững không thể chỉ dựa trên mong muốn làm giàu của một cá nhân. Khi mỗi người hiểu rằng sự trưởng thành của người khác cũng góp phần tạo nên sức mạnh chung, họ có động lực chia sẻ, hỗ trợ và chuyển giao kinh nghiệm.</p>
                </div>
                <p className="formula text-gold-ink! border-t border-rule">Mình làm được → Giúp người khác làm được → Họ tiếp tục giúp người khác</p>
                <div><Link className="link" href="/thu-vien/cung-nhau">Xem video: Thành công cùng nhau <Arrow /></Link></div>
              </div>
              <div className="panel"><Loop /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--navy band--tight">
        <div className="wrap two items-center">
          <p className="statement">Tư duy đúng, phương pháp đúng, <em>rồi mới đến hệ thống và nhân bản.</em></p>
          <div className="btns">
            <Link className="btn btn--gold" href="/thu-vien">Vào thư viện tri thức <Arrow /></Link>
            <Link className="btn btn--line-light" href="/he-sinh-thai">Xem lĩnh vực ứng dụng</Link>
          </div>
        </div>
      </section>
    </>
  );
}
