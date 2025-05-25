import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Achievements from "./pages/achievements/Achievements";
import Form from "./pages/form/Form";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import Test from "./pages/test/Test";
import Result from "./pages/result/Result";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashbord from "./pages/dashbord/Dashbord";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import AdminDashbord from "./admin/Dashboard/AdminDashbord";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
  const { isAuth, user, loading } = UserData();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          {/* Main flex container to control footer layout */}
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header isAuth={isAuth} />

            {/* Main content expands to fill space */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/test" element={<Test />} />
                <Route path="/result" element={<Result />} />
                <Route path="/form" element={<Form />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route
                  path="/account"
                  element={isAuth ? <Account user={user} /> : <Login />}
                />
                <Route path="/login" element={isAuth ? <Home /> : <Login />} />
                <Route
                  path="/register"
                  element={isAuth ? <Home /> : <Register />}
                />
                <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
                <Route
                  path="/forgot"
                  element={isAuth ? <Home /> : <ForgotPassword />}
                />
                <Route
                  path="/reset-password/:token"
                  element={isAuth ? <Home /> : <ResetPassword />}
                />
                <Route
                  path="/course/:id"
                  element={
                    isAuth ? <CourseDescription user={user} /> : <Login />
                  }
                />
                <Route
                  path="/payment-success/:id"
                  element={
                    isAuth ? <PaymentSuccess user={user} /> : <Login />
                  }
                />
                <Route
                  path="/:id/dashboard"
                  element={isAuth ? <Dashbord user={user} /> : <Login />}
                />
                <Route
                  path="/course/study/:id"
                  element={isAuth ? <CourseStudy user={user} /> : <Login />}
                />
                <Route
                  path="/lectures/:id"
                  element={isAuth ? <Lecture user={user} /> : <Login />}
                />
                <Route
                  path="/admin/dashboard"
                  element={isAuth ? <AdminDashbord user={user} /> : <Login />}
                />
                <Route
                  path="/admin/course"
                  element={isAuth ? <AdminCourses user={user} /> : <Login />}
                />
                <Route
                  path="/admin/users"
                  element={isAuth ? <AdminUsers user={user} /> : <Login />}
                />
              </Routes>
            </main>

            {/* Footer always at the bottom */}
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
