import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h1 className="text-2xl bg-amber-200 p-2">This is Navbar</h1>
      <ul className="flex gap-4 p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
