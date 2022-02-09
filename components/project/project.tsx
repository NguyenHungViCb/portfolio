import { ProjectOverview } from "./projectOverview";
import { ProjectPreview } from "./projectPreview";

export function Project(props: {
  index: number;
  project: any;
}) {
  return (
    <div className="flex flex-col-reverse lg:block project-main relative mb-14">
      <ProjectOverview
        index={props.index}
        project={props.project}
      />
      <ProjectPreview index={props.index} project={props.project} />
    </div>
  );
}
