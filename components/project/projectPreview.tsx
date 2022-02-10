export function ProjectPreview(props: { index: number; project: any }) {
  return (
    <div
      className={`${
        props.index % 2 === 0 ? "ml-auto" : "mr-auto"
      } website-preview lg:w-4/5 aspect-[1.5] rounded-t-lg lg:rounded-2xl overflow-hidden border border-b-0 lg:border-b border-gray-300 lg:shadow-md`}
    >
      <img
        className="object-cover"
        src={props.project["preview-image"]}
        style={{ width: "100%", height: "100%" }}
        alt={props.project.name + "-preview"}
      />
    </div>
  );
}
