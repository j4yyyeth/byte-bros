import Button2 from "./buttons/Button2";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer>
      <h3>Stay in Touch</h3>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="footer-input"
        ></input>
        <Button2 contents="Subscribe" />
      </form>
      <Socials />
      <h4>Copyright © 2023 Byte Bros</h4>
    </footer>
  );
}
