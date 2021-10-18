import React from "react";

export default function Modal ({refr, ans, children}) {

    return (
        <div className="Modal">
            <div className="confetti"></div>
            <div className="info">
                {children}
            </div>
            <div className="confet"></div>
        </div>
  )
}