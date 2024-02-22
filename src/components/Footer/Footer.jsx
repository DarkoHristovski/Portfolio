/* eslint-disable react/jsx-no-target-blank */
import "./footer.css";

const Footer = () => {
  return (
    <footer className="section">
      <div className="social-networks">
        <ul>
          <li>
            <a href="https://github.com/DarkoHristovski" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/darko-hristovski/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/darkoh/#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather featherCodepen"
              >
                <title>CodePen</title>
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
          </li>
          {/*
          <li>
            <a
              href="https://www.xing.com/profile/Darko_Hristovski/web_profiles"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={256}
                height={256}
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 70.315 90 H 57.638 c -2.492 0 -3.714 -1.672 -4.417 -2.931 c -1.847 -3.387 -17.996 -33.014 -18.042 -33.102 l -0.259 -0.484 l 0.27 -0.478 c 0.899 -1.593 28.24 -50.08 28.24 -50.08 C 63.997 1.906 65.059 0 67.699 0 h 12.821 c 1.107 0 2.033 0.468 2.538 1.283 c 0.522 0.847 0.528 1.916 0.02 2.933 L 55.201 53.504 l 17.65 32.242 c 0.529 1.052 0.523 2.122 0 2.969 C 72.347 89.531 71.423 90 70.315 90 z M 37.204 53.506 c 2.225 4.083 17.768 32.598 17.768 32.598 C 55.723 87.448 56.497 88 57.638 88 h 12.678 c 0.234 0 0.653 -0.044 0.835 -0.337 c 0.149 -0.242 0.124 -0.603 -0.069 -0.987 L 52.938 53.535 l 0.268 -0.566 L 81.313 3.276 c 0.166 -0.334 0.191 -0.703 0.044 -0.942 C 81.187 2.059 80.808 2 80.521 2 H 67.699 c -1.238 0 -1.822 0.641 -2.524 1.903 C 65.172 3.908 40.209 48.177 37.204 53.506 z"
                    style={{
                      stroke: "#ccd6f6",
                      strokeWidth: 3,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(0,0,0)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  />
                  <path
                    d="M 22.205 63.624 H 9.477 c -1.105 0 -2.03 -0.468 -2.536 -1.284 c -0.521 -0.844 -0.529 -1.912 -0.021 -2.932 l 13.287 -23.409 l -8.361 -14.358 c -0.541 -1.075 -0.535 -2.144 -0.015 -2.989 c 0.506 -0.819 1.431 -1.288 2.539 -1.288 h 12.677 c 2.492 0 3.716 1.674 4.42 2.934 l 0 0 c 0 0 8.633 14.991 8.75 15.193 l 0.29 0.497 l -0.283 0.502 L 26.476 60.699 C 25.951 61.643 24.85 63.624 22.205 63.624 z M 14.371 19.364 c -0.234 0 -0.654 0.044 -0.836 0.338 c -0.148 0.241 -0.123 0.601 0.071 0.988 l 8.865 15.221 l -0.236 0.567 L 8.686 60.349 c -0.167 0.338 -0.192 0.698 -0.043 0.939 c 0.181 0.292 0.601 0.336 0.835 0.336 h 12.728 c 1.235 0 1.841 -0.67 2.528 -1.905 L 38.203 36 c -1.374 -2.384 -7.189 -12.483 -8.475 -14.715 c -0.764 -1.367 -1.539 -1.92 -2.681 -1.92 H 14.371 z"
                    style={{
                      stroke: "#ccd6f6",
                      strokeWidth: 3,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(0,0,0)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </a>
          </li>
        */}
        </ul>
      </div>
      <p>© 2024 Darko Hristovski</p>
    </footer>
  );
};

export default Footer;
