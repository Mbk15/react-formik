import React from "react";

const Modal = ({ modalContent }) => {
  return (
    <div className="bg-gray-200 text-red-500 font-bold text-center w-1/2 mx-auto my-4 ">
      {modalContent}
    </div>
  );
};

export default Modal;
