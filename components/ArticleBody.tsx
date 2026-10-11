import type { Block } from "@/lib/posts";
import { Motif } from "./Diagrams";
import { Icon, TodoTag } from "./ui";

/** Mục lục lấy từ các tiêu đề h2 trong bài. */
export function articleToc(body: Block[]) {
  return body.filter((b): b is Extract<Block, { t: "h" }> => b.t === "h").map((b, i) => ({ id: `muc-${i + 1}`, text: b.text }));
}

export default function ArticleBody({ body }: { body: Block[] }) {
  const headingNo = new Map<number, number>();
  body.forEach((b, i) => { if (b.t === "h") headingNo.set(i, headingNo.size + 1); });
  return (
    <article className="prose">
      {body.map((b, i) => {
        switch (b.t) {
          case "h":
            return <h2 key={i} id={`muc-${headingNo.get(i)}`}>{b.text}</h2>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "q":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "list":
            return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          case "fig": {
            const dark = b.motif === "pipe" || b.motif === "ring";
            return (
              <figure key={i} className={`figure${dark ? " bg-navy! border-navy!" : ""}`}>
                <Motif name={b.motif} />
                <figcaption className={dark ? "text-on-navy-2!" : undefined}>{b.caption}</figcaption>
              </figure>
            );
          }
          case "video":
            return (
              <div key={i} className="video-ph">
                <span className="play"><Icon name="i-play" /></span>
                <TodoTag>Nhúng video YouTube khi xuất bản</TodoTag>
              </div>
            );
        }
      })}
    </article>
  );
}
