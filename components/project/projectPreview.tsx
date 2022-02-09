export function ProjectPreview(props: { index: number; project: any }) {
  return (
    <div
      className={`${
        props.index % 2 === 0 ? "ml-auto" : "mr-auto"
      } website-preview border-2 border-blue-900 lg:w-4/5 aspect-[1.5] rounded-t-lg lg:rounded-lg overflow-hidden`}
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
