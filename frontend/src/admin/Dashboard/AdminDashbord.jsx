import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redirect non-admin users
  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  // Fetch registered users
  async function fetchRegisteredUsers() {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"), // adjust if you use auth
        },
      });
      setRegisteredUsers(data);
    } catch (err) {
      setError("Failed to fetch registered users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && user.role === "admin") {
      fetchRegisteredUsers();
    }
  }, [user]);

  if (!user || user.role !== "admin") return null;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Admin Dashboard - Registered Users
        </h1>

        {loading && (
          <p className="text-center text-gray-600">Loading registered users...</p>
        )}
        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto max-w-7xl mx-auto bg-white shadow rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Mobile Number
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Date of Birth
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Class/Grade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Guardian Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Guardian Mobile
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Registered At
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {registeredUsers.length === 0 && (
                  <tr>
                    <td colSpan={10} className="text-center py-6 text-gray-500">
                      No registered users found.
                    </td>
                  </tr>
                )}

                {registeredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{user.fullName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.mobileNumber}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.dateOfBirth}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.gender}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.address}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.classGrade}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.guardianName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{user.guardianMobile}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
