const Terminal: React.FC<{
  aboutMe: any[];
  contentIndex: number;
  current: number;
}> = ({ aboutMe, contentIndex, current }) => {
  return (
    <div className="terminal w-4/5 h-full">
      <div className="title flex items-center relative h-8 rounded-t-lg bg-gray-300">
        <ul className="buttons flex gap-2 ml-2">
          <li className="w-[14px] h-[14px] rounded-full bg-red-400" />
          <li className="w-[14px] h-[14px] rounded-full bg-orange-400" />
          <li className="w-[14px] h-[14px] rounded-full bg-green-500" />
        </ul>
        <div className="absolute inset-0 justify-center flex items-center">
          {aboutMe[contentIndex].title.replaceAll(" ", "_")}
        </div>
      </div>
      <div className="content bg-gray-200 h-[90%]">
        <p className="flex gap-3">
          <span className="ml-5 font-semibold text-purple-500">{">"}</span>
          <span className={"typewritter relative"}>
            <span className="relative title text-green-500">
              {aboutMe[current].title}
              <span className="bg-gray-200 absolute inset-0 cover" />
            </span>
            <span
              id="cursor-2"
              className="absolute left-0 animate-[blink_0.7s_ease_infinite] cursor"
            >
              _
            </span>
          </span>
        </p>
        <div
          className={`p-1 sm:p-2 md:px-5`}
          key={aboutMe[contentIndex].id + "content"}
          dangerouslySetInnerHTML={{
            __html: aboutMe[contentIndex].contentHtml,
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
