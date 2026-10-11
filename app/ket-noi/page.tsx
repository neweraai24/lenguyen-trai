import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SubscribeForm from "@/components/SubscribeForm";
import { Icon, PageHero, TodoTag, type IconName } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kết nối",
  description: "Bắt đầu bằng một cuộc trò chuyện với Lê Nguyễn Trãi. Không có áp lực tham gia.",
};

const CHANNELS: { icon: IconName; name: string; value: string }[] = [
  { icon: "i-mail", name: "Email", value: "[email công việc]" },
  { icon: "i-phone", name: "Điện thoại công việc", value: "[số điện thoại]" },
  { icon: "i-chat", name: "Zalo", value: "[Zalo OA]" },
  { icon: "i-video", name: "YouTube", value: "[kênh chia sẻ]" },
  { icon: "i-globe", name: "Facebook", value: "[trang cá nhân]" },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Kết nối" }]}
        kicker="Kết nối"
        title={<>Bắt đầu bằng <em>một cuộc trò chuyện.</em></>}
        lede="Không có áp lực tham gia. Bạn chọn điều mình quan tâm, tôi và đội ngũ sẽ liên hệ khi phù hợp."
      />
      <section className="band band--ivory">
        <div className="wrap two">
          <ContactForm />
          <aside className="panel bg-navy! text-on-navy border-0!">
            <div className="stack">
              <span className="kicker text-gold!">Kênh chính thức</span>
              <ul className="channels">
                {CHANNELS.map((c) => (
                  <li key={c.name}>
                    <span className="ico"><Icon name={c.icon} /></span>
                    <div><b>{c.name}</b><span>{c.value}</span></div>
                    <TodoTag />
                  </li>
                ))}
              </ul>
              <SubscribeForm className="mt-3" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
