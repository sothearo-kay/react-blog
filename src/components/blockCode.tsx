import { ReactElement, ReactNode, useCallback, useState } from "react";

interface BlockCodeProps {
  children: ReactNode;
  className?: string;
}

const BlockCode: React.FC<BlockCodeProps> = ({ children, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const codeText = extractTextFromReactNode(children);
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [children]);

  return (
    <div className="group relative">
      <pre className={className}>{children}</pre>
      <button
        onClick={handleCopy}
        className={`absolute right-2 top-2 origin-bottom-right scale-75 rounded bg-gray-200 px-2 py-1 text-xs text-gray-600 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

const isReactElement = (node: ReactNode): node is ReactElement => {
  return typeof node === "object" && node !== null && "props" in node;
};

const extractTextFromReactNode = (node: ReactNode): string => {
  const stack = [node]; // Stack to hold nodes to process
  const result: string[] = []; // Store text parts in order

  while (stack.length > 0) {
    const current = stack.pop();

    if (typeof current === "string") {
      result.push(current); // Append plain text
    } else if (Array.isArray(current)) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push(current[i]);
      }
    } else if (isReactElement(current)) {
      stack.push(current.props.children);
    }
  }

  return result.join("").trim(); // Normalize by joining and trimming
};

export default BlockCode;
