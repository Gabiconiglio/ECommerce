import { React,useState } from "react";
import { IoIosLogIn } from "react-icons/Io";
import { RxAvatar } from "react-icons/Rx";
import ModalLogIn from "../ModalLogIn/ModalLogIn.jsx";
import "../Login/Login.css";

function Login() {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    if (!login) {
      document.getElementById("my_modal_1").showModal();
    } else {
      document.getElementById("my_modal_1").close();
    }
  };

  return (
    <>
      <div className="dropdown dropdown-end" onClick={toggleLogin}>
        {login ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <RxAvatar id="iconoLogIn" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <label tabIndex={7} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <IoIosLogIn id="iconoLogIn" />
              </div>
            </label>
            <ModalLogIn />
          </>
        )}
      </div>
    </>
  );
}

export default Login;
