import Link from "next/link";
import { Tech } from "./tech";

export function ProjectOverview(props: {
  index: number;
  project: any;
}) {
  return (
    <div
      className={`website-overview ${
        props.index % 2 === 0 ? "lg:left-0" : "lg:right-0"
      } rounded-b-lg lg:rounded-lg lg:absolute lg:w-2/5 lg:top-1/2 lg:-translate-y-1/2 border border-black bg-black text-white px-3 py-5 flex flex-col gap-3`}
    >
      <div className="year absolute top-0 text-4xl font-bold bg-green-400 px-2 py-1 rounded-lg left-1/2 -translate-x-1/2 -translate-y-1/2">
        {props.project.time}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold mt-2">{props.project.name}</h1>
        <div className="links flex items-center gap-2">
          <Link href={props.project.github}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width={32}
                height={32}
                className="fill-emerald-200"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
              </svg>
            </a>
          </Link>
          <Link href={props.project.link}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-emerald-200"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="links flex items-center gap-2 flex-wrap">
        {props.project["tech-stack"].map((tech: any) => (
          <Tech name={tech} key={props.project.name + tech} />
        ))}
      </div>
      <p>{props.project.overview}</p>
    </div>
  );
}
