import travelbuddy from "../../assets/images/travelbuddy.png";

import Auth from "../../utils/auth";

export default function Header(props) {
  return (
    <header>
      <img src={travelbuddy} alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <i className="fas fa-envelope"></i>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <i className="fas fa-question-circle"></i>
            <a href="/faq">FAQ</a>
          </li>
          <div>
            {Auth.loggedIn() ? (
              <>
                <li>
                  <i className="fas fa-sign-out-alt"></i>
                  <a href="/" onClick={Auth.logout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <i className="fas fa-sign-in-alt"></i>
                  <a href="/login">Login</a>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
      {props.children}
    </header>
  );
}
