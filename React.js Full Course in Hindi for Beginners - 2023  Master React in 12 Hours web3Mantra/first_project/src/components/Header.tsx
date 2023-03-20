// const Header = () => {

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="https://react.dev/">Home</a>
        </li>
        <li>
          <a href="https://react.dev/">Our Services</a>
        </li>
        <li>
          <a href="https://react.dev/">About Us</a>
        </li>
        <li>
          <a href="https://react.dev/">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h2> Footer copywrite @2023</h2>
    </div>
  );
}
export { Header, Footer };
