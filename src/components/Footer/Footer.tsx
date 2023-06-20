import "./Footer.scss";

import { socialButton } from "../../constants/clusterWidgets";

export function Footer() {
  return (
    <footer>
      <div className="main_upper">
        <div className="content_row">
          <h2>lê đức nghị</h2>

          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="content_row">
          <h2>socials</h2>

          <div className="icons">
            {socialButton.map((button, key) => {
              return (
                <a
                  key={key}
                  href={button.ref}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="social_icon_link"
                >
                  <img src={button.image} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="main_lower">© Copyright 2023. Made by Lê Đức Nghị</div>
    </footer>
  );
}
