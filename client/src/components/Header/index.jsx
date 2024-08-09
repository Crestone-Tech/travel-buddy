import travelbuddy from "../../assets/images/travelbuddy.png";

export default function Header(props) {
  return (
    <header>
      <img src={travelbuddy} alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#signup">Signup</a>
          </li>
        </ul>
      </nav>
      {props.children}
    </header>
  );
}
