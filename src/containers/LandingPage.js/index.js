import React from "react";
import "./style.css";
import { IMG } from "../../assets/index";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/form");
  }

  return (
    <>
      <header>
        <div className="logo">LandKit.</div>

        <ul className="ul-tag">
          <li>Landings</li>
          <li>Page</li>
          <li>Accounts</li>
          <li>Documantations</li>
        </ul>

        <button className="btn btn-ternary" onClick={handleOnClick}>
          Buy now
        </button>
      </header>

      <section>
        <div className="content flex-item-1">
          <h1>
            Welcome to
            <span>Landkit.</span> <br />
            Develop anything.
          </h1>
          <p>
            Build a beautiful, modern website with flexible <br />
            Bootstrap components built from scratch.
          </p>
          <button className="btn btn-primary">View all pages</button>
          <button className="btn btn-secondary">Documantations</button>
        </div>

        <div className="flex-item-2">
          <img src={IMG} width="100%" height="80%" />
        </div>
      </section>
    </>
  );
}

export default LandingPage;
