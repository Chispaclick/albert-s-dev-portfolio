import { Link } from "react-router-dom";
import  MdiLinkedin from "../../components/icons/MdiLinkedin";
import  MdiGithub  from "../../components/icons/MdiGithub";
import  MdiGmail  from "../../components/icons/MdiGmail";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links-container">
        <ul>
          <Link className="footer_link">Home</Link>
          <Link className="footer_link">Skills</Link>
          <Link className="footer_link">Certificates</Link>
          <Link className="footer_link">About me</Link>
        </ul>
        <div className="social_media-container">
            <MdiGithub className="footer_icon"/>
            <MdiLinkedin className="footer_icon"/>
            <MdiGmail className="footer_icon"/>
        </div>
      </div>
    </div>
  );
};
