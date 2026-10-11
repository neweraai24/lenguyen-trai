import Link from "next/link";
import type { Post } from "@/lib/posts";
import { Motif } from "./Diagrams";
import { Icon } from "./ui";

export default function PostCard({ post }: { post: Post }) {
  const light = /tree|loop|bucket/.test(post.motif);
  return (
    <Link className="post" href={`/thu-vien/${post.id}`}>
      <span className={`cover${light ? " cover--light" : ""}`}>
        <Motif name={post.motif} mini />
        {post.type === "Video" && (
          <span className="play"><Icon name="i-play" /></span>
        )}
      </span>
      <span className="meta">{post.type}</span>
      <h3>{post.title}</h3>
      <p>{post.lede}</p>
    </Link>
  );
}
