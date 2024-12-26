import { Link } from "react-router";

const posts = [
  { slug: "post1", label: "Post 1" },
  { slug: "post2", label: "Post 2" },
];

export default function Blog() {
  return (
    <ul className="grid grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <li key={idx} className="flex">
          <Link
            to={`/blog/${post.slug}`}
            className="grow rounded-md py-2 text-center transition-colors hover:bg-neutral-100"
          >
            {post.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
