import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  console.log("Logged-in User:", user); // ✅ Log user object


  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      {user ? (
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">My Profile</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>

          <div className="mt-8 flex flex-col space-y-4">
            {/* Uncomment and adjust this if you want user dashboard */}
            {/* <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
            >
              <MdDashboard size={22} />
              Dashboard
            </button> */}

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
              >
                <MdDashboard size={22} />
                Admin Dashboard
              </button>
            )}

            <button
              onClick={logoutHandler}
              className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            >
              <IoMdLogOut size={22} />
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-white text-xl">Loading user info...</p>
      )}
    </div>
  );
};

export default Account;
