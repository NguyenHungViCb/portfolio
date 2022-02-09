export const Layout: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div className={`w-11/12 sm:w-4/5 m-auto min-w-[300px] ${className || ""}`}>
      {children}
    </div>
  );
};
