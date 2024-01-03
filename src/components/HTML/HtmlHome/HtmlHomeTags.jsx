import React, { useState } from 'react';
import { ContentSectioning, DocumentMetadata } from '../../../Dummydata/Data-HTML';
import csOverview from '../HtmlImages/ContentSectioningOverview.png'
import HtmlHomeTagsMore from './HtmlHomeTagsMore';

const HtmlHomeTags = () => {
    const [csopen, setcsopen] = useState(false)
    return (
        <>
            <div className="HtmlTags-head">
                <h1 className='hh'>HTML Tags</h1>
                <p className='hp'>Every HTML document must have some essential tags so that a web browser can understand and display it correctly. </p>
                <p className='hp'>These tags help web browsers distinguish between simple text and HTML text.</p>
            </div>

            <div className="HtmlTags-cards">
                <h1 className='ch'>Document metadata</h1>
                <p className='cp'>Metadata contains information about the page. This includes information about styles, scripts and data to help software (search engines, browsers, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or linked to another file that has the information.</p>
                
                <div className="HtmlTags-crds">
                    {DocumentMetadata.map((tags) => (
                        <div className="Tags-card">
                            <h3 className='element'>{tags.element}</h3>
                            <p className='syntax'><strong>{tags.syntax}</strong></p>
                            <img src={tags.output} alt=""  className='output'/>
                            <p className='description'>{tags.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="HtmlTags-cards2">
                <h1 className='ch'>Content sectioning</h1>
                <p className='cp'>Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.</p>
                <p  className='cpi' onClick={() => setcsopen(!csopen)}>Content sectioning Overview</p>
                {csopen && <img src={csOverview} alt=''/>}
                
                <div className="HtmlTags-crds2">
                    {ContentSectioning.map((tag) => (
                        <div className="Tags-card2">
                            <h3 className='element'>{tag.element}</h3>
                            <p className='syntax'><strong>{tag.syntax.map((syntx) => (
                            <>
                            {syntx.syntax1}
                            <br/>
                            {syntx.syntax2}
                            <br/>
                            {syntx.syntax3}
                            <br/>
                            {syntx.syntax4}
                            <br/>
                            {syntx.syntax5}
                            <br/>
                            {syntx.syntax6}
                            </>
                            ))}</strong></p>
                            <details>
                                <summary>View Output</summary>
                                <img src={tag.output} alt=""  className='output'/>
                            </details>
                        </div>
                    ))}
                </div>
            </div>

            <HtmlHomeTagsMore/>
        </>
    );
};

export default HtmlHomeTags;