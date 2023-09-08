import Socials from "./Socials";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo-footer">
          <a href="/">
            <img className="logo-img-footer" src="./logo.png" alt="logo"></img>
          </a>
          <p>Company catchprase</p>
        </div>
        <div className="email-list">
          <p>
            Get the latest updates and promotions delivered directly to your
            inbox
          </p>
          <form method="post" action="/api/emails">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            ></input>
            <button type="submit" className="cta">
              <span className="hover-underline-animation">Subscribe</span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-middle">
        <div className="helpful-info">
          <div className="helpful-images">
            <a href="http://maps.google.com/?q=Miami, FL" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                />
              </svg>
            </a>
            <a href="tel:2345678910">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
            </a>
            <a href="mailto:name@bytebros.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                />
              </svg>
            </a>
          </div>
          <div className="helpful-images-text">
            <a href="http://maps.google.com/?q=Miami, FL" target="_blank">
              Miami, FL
            </a>
            <a href="tel:2345678910">+1 234-567-8910</a>
            <a href="mailto:name@bytebros.com">name@bytebros.com</a>
          </div>
        </div>
        <div className="helpful-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>
        <Socials />
      </div>
      <div className="footer-line"></div>
      <h4>Copyright © 2023 Byte Bros</h4>
      <a className="storyset-a" href="https://storyset.com/data">
        Data illustrations by Storyset
      </a>
    </footer>
  );
}
