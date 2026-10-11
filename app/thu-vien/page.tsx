import type { Metadata } from "next";
import LibraryBrowser from "@/components/LibraryBrowser";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thư viện kiến thức",
  description: "Bài viết, video, tài liệu và câu chuyện thực tế về tư duy dòng tiền, hệ thống và cuộc sống giàu có toàn diện.",
};

export default function LibraryPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Thư viện kiến thức" }]}
        kicker="Thư viện kiến thức"
        title={<>Mỗi góc nhìn đúng <em>có thể mở ra một hướng đi mới.</em></>}
        lede="Bài viết, video, tài liệu và câu chuyện thực tế về tư duy dòng tiền, hệ thống và cuộc sống giàu có toàn diện."
      />
      <section className="band band--paper">
        <div className="wrap">
          <LibraryBrowser />
        </div>
      </section>
    </>
  );
}
