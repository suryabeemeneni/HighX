import React from 'react';
import { GHCCont, GHCone } from '../../../Dummydata/Data-Git';

const GitHubContent = () => {
    return (
        <><div className="GHC-Main">
            <div className="GHC-one">
                <div className="GHC-one-head">
                    <h3>INSTALLATION & GUIS</h3>
                    <p>With platform specific installers for Git, GitHub also provides the 
                        ease of staying up-to-date with the latest releases of the command 
                        line tool while providing a graphical user interface for day-to-day 
                        interaction, review, and repository synchronization.</p>
                </div>
                {GHCone.map((data) => (
                <div className="GHC-one-head-sub">
                    <h5>{data.h5}</h5>
                    <p>{data.p}</p>
                </div>
                ))}
            </div>

            {GHCCont.map((val) => (
            <div className="GHC-one GHC-two">
                <div className="GHC-one-head">
                    <h3>{val.h3}</h3>
                    <p>{val.p1}</p>
                </div>
                {val.sub.map((data) => (
                <div className="GHC-one-head-sub GHC-two-sub">
                    <h5>{data.h5}</h5>
                    <p>{data.p}</p>
                </div>
                ))}
            </div>
            ))}
            </div>
        </>
    );
};

export default GitHubContent;