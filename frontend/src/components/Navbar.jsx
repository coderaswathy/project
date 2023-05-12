import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav className="justify-content-evenly bg-black py-3" activeKey="/">
      <Nav.Item>
        <Link to="/"> Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about"> About</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/login"> Login</Link>
      </Nav.Item>
    </Nav>
  );
}