import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      
        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/shubhi221199">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shubhi-sharma-145a65232/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            
            <li id="contact-instagram">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/___shubhiiiiiii___/">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li id="contact-twitter">
              <a target="_blank" rel="noreferrer" href="https://twitter.com/shubhisharma4u">
              <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>

          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/shubhi221199">
            Designed and Created by Shubhi Sharma{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
          <a href="mailto:shubhisharma4u@gmail.com" id="contact-email">shubhisharma4u@gmail.com<hr /></a>
      </div>
    </footer>
  );
}
