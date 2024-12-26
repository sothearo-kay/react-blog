type SkeletonProps = {
  count: number;
  variant: "text" | "circle" | "rect";
  size: { width?: string | number; height?: string | number };
  className: string;
};

export const Skeleton: React.FC<Partial<SkeletonProps>> = ({
  count = 1,
  variant = "text",
  size = {},
  className = "",
}) => {
  const skeletonItems = Array.from({ length: count });

  const baseStyle: React.CSSProperties = {
    width: size.width,
    height: size.height,
  };

  const variantClasses = {
    text: "h-4 w-full rounded-sm",
    circle: "rounded-full",
    rect: "rounded-lg",
  };

  return (
    <>
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className={`bg-gray-300 animate-pulse ${variantClasses[variant]} ${className}`}
          style={baseStyle}
        ></div>
      ))}
    </>
  );
};

export default Skeleton;
