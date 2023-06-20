export interface ISectionProps {
  sectionName: string;
  sectionDescribe: string;
  children: JSX.Element;
}

import "./Section.scss";

export function Section({
  sectionName,
  sectionDescribe,
  children,
}: ISectionProps) {
  return (
    <div className="section_wrapper">
      <div className="heading_container">
        <span>{sectionName} </span>

        <span>{sectionDescribe}</span>
      </div>

      <div className="content_container">{children}</div>
    </div>
  );
}
