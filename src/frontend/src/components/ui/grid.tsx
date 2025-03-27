export const Grid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`grid ${className || ""}`}>{children}</div>;
};
