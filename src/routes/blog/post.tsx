import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function Post() {
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`/blog/${slug}.md`);
      const text = await response.text();
      setMarkdownContent(text);
    })();
  }, [slug]);

  // if (!markdownContent) {
  //   return (
  //     <div className="space-y-4">
  //       <Skeleton size={{ height: 40 }} />
  //       <Skeleton size={{ height: 200 }} variant="rect" />
  //     </div>
  //   );
  // }

  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
}
