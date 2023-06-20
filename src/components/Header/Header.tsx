import "./Header.scss";

import { headerNavLinks } from "../../constants/clusterWidgets";

export function Header() {
  const handleScrollTo = (id: string) => {
    window.location.href = id;
  };

  return (
    <div className="header_wrapper">
      <div className="header_logo_container">
        <span>lê đức nghị</span>
      </div>

      <div className="header_nav_link">
        {headerNavLinks.map((nav, key) => {
          return (
            <a
              href={nav.ref}
              key={key}
              className="nav_link"
              rel="noreferrer noopener"
              onClick={() => handleScrollTo(nav.ref)}
            >
              {nav.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
