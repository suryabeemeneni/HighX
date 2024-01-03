import React from "react";
import { Link } from "react-router-dom";
import { JSTopics } from "../../../Dummydata/Data-JS";

const JavaScriptTask = () => {
  return (
    <>
      <div className="jsTask-heading">
        <h1>
          <span>Java script - </span>
          <span className="span-text">Topics</span>
        </h1>
      </div>

      <div className="jsTask">
        {JSTopics.map((data) => (
          <Link
            to={data.link}
            className="jsTask-card"
            style={{
              background: `url('${data.imgsrc}') no-repeat center center`,
              backgroundSize: "cover",
              transition: "background-image 0.3s ease-in-out",
              ":hover": { backgroundImage: `url('${data.imgsrc}')` },
            }}

            // style={{background:{hover: `url('${data.imgsrc}')`}, ":hover": {backgroundImage: `url('${data.imgsrc}')`} }}
          >
            <img src={data.imgsrc} alt="" />
            <h3>{data.h3}</h3>
            <div>
              {data.para.map((val) => (
                <p>{val.p}</p>
              ))}
            </div>
            <span> 👁 View More</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default JavaScriptTask;
