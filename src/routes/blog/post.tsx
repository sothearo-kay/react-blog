import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import Skeleton from "../../components/skeleton";
import BlockCode from "../../components/blockCode";

const fetchPost = async (slug: string) => {
  const response = await fetch(`/blog/${slug}.md`);
  return response.text();
};

export default function Post() {
  const { slug = "" } = useParams();
  const { data: markdownContent, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton size={{ height: 40 }} />
        <Skeleton size={{ height: 200 }} variant="rect" />
      </div>
    );
  }

  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre(props) {
            const { children, className, ...rest } = props;
            return (
              <BlockCode {...rest} className={className}>
                {children}
              </BlockCode>
            );
          },
        }}
      />
    </div>
  );
}
