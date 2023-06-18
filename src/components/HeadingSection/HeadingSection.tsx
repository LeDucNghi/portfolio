import "./HeadingSection.scss";

export interface IHeadingSectionProps {
  sectionName: string;
  sectionDescribe: string;
}

export function HeadingSection({
  sectionName,
  sectionDescribe,
}: IHeadingSectionProps) {
  return (
    <div className="heading_wrapper">
      <span>{sectionName} </span>

      <span>{sectionDescribe}</span>
    </div>
  );
}
