import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About Us</li>
        </Link>

        <Link to={"/people"}>
          <li>People</li>
        </Link>

        <li>Error</li>
      </ul>
    </div>
  );
};

export default Navbar;
