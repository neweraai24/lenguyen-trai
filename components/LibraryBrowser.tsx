"use client";

import { useMemo, useState } from "react";
import { POSTS, type PostType } from "@/lib/posts";
import PostCard from "./PostCard";

const FILTERS: ("Tất cả" | PostType)[] = ["Tất cả", "Bài viết", "Video", "Tài liệu"];

export default function LibraryBrowser() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tất cả");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter(
      (p) =>
        (filter === "Tất cả" || p.type === filter) &&
        (!q || `${p.title} ${p.lede}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  return (
    <>
      <div className="filters" role="group" aria-label="Lọc nội dung">
        {FILTERS.map((f) => (
          <button key={f} className="filter-btn" type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
        <label className="sr" htmlFor="lib-search">Tìm trong thư viện</label>
        <input
          className="search"
          id="lib-search"
          type="search"
          placeholder="Tìm bài viết, video..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="lib">
        {shown.map((p) => <PostCard key={p.id} post={p} />)}
      </div>
      {shown.length === 0 && (
        <p className="empty">Chưa có nội dung phù hợp. Thử từ khóa khác hoặc chọn “Tất cả”.</p>
      )}
    </>
  );
}
