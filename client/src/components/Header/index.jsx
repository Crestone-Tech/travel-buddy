import travelbuddy from "../../assets/images/travelbuddy.png";

export default function Header(props) {
  return (
    <header>
      <img src={travelbuddy} alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <i className="fas fa-envelope"></i>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <i className="fas fa-question-circle"></i>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <i className="fas fa-sign-in-alt"></i>
            <a href="#login">Login</a>
          </li>
          <li>
            <i className="fas fa-user-plus"></i>
            <a href="#signup">Signup</a>
          </li>
        </ul>
      </nav>
      {props.children}
    </header>
  );
}
