import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody, { articleToc } from "@/components/ArticleBody";
import PostCard from "@/components/PostCard";
import { Crumbs, Icon, RingDeco } from "@/components/ui";
import { POSTS, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/thu-vien/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.lede } : {};
}

export default async function PostPage({ params }: PageProps<"/thu-vien/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = articleToc(post.body);
  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <section className="page-hero article-hero">
        <RingDeco />
        <div className="wrap">
          <Crumbs trail={[{ label: "Thư viện", href: "/thu-vien" }, { label: post.type }]} />
          <p className="kicker">{post.type}</p>
          <h1 className="mt-3.5">{post.title}</h1>
          <p className="lede">{post.lede}</p>
          <div className="byline">
            <Icon name="mark-p" />
            <div>
              <b>Lê Nguyễn Trãi</b>
              <span>Tư duy dòng tiền &amp; Kiến tạo cộng đồng giàu có toàn diện</span>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--ivory">
        <div className="wrap article">
          {toc.length >= 2 && (
            <aside className="toc" aria-label="Mục lục">
              <b>Trong bài</b>
              {toc.map((t) => <a key={t.id} href={`#${t.id}`}>{t.text}</a>)}
            </aside>
          )}
          <ArticleBody body={post.body} />
        </div>
      </section>

      <section className="band band--paper band--tight">
        <div className="wrap">
          <div className="lib-head">
            <div className="sec-head"><p className="kicker">Đọc tiếp</p><h2>Cùng chủ đề</h2></div>
            <Link className="btn btn--line-dark" href="/thu-vien">Về thư viện</Link>
          </div>
          <div className="lib">{related.map((p) => <PostCard key={p.id} post={p} />)}</div>
        </div>
      </section>
    </>
  );
}
