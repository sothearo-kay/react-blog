type SkeletonProps = {
  count: number;
  variant: "text" | "circle" | "rect";
  size: { width?: string | number; height?: string | number };
  className: string;
};

const variantClasses = {
  text: "h-4 w-full rounded-sm",
  circle: "rounded-full",
  rect: "rounded-lg",
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

  return (
    <>
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-neutral-200 ${variantClasses[variant]} ${className}`}
          style={baseStyle}
        ></div>
      ))}
    </>
  );
};

export default Skeleton;
