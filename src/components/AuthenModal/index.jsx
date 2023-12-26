// import React, { useState } from "react";
// import { LoginForm } from "./LoginForm";
// import { RegisterForm } from "./RegisterForm";
// import { useAuthen } from "../AuthenContext";

// export const AuthenModal = () => {
//   const { isAuthenModalOpen, closeAuthenModal } = useAuthen();
//   const [renderForm, setRenderForm] = useState("login");

//   const onClose = () => {
//     closeAuthenModal();
//     setRenderForm("login");
//   };

//   const onLogin = (data) => {

//     console.log("Login form data:", data);
//   };

//   const onRegister = (data) => {
//     console.log("Register form data:", data);
//   };

//   return (
//     <div className={`modal modallogin ${isAuthenModalOpen ? "open" : ""}`}>
//       <div className="modal__wrapper">
//         <div className="modal__wrapper-close" onClick={onClose}>
//           <img src="img/close_icon.svg" alt="CFD Register" />
//         </div>
//         <LoginForm
//           handleSubmit={onLogin}
//           renderForm={renderForm}
//           setRenderForm={setRenderForm}
//         />
//       </div>
//       <div className="modal__overlay" onClick={onClose}></div>
//     </div>
//   );
// };
