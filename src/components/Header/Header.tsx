import "./Header.scss";

import { Images } from "../../constants/images";
import { headerNavLinks } from "../../constants/clusterWidgets";

export interface IHeaderProps {
  handleScrollTo: (id: string, name: string) => any;
}

export function Header({ handleScrollTo }: IHeaderProps) {
  const handleScrollToView = (id: string, name: string) => {
    handleScrollTo(id, name);
  };

  return (
    <div className="header_wrapper">
      <a
        href=""
        onClick={() => handleScrollToView("", "home")}
        className="header_logo_container"
      >
        <img src={Images.cv2} alt="" />

        <span>lê đức nghị</span>
      </a>

      <div className="header_nav_link">
        {headerNavLinks.map((nav, key) => {
          return (
            <a
              href={nav?.ref}
              key={key}
              className="nav_link"
              rel="noreferrer noopener"
              onClick={() => handleScrollToView(nav.ref, nav.name)}
            >
              {nav.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
