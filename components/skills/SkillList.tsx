const SkillList: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <ul className={`${className && className} grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3`}>
      {children}
    </ul>
  );
};

export default SkillList;
