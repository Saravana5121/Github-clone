import { RiHome6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdEditDocument, MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import Logout from "./Logout";

const Sidebar = () => {
  const authUser = false;

  return (
    <aside className="flex flex-col items-center justify-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass">
      <nav className="h-full flex flex-col gap-5">
        <Link to="/" className="flex justify-center mb-2">
          <img className="h-8" src="/github.svg" alt="Github logo" />
        </Link>
        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-xl hover:bg-blue-900"
        >
          <RiHome6Line size={30} />
        </Link>
        {authUser && (
          <Link
            to="/likes"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-xl hover:bg-blue-900"
          >
            <FaHeart size={25} />
          </Link>
        )}
        {authUser && (
          <Link
            to="/explore"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-xl hover:bg-blue-900"
          >
            <MdOutlineExplore size={30} />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/login"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-xl hover:bg-blue-900"
          >
            <PiSignInBold size={30} />
          </Link>
        )}
        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-xl hover:bg-blue-900"
          >
            <MdEditDocument size={30} />
          </Link>
        )}
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
