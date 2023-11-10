import { React } from "react";
import { AiOutlineUser,AiOutlineClose } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "../ModalLogIn/ModalLogIn.css";

function ModalLogIn() {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button tabIndex={5} className="btn btn-ghost btn-circle"  id="circleExit">
            <AiOutlineClose  id="iconoModalClose" />
            </button>           
          </form>
          <h3 className="font-bold text-lg" id="modalTitulo">
            Log In
          </h3>
          <div className="flex items-center" id="modalUsuario">
            <AiOutlineUser id="iconoModalUsuario" />
            <input
              type="text"
              placeholder="Usuario"
              className="input input-bordered input-sm w-full max-w-xs"
              id="textoUsuario"
            />
          </div>
          <div className="flex items-center" id="modalUsuario">
            <RiLockPasswordLine id="iconoModalPassword" />
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-bordered input-sm w-full max-w-xs"
              id="textoContraseña"
            />
          </div>
          <p id="olvidasteContraseña">
            ¿Olvidaste tu contraseña? Haz click <u>Aquí</u>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline" id="btnEnviar">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default ModalLogIn;
