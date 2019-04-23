import React from "react";
import "./style.css";


function Header(props) {
    return <h1 className="header">{props.children}</h1>;
  };
function Title(props) {
  return <h1 className="title">{props.children}</h1>;
};

function Refresh(props) {
    return <h2 className="refresh">{props.children}</h2>;
};

function Score(props) {
return <h3 className="score">{props.children}</h3>;
};

  export { Header, Title, Refresh, Score };