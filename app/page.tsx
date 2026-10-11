import Image from "next/image";
import Link from "next/link";
import { Ring, Bucket, Pipe } from "@/components/Diagrams";
import PostCard from "@/components/PostCard";
import SubscribeForm from "@/components/SubscribeForm";
import { Arrow, Icon, RingDeco, Step } from "@/components/ui";
import { POSTS } from "@/lib/posts";

export default function HomePage() {
  return (
    <>
      {/* KV1 · Thông điệp mở đầu */}
      <section className="band band--navy hero" aria-labelledby="h-hero">
        <RingDeco className="w-[560px] h-[560px] -right-[200px] -top-[240px]" />
        <div className="wrap">
          <div className="stage stage--first">
            <Step n="01" label="Gây ấn tượng" />
            <div className="hero-grid mt-7">
              <div className="hero-copy">
                <p className="hero-title-kicker">Tư duy dòng tiền</p>
                <h1 id="h-hero">
                  Đừng chỉ kiếm tiền.<br />
                  <em>Hãy xây hệ thống.</em>
                </h1>
                <p className="tagline">
                  Bắt đầu từ tư duy <span>–</span> Phát triển bằng hệ thống <span>–</span> Thành công cùng nhau
                </p>
                <p className="lede measure muted">
                  Trong cuộc sống, nhiều người dành phần lớn thời gian để làm việc và tạo thu nhập. Nhưng có một hướng tư duy khác: xây dựng những phương pháp và hệ thống có khả năng tạo giá trị, phát triển con người và mở rộng theo thời gian.
                </p>
                <div className="btns">
                  <Link className="btn btn--gold" href="/tu-duy-dong-tien">Khám phá tư duy dòng tiền <Arrow /></Link>
                  <Link className="btn btn--line-light" href="/ve-toi">Tìm hiểu về tôi</Link>
                </div>
              </div>
              <div className="hero-portrait relative">
                <div className="portrait portrait--photo">
                  <span className="ph-ring" aria-hidden="true" />
                  <Image className="cutout" src="/images/chan-dung.webp" alt="Chân dung Lê Nguyễn Trãi" width={720} height={899} priority />
                </div>
                <div className="name-card">
                  <strong>Lê Nguyễn Trãi</strong>
                  <span>Tư duy dòng tiền &amp; Kiến tạo cộng đồng giàu có toàn diện</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Câu hỏi khai mở */}
      <section className="band band--ivory band--tight" aria-label="Câu hỏi khai mở">
        <div className="wrap">
          <div className="stage">
            <p className="question">
              Bạn đang làm việc để kiếm tiền, <em>hay đang xây dựng một hệ thống tạo ra dòng tiền?</em>
            </p>
            <div className="q-meta">
              <span className="serif">Tư duy dòng tiền</span>
              <span className="caps">Hệ thống · Toàn diện</span>
            </div>
          </div>
        </div>
      </section>

      {/* KV2 · Xách nước hay xây đường ống */}
      <section className="band band--paper" aria-labelledby="h-kv2">
        <div className="wrap">
          <div className="stage">
            <Step n="02" label="Khai mở tư duy" />
            <div className="sec-head mt-[22px]">
              <p className="kicker">Xách nước hay xây đường ống?</p>
              <h2 id="h-kv2">Cùng là kiếm tiền, <em>nhưng khác nhau ở cách tư duy.</em></h2>
            </div>
            <div className="compare">
              <article className="ccard ccard--bucket">
                <span className="label">Hình ảnh người xách nước</span>
                <h3>Tư duy xách nước</h3>
                <div className="dg-box"><Bucket /></div>
                <ul className="ticks">
                  <li>Làm việc để có thu nhập.</li>
                  <li>Kết quả phụ thuộc nhiều vào nỗ lực cá nhân.</li>
                  <li>Muốn tăng thu nhập thường phải tăng thời gian hoặc công sức.</li>
                  <li>Khó mở rộng nếu thiếu quy trình và đội ngũ.</li>
                </ul>
                <p className="formula">Làm việc → Tạo thu nhập → Tiếp tục làm việc</p>
              </article>
              <article className="ccard ccard--pipe">
                <span className="label">Hình ảnh người xây đường ống</span>
                <h3>Tư duy xây đường ống</h3>
                <div className="dg-box"><Pipe /></div>
                <ul className="ticks">
                  <li>Xây dựng phương pháp và quy trình.</li>
                  <li>Phát triển con người và đội ngũ.</li>
                  <li>Tạo khả năng lặp lại, chuyển giao và nhân bản.</li>
                  <li>Hướng đến hệ thống có khả năng vận hành và phát triển dài hạn.</li>
                </ul>
                <p className="formula">Tạo giá trị → Xây hệ thống → Nhân bản → Duy trì &amp; phát triển dòng tiền</p>
              </article>
            </div>
            <div className="stack mt-14">
              <p className="statement">
                Đừng chỉ hỏi mình có thể làm được bao nhiêu. <em>Hãy hỏi mình có thể xây dựng một hệ thống giúp bao nhiêu người cùng làm được.</em>
              </p>
              <p className="note">
                <strong>Hiểu cho đúng:</strong> xây dựng hệ thống không có nghĩa là không cần làm việc hay không có rủi ro. Giá trị của hệ thống nằm ở khả năng giảm dần sự phụ thuộc vào một cá nhân, nhờ chuẩn hóa, quản trị và chuyển giao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KV3 · Ba nền tảng */}
      <section className="band band--ivory" aria-labelledby="h-kv3">
        <div className="wrap">
          <div className="stage">
            <div className="sec-head">
              <p className="kicker">Ba nền tảng kiến tạo dòng tiền</p>
              <h2 id="h-kv3">Tư duy – Hệ thống – Con người</h2>
            </div>
            <div className="found">
              <div className="found-item"><span className="node" aria-hidden="true" /><span className="en">Nền tảng 1</span><h3>Tư duy</h3><p className="muted">Nhìn đúng bản chất của tiền bạc, kinh doanh và sự phát triển dài hạn.</p></div>
              <div className="found-item"><span className="node" aria-hidden="true" /><span className="en">Nền tảng 2</span><h3>Hệ thống</h3><p className="muted">Chuyển tư duy thành phương pháp, quy trình và năng lực vận hành.</p></div>
              <div className="found-item"><span className="node" aria-hidden="true" /><span className="en">Nền tảng 3</span><h3>Con người</h3><p className="muted">Kết nối, hợp tác, đào tạo và giúp nhiều người cùng tạo ra giá trị.</p></div>
            </div>
            <ol className="chain" aria-label="Chuỗi phát triển">
              <li><span>Tư duy đúng</span></li><li><span>Phương pháp đúng</span></li><li><span>Hệ thống</span></li><li><span>Nhân bản</span></li><li><span>Phát triển bền vững</span></li>
            </ol>
          </div>
        </div>
      </section>

      {/* KV4 · Về Lê Nguyễn Trãi */}
      <section className="band band--navy" aria-labelledby="h-kv4">
        <div className="wrap">
          <div className="stage">
            <Step n="03" label="Hình thành niềm tin" />
            <div className="about-grid mt-7">
              <div className="portrait aspect-[4/4.6]">
                <span className="ph-ring" aria-hidden="true" />
                <Icon name="mark" className="mono" />
                <div className="ph-note"><span>Ảnh đang chia sẻ, đào tạo hoặc hội thảo</span><span className="todo-tag">Cần bổ sung</span></div>
              </div>
              <div className="stack-lg">
                <div className="sec-head">
                  <p className="kicker">Về Lê Nguyễn Trãi</p>
                  <h2 id="h-kv4">Từ hành trình thực tiễn <em>đến tư duy kiến tạo hệ thống.</em></h2>
                </div>
                <div className="stack">
                  <p className="lede">Tôi là Lê Nguyễn Trãi. Trong hành trình kinh doanh, đầu tư và phát triển cộng đồng, tôi luôn quan tâm đến một câu hỏi:</p>
                  <p className="pull">Làm thế nào để những giá trị mà một người tạo ra không chỉ dừng lại ở chính họ, mà có thể được chia sẻ, chuyển giao và phát triển qua nhiều thế hệ con người?</p>
                  <p className="muted">Với kinh nghiệm hoạt động trong lĩnh vực S&amp;P500, đào tạo nhà đầu tư và phát triển cộng đồng, cùng quá trình nghiên cứu các mô hình mạng lưới tiêu dùng, tôi ngày càng tin vào sức mạnh của tư duy dòng tiền và hệ thống có khả năng nhân bản.</p>
                </div>
                <div className="roles">
                  <div><h4>Người khai mở tư duy</h4><p>Thành công tài chính bền vững gắn với cách dùng nguồn lực, tổ chức công việc và phát triển con người.</p></div>
                  <div><h4>Người kiến tạo hệ thống</h4><p>Chuyển nguyên lý thành phương pháp, quy trình có thể học, thực hành và nhân bản.</p></div>
                  <div><h4>Người kiến tạo cộng đồng</h4><p>Kết nối những con người cùng khát vọng và giá trị sống để cùng phát triển.</p></div>
                </div>
                <div><Link className="link" href="/ve-toi">Khám phá hành trình của tôi <Arrow /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KV5 · Ứng dụng thực tiễn */}
      <section className="band band--ivory" aria-labelledby="h-kv5">
        <div className="wrap">
          <div className="stage">
            <Step n="04" label="Khám phá ứng dụng" />
            <div className="sec-head mt-[22px]">
              <p className="kicker">Tư duy dòng tiền trong thực tiễn</p>
              <h2 id="h-kv5">Một triết lý, <em>nhiều lĩnh vực ứng dụng.</em></h2>
            </div>
            <div className="apps">
              <Link className="app" href="/he-sinh-thai#sp500">
                <span className="ico"><Icon name="i-index" /></span>
                <h3>Đầu tư S&amp;P500 &amp; hệ thống IB</h3>
                <p>Từ kiến thức và phương pháp giao dịch đến việc đào tạo, hỗ trợ nhà đầu tư và phát triển cộng đồng.</p>
                <span className="link">Tìm hiểu sâu <Arrow /></span>
              </Link>
              <Link className="app" href="/he-sinh-thai#vinalink">
                <span className="ico"><Icon name="i-leaf" /></span>
                <h3>Mạng lưới tiêu dùng Vinalink</h3>
                <p>Từ sản phẩm sức khỏe, trải nghiệm tiêu dùng thực tế đến phát triển khách hàng, chăm sóc và xây dựng hệ thống tiêu dùng lặp lại.</p>
                <span className="link">Tìm hiểu sâu <Arrow /></span>
              </Link>
              <Link className="app" href="/he-sinh-thai#dao-tao">
                <span className="ico"><Icon name="i-people" /></span>
                <h3>Đào tạo &amp; phát triển con người</h3>
                <p>Từ tư duy, kỹ năng, kỷ luật đến khả năng tổ chức, lãnh đạo và chuyển giao phương pháp.</p>
                <span className="link">Tìm hiểu sâu <Arrow /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KV6 · Cộng đồng giàu có toàn diện */}
      <section className="band band--navy" aria-labelledby="h-kv6">
        <div className="wrap">
          <div className="stage">
            <Step n="05" label="Nhận diện tầm nhìn" />
            <div className="pillars-grid mt-7">
              <div className="ring-wrap"><Ring /></div>
              <div className="stack-lg">
                <div className="sec-head">
                  <p className="kicker">Cộng đồng giàu có toàn diện</p>
                  <h2 id="h-kv6">Thành công tài chính là điểm khởi đầu. <em>Giàu có toàn diện là đích đến.</em></h2>
                </div>
                <p className="muted">Một người có thể sở hữu nhiều tiền nhưng vẫn thiếu sức khỏe, những mối quan hệ gắn kết hoặc sự bình an trong tâm hồn. Tôi mong muốn kiến tạo một cộng đồng nơi mỗi người học cách phát triển tài chính, đồng thời được khuyến khích chăm sóc sức khỏe, vun đắp các mối quan hệ và sống an vui.</p>
                <div className="pillars">
                  <div><h4><Icon name="i-coin" />Tài chính</h4><p className="muted">Tư duy quản lý tiền bạc, nhiều nguồn thu, tự chủ tài chính.</p></div>
                  <div><h4><Icon name="i-pulse" />Sức khỏe</h4><p className="muted">Thói quen sống tích cực, chất lượng sống dài hạn.</p></div>
                  <div><h4><Icon name="i-link" />Mối quan hệ</h4><p className="muted">Tin tưởng, yêu thương, tôn trọng và hỗ trợ lẫn nhau.</p></div>
                  <div><h4><Icon name="i-calm" />Nội tâm</h4><p className="muted">Biết ơn, sống có mục tiêu, bình an và làm chủ bản thân.</p></div>
                </div>
                <div><Link className="link" href="/cong-dong">Khám phá tầm nhìn cộng đồng <Arrow /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KV7 · Thư viện tri thức */}
      <section className="band band--paper" aria-labelledby="h-kv7">
        <div className="wrap">
          <div className="stage stage--last">
            <Step n="06" label="Chủ động kết nối" />
            <div className="lib-head mt-[22px]">
              <div className="sec-head">
                <p className="kicker">Thư viện tri thức</p>
                <h2 id="h-kv7">Mỗi góc nhìn đúng <em>có thể mở ra một hướng đi mới.</em></h2>
              </div>
              <Link className="btn btn--line-dark" href="/thu-vien">Xem toàn bộ thư viện <Arrow /></Link>
            </div>
            <div className="lib">
              {POSTS.slice(0, 6).map((p) => <PostCard key={p.id} post={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* KV8 · Kết nối */}
      <section className="band band--deep" aria-labelledby="h-kv8">
        <RingDeco className="w-[640px] h-[640px] -left-80 -bottom-[420px]" />
        <div className="wrap">
          <div className="stage-pad">
            <div className="connect-grid">
              <div className="stack-lg">
                <div className="sec-head">
                  <p className="kicker">Kết nối</p>
                  <h2 id="h-kv8">Kết nối những con người <em>cùng khát vọng.</em></h2>
                </div>
                <p className="muted measure">Nếu bạn quan tâm đến tư duy dòng tiền, mong muốn phát triển năng lực, tìm hiểu những mô hình thực tiễn và đồng hành cùng những người có chung giá trị sống, hãy bắt đầu bằng việc kết nối và khám phá.</p>
                <div className="btns">
                  <Link className="btn btn--gold" href="/ket-noi">Kết nối với Lê Nguyễn Trãi <Arrow /></Link>
                  <Link className="btn btn--line-light" href="/cong-dong">Khám phá cộng đồng</Link>
                </div>
              </div>
              <SubscribeForm lead="Mỗi bài là một nguyên lý ngắn về tư duy dòng tiền. Không quảng cáo, không hứa hẹn thu nhập." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
