import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Model = ({ children }) => {
  const modelRef = useRef(null);
  if (!modelRef.current) {
    const div = document.createElement("div");
    modelRef.current = div;
  }

  useEffect(() => {
    const modelRoot = document.getElementById("modal");
    modelRoot.appendChild(modelRef.current);

    return () => {
      modelRoot.removeChild(modelRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, modelRef.current);
};

export default Model;
