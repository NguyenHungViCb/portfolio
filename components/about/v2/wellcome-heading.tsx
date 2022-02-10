const WelcomeHeading: React.FC<{
  typewritter: React.RefObject<HTMLSpanElement>;
  aboutMe: any[];
  current: number;
}> = ({ typewritter, aboutMe, current }) => {
  return (
    <h1 className="text-2xl font-semibold">
      Hi, I&apos;m{" "}
      <span ref={typewritter} className={"relative block sm:inline"}>
        <span id="title" className="relative text-green-500">
          {aboutMe[current].title}
          <span className="cover bg-gray-100 absolute inset-0" />
        </span>
        <span className="cursor absolute left-0 animate-[blink_0.7s_ease_infinite]">
          _
        </span>
      </span>
    </h1>
  );
};

export default WelcomeHeading;
