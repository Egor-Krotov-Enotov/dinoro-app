import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const fullPath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    readTime: data.readTime ?? "",
    author: data.author ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content: _content, ...meta } = parsePost(f);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.mdx`;
  const fullPath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;
  return parsePost(filename);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
