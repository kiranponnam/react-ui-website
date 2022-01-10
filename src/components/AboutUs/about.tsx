import "../../App.css"
import "../AboutUs/about.css";
const about = (props: any) => {
  return (
    <div className="middleAPPContainer">
      <div className="mainAboutContainer">
        <div className="middleAboutContainer">
          <img
            src="/assests/logo.jpg"
            alt="ProfilePic"
            className="profileContainer"
          />
          <div className="aboutMeHeadingContainer">About me</div>
          <div className="descriptionContainer">
            Hi folks, this is TM photography studio, located at Godhavarikhani, we
            provide marriage photography as well as outdoor shoots in affordable
            prices
          </div>
          <div className="ResumeContainer">
          </div>
          {/* <div className="aboutMeHeadingContainer">Follow me on ...</div>
        <div className="bottomSocialMediaContainer"></div> */}
        </div>
      </div>
    </div>
  );
};
export default about;
