import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ThemeSwitcher from "./components/commons/ThemeSwitcher";
import ModeState from "./context/modeState";
import BlogState from "./context/blogState";
import UserState from "./context/userState";
import BlogFormState from "./context/blogFormState";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "light");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <ModeState>
          <BlogState>
            <UserState>
              <BlogFormState>
                <ToastContainer
                  autoClose={2000}
                  position="top-right"
                  pauseOnHover={true}
                  draggable={true}
                  theme="dark"
                  toastClassName="toast-custom"
                />
                <ThemeSwitcher />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
              </BlogFormState>
            </UserState>
          </BlogState>
        </ModeState>
      </Router>
    </div>
  );
}

export default App;
