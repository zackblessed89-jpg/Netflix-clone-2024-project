import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li> Audio Description </li>
              <li> Investor Relations </li>
              <li> Legal Notice </li>
              <li> </li>
            </ul>
            <div className="service_code">
              <p> Service Code </p>
            </div>
            <div className="copy-right"> &copy; 1997-2025 Netflix,Inc.</div>
          </div>

          <div>
            <ul>
              <li> Help center</li>
              <li> jobs</li>
              <li> Cookies preference</li>
            </ul>
          </div>

          <div>
            <ul>
              <li> Gift Cards </li>
              <li> Term of Uses </li>
              <li> Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Media Center</li>
              <li> Privacy</li>
              <li> contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
