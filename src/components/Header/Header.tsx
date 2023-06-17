import "./Header.scss";

export function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_logo_container">
        <span>lê đức nghị</span>
      </div>

      <div className="header_nav_link">
        <a className="nav_link">home</a>
        <a className="nav_link">about</a>
        <a className="nav_link">projects</a>
        <a className="nav_link">contact</a>
      </div>
    </div>
  );
}
