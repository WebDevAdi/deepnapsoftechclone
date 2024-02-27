import React from "react";
import { useId } from "react";

function Input({ label = "", type = "text", placeholder = "", options = [] }) {
    const id = useId()
  return (
    <div>
      
        <div className="flex flex-col">
          <label htmlFor={id} className="text-slate-500 font-semibold text-lg py-1">{label}</label>
          <input 
          type={type} 
          placeholder={placeholder} 
          id={id}
          className="text-white bg-transparent  border border-slate-500 rounded p-2 w-full remove-arrow"
          />
        </div>
    </div>
  );
}

export default Input;
