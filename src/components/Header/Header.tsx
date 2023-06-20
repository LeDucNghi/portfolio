import "./Header.scss";

import { headerNavLinks } from "../../constants/clusterWidgets";

export function Header() {
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
            >
              {nav.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
