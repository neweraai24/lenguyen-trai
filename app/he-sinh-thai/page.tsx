import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageHero, TodoTag } from "@/components/ui";
import EcoTabs from "./EcoTabs";

export const metadata: Metadata = {
  title: "Phương pháp & Hệ sinh thái",
  description: "Ba lĩnh vực ứng dụng tư duy dòng tiền: đầu tư S&P500 & IB, mạng lưới tiêu dùng Vinalink, đào tạo & phát triển con người.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Phương pháp & Hệ sinh thái" }]}
        kicker="Phương pháp & Hệ sinh thái"
        title={<>Một triết lý, <em>nhiều lĩnh vực ứng dụng.</em></>}
        lede="Các mô hình tạo dòng tiền chỉ là một phần của hành trình. Mỗi lĩnh vực dưới đây là nơi ba nền tảng Tư duy – Hệ thống – Con người được đưa vào thực tế."
      />
      <EcoTabs />

      <section className="band band--ivory eco" id="sp500">
        <div className="wrap two">
          <div className="stack-lg">
            <div className="sec-head">
              <p className="kicker">Lĩnh vực 01</p>
              <h2>Đầu tư S&amp;P500 &amp; hệ thống IB</h2>
              <p className="muted">Từ kiến thức và phương pháp giao dịch đến việc đào tạo, hỗ trợ nhà đầu tư và phát triển cộng đồng. IB (Introducing Broker) là mô hình đối tác giới thiệu, nơi giá trị được tạo ra từ việc đào tạo và đồng hành cùng nhà đầu tư.</p>
            </div>
            <div className="mapping">
              <div><b>Tư duy</b><p>Hiểu thị trường, rủi ro và kỷ luật trước khi nghĩ đến lợi nhuận.</p></div>
              <div><b>Hệ thống</b><p>Phương pháp giao dịch, quy trình quản trị vốn, lộ trình đào tạo.</p></div>
              <div><b>Con người</b><p>Đào tạo, hỗ trợ nhà đầu tư và xây dựng cộng đồng học hỏi.</p></div>
            </div>
            <p className="risk"><strong>Cảnh báo rủi ro:</strong> giao dịch tài chính có rủi ro cao và có thể dẫn đến mất vốn. Nội dung mang tính giáo dục, không phải lời mời đầu tư hay cam kết lợi nhuận. Kết quả trong quá khứ không bảo đảm kết quả tương lai.</p>
          </div>
          <div className="stack">
            <div className="slot"><TodoTag /><p>Giới thiệu chương trình đào tạo, tài liệu, hình ảnh lớp học và các nội dung được phép công bố theo quy định.</p></div>
            <div className="slot"><TodoTag /><p>Thông tin pháp lý của đơn vị đối tác (giấy phép, cơ quan quản lý) nếu có công bố.</p></div>
            <Link className="btn btn--line-dark self-start" href="/ket-noi">Đăng ký tìm hiểu chương trình <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="band band--paper eco" id="vinalink">
        <div className="wrap two">
          <div className="stack-lg">
            <div className="sec-head">
              <p className="kicker">Lĩnh vực 02</p>
              <h2>Mạng lưới tiêu dùng Vinalink</h2>
              <p className="muted">Từ sản phẩm sức khỏe, trải nghiệm tiêu dùng thực tế đến phát triển khách hàng, chăm sóc và xây dựng hệ thống tiêu dùng lặp lại.</p>
            </div>
            <div className="mapping">
              <div><b>Tư duy</b><p>Tiêu dùng thông minh: dùng thật, hiểu thật trước khi chia sẻ.</p></div>
              <div><b>Hệ thống</b><p>Quy trình chăm sóc khách hàng và tiêu dùng lặp lại.</p></div>
              <div><b>Con người</b><p>Kết nối người dùng, hướng dẫn và đồng hành lâu dài.</p></div>
            </div>
            <p className="risk"><strong>Nguyên tắc nội dung:</strong> chỉ sử dụng thông tin sản phẩm và chính sách đã được công bố chính thức. Không trình bày thu nhập kinh doanh như một cam kết cho người tham gia mới.</p>
          </div>
          <div className="stack">
            <div className="slot"><TodoTag /><p>Tên và thông tin sản phẩm chính thức, tài liệu công bố, chính sách liên quan.</p></div>
            <div className="slot"><TodoTag /><p>Thông tin sức khỏe được phép sử dụng và hình ảnh trải nghiệm tiêu dùng thực tế.</p></div>
            <Link className="btn btn--line-dark self-start" href="/ket-noi">Tìm hiểu sản phẩm <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="band band--navy eco" id="dao-tao">
        <div className="wrap two">
          <div className="stack-lg">
            <div className="sec-head">
              <p className="kicker">Lĩnh vực 03</p>
              <h2>Đào tạo &amp; phát triển con người</h2>
              <p className="muted">Từ tư duy, kỹ năng, kỷ luật đến khả năng tổ chức, lãnh đạo và chuyển giao phương pháp. Mục tiêu không phải tạo ra những người mãi phụ thuộc vào người dẫn đường, mà giúp họ từng bước làm chủ công việc và hỗ trợ người tiếp theo.</p>
            </div>
            <div className="mapping">
              <div><b>Tư duy</b><p>Inside–Out: thay đổi bắt đầu từ bên trong.</p></div>
              <div><b>Hệ thống</b><p>Lộ trình học, tài liệu chuẩn hóa, cơ chế kèm cặp.</p></div>
              <div><b>Con người</b><p>Kỹ năng giao tiếp, hợp tác và lãnh đạo.</p></div>
            </div>
          </div>
          <div className="stack">
            <ol className="chain mt-0!" aria-label="Lộ trình chuyển giao">
              <li><span>Hiểu đúng</span></li><li><span>Làm đúng</span></li><li><span>Có kết quả</span></li><li><span>Chia sẻ</span></li><li><span>Dẫn đường</span></li>
            </ol>
            <div className="slot"><TodoTag /><p>Danh mục khóa học, lịch hội thảo, hình ảnh đào tạo và câu chuyện học viên được phép công bố.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
