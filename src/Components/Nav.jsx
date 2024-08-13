import "../Css/Nav.css";

export function Navbar() {
    return (
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">ReactJs</label>
        <ul>
          <li>
            <a class="" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Concetps</a>
          </li>
          <li>
            <a href="#">Installation</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
    );
  }