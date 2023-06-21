export interface ISectionProps {
  sectionName: string;
  sectionDescribe: string;
  children: JSX.Element;
  id?: string;
}

import "./Section.scss";

export function Section({
  sectionName,
  sectionDescribe,
  children,
  id,
}: ISectionProps) {
  return (
    <section id={id} className="section_wrapper">
      <div className="heading_container">
        <span>{sectionName} </span>

        <span>{sectionDescribe}</span>
      </div>

      <div className="content_container">{children}</div>
    </section>
  );
}
