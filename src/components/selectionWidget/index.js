import React from "react";
import "./style.css";

function SelectionWidget({ options, initialSelection, handleFun }) {
  return (
    <div className="btn-group">
      {options.length > 0 &&
        options.map((ele) => {
          return (
            <button
              id={ele.name}
              onClick={handleFun}
              className={initialSelection == ele.name && "btn-active"}
            >
              {ele.name}
            </button>
          );
        })}
    </div>
  );
}

export default SelectionWidget;
