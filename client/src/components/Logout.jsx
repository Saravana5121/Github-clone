import { MdLogout } from "react-icons/md";
const Logout = () => {
  return (
    <>
      <img
        src={
          "https://imgs.search.brave.com/6eHKw_ZKNJtImOLKjAfZGshC9rVMAkIVnSsrQzeoewg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVByb2ZpbGUu/cG5n"
        }
        className="w-10 h-10 rounded-full border border-gray-800"
      />
      <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
        <MdLogout size={25} />
      </div>
    </>
  );
};

export default Logout;
