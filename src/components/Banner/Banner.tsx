import "./Banner.scss";

import { Images } from "../../constants/images";
import { socialButton } from "../../constants/clusterWidgets";

export function Banner() {
  return (
    <div className="banner_wrapper" id="banner">
      <div className="social_button_wrapper">
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

      <div className="banner_content">
        <div className="banner_text ">
          <h1 className="content_items">front-end react developer</h1>

          <p className="content_items">
            Hi, I'm Lê Đức Nghị. A passionate Front-end React Developer based in
            Ho Chi Minh City.❣️{" "}
          </p>

          <button className="content_items">Projects</button>
        </div>

        <div className="banner_avt">
          <img className="borders" src={Images.avatarShape} alt="" />
        </div>
      </div>

      <div className="mouse"></div>
    </div>
  );
}
