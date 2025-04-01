import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <h1 className="text-xl">Real-Time Document Editor</h1>
      <Link to="/" className="ml-4">Home</Link>
    </nav>
  );
};

export default Navbar;
