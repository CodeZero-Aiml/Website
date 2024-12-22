import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <title>Footer Design</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="Footer.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-x" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Use cases</h4>
              <ul>
                <li>
                  <a href="#">UI design</a>
                </li>
                <li>
                  <a href="#">UX design</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Diagramming</a>
                </li>
                <li>
                  <a href="#">Brainstorming</a>
                </li>
                <li>
                  <a href="#">Online whiteboard</a>
                </li>
                <li>
                  <a href="#">Team Collaboration</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Prototyping</a>
                </li>
                <li>
                  <a href="#">Development features</a>
                </li>
                <li>
                  <a href="#">Design Systems</a>
                </li>
                <li>
                  <a href="#">Collaboration Features</a>
                </li>
                <li>
                  <a href="#">Design Process</a>
                </li>
                <li>
                  <a href="#">FigJam</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Best Practices</a>
                </li>
                <li>
                  <a href="#">Colors</a>
                </li>
                <li>
                  <a href="#">Color Wheel</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Resource Library</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
