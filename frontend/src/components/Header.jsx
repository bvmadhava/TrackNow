import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-gray-800 text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          JobFlow
        </h1>

        {/* Right side: Auth actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          {user ? (
            <>
              <span className="text-sm sm:text-base">
                Welcome, <strong>{user.name}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-sm sm:text-base transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-sm sm:text-base transition text-center w-full sm:w-auto"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm sm:text-base transition text-center w-full sm:w-auto"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
