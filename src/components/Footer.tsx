import Button2 from "./buttons/Button2";

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
      <div className="socials">{/*  */}</div>
    </footer>
  );
}
