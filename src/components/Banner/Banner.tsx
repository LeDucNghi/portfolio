import "./Banner.scss";

import { Images } from "../../constants/images";
import { socialButton } from "../../constants/clusterWidgets";

// export interface IBannerProps {
//   handleScrollTo: (id: string) => any;
// }

export function Banner() {
// { handleScrollTo }: IBannerProps
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

          {/* <button
            className="content_items"
            onClick={() => handleScrollToView("#projects")}
          >
            Projects
          </button> */}
        </div>

        <div className="hero">
          <div className="avatar">
            <img src={Images.cv2} alt="blob" />
          </div>
        </div>
      </div>

      <div className="mouse_container">
        <div className="mouse"></div>
      </div>
    </div>
  );
}
