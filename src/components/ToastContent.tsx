import React, { JSX } from "react";
import clsx from "clsx";
import { TypeOptions } from "react-toastify";



export interface IToastContentProps {
  title: string;
  status?: TypeOptions
  description?: string | null;
}

function ToastContent({
  title,
  status="error",
  description
}: IToastContentProps): JSX.Element {

  return (
    <div
      className={clsx(
        "border-solid border-r-2",
        {"border-success-500": status === "success"},
        {"border-danger-main": status === "error"},
      )}
    >
      <h3 className={clsx(
        {["text-danger-hover"]: status=="error"},
        {["text-success-500"]: status=="success"}
      )}>
        <p>{title}</p>
      </h3>
      
      {description && (<p className="text-xs">{description}</p>)}
    </div>
  )
}

export default ToastContent;