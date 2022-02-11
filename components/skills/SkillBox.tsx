import Image from "next/image";
import { useRef } from "react";

const SkillBox: React.FC<{ skill: any }> = ({ skill }) => {
  const toolTipRef = useRef<HTMLDivElement>(null);
  return (
    <li className="group flex p-2 relative rounded-lg border border-gray-400 cursor-default">
      <div className="flex items-center justify-center gap-3 w-full">
        <Image src={skill.icon} width={24} height={24} />
        <span className="hidden sm:!block">{skill.name}</span>
      </div>
      {skill.note && (
        <div className="absolute -top-0 pb-1 -translate-y-full left-1/2 -translate-x-1/2 -z-10 group-hover:z-10 w-[200%] sm:w-full">
          <div
            ref={toolTipRef}
            className="breif flex flex-col items-center opacity-0 group-hover:opacity-100 rounded-lg text-white transition-opacity"
          >
            <div className="bg-black p-2 rounded-md bg-black/80 backdrop-blur-sm text-sm hover:pointer-events-none">
              {skill.note}
            </div>
            {/* <div className="arrow-down w-0 h-0 border-l-[10px] border-r-[10px] border-transparent border-t-[10px] border-t-black/80 hover:pointer-events-none" /> */}
          </div>
        </div>
      )}
    </li>
  );
};

export default SkillBox;
