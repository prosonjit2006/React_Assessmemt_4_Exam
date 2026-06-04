import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { navItems } from "../services/json/global.json";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide text-slate-800">
          Shop<span className="text-blue-600">Hub</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/cart")}
            className="rounded-full bg-blue-600 px-2 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <BsFillCartPlusFill size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
