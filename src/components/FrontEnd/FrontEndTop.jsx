import React from "react";
import './FrontEndHome.css'
import Headroom from "react-headroom";

const FrontEndTop = () => {

  return (
    <>
    <Headroom>
      <div className="FE-Top">
        <div className="FE-TopSub">
        <a href="/htmlHome" title="HTML">HTML</a>
        <a href="/CSSHome" title="CSS">CSS</a>
        <a href="/JavaScript" title="Java script">Java Script</a>
        <a href="/ReactHome" title="React JS">React js</a>
        </div>
      </div>
    </Headroom>
    </>
  );
};

export default FrontEndTop;
