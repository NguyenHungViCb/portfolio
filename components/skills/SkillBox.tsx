import Image from "next/image";

const SkillBox: React.FC<{ skill: any }> = ({ skill }) => {
  return (
    <li className="flex gap-3 items-center border rounded-lg p-2">
      <Image src={skill.icon} width={24} height={24} />
      <span>{skill.name}</span>
    </li>
  );
};

export default SkillBox;
