import React, { useState } from "react";
import {ApplienceRepair, ComputerRepair, HomeCleaning, HomeHelp,HomeRepair, InteriorDesigning, InvertorBatteries, KitchenApplienceRepair, MobileTabletRepair, PackersMovers, PestControl} from "../../../Dummydata/Data-React";
import './UMV.css'

const UMV = () => {
    const [openSection, setOpenSection] = useState("ApplienceRepair");

    const handleSectionClick = (section) => {
      setOpenSection(section);
    };

    const sections = {
        ApplienceRepair,
        ComputerRepair,
        HomeCleaning,
        HomeHelp,
        HomeRepair,
        InteriorDesigning,
        InvertorBatteries,
        KitchenApplienceRepair,
        MobileTabletRepair,
        PackersMovers,
        PestControl
      };
    
    return (
        <>
            <div className="AboutCont-main">
        <div className="AboutContMore">
          {Object.keys(sections).map((section, index) => (
            <p
              key={index}
              className="AboutContP"
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </p>
          ))}
        </div>

        <div className="AboutContOpen">
          {openSection && (
            <div className="AboutCont-cards3">
              <h1>{openSection}</h1>
              <div className="AboutCont-crds3">
                {sections[openSection].map((item, index) => (
                  <React.Fragment key={index}>
                    <h2 className="AboutCont-h2">{item.heading}</h2>
                    <p className="AboutCont-para">{item.para}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
        </>
    );
};

export default UMV;