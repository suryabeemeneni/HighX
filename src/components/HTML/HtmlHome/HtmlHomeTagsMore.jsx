import React, { useState } from 'react';
import './HtmlHome.css'
import {InlineTextSemantics, ImageMultimedia, EmbeddedContent, ScriptingTags, TableContent, FormsTags, InteractiveElements} from '../../../Dummydata/Data-HTML';

const HtmlHomeTagsMore = () => {
    const [itsopen, setitsopen] = useState(true)
    const [imopen, setimopen] = useState(false)
    const [ecopen, setecopen] = useState(false)
    const [sopen, setsopen] = useState(false)
    const [tcopen, settcopen] = useState(false)
    const [fopen, setfopen] = useState(false)
    const [ieopen, setieopen] = useState(false)


    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <div className="HtmlHomeTags-main">
            <div className="HtmlHomeTagsMore">
                <p className='HtmlTagsP' onClick={() => {
                    setitsopen(true);setimopen(false);setecopen(false);setsopen(false);settcopen(false);setfopen(false);setieopen(false)
                    }}>Inline text semantics</p>
                <p className='HtmlTagsP' onClick={() => {
                    setimopen(true);setitsopen(false);setecopen(false);setsopen(false);settcopen(false);setfopen(false);setieopen(false)
                    }}>Image and multimedia</p>
                <p className='HtmlTagsP' onClick={() => {
                    setecopen(true);setitsopen(false);setimopen(false);setsopen(false);settcopen(false);setfopen(false);setieopen(false)
                    }}>Embedded content</p>
                <p className='HtmlTagsP' onClick={() => {
                    setsopen(true);setitsopen(false);setimopen(false);setecopen(false);settcopen(false);setfopen(false);setieopen(false)
                    }}>Scripting</p>
                <p className='HtmlTagsP' onClick={() => {
                    settcopen(true);setitsopen(false);setimopen(false);setecopen(false);setsopen(false);setfopen(false);setieopen(false)
                    }}>Table content</p>
                <p className='HtmlTagsP' onClick={() => {
                    setfopen(true);setitsopen(false);setimopen(false);setecopen(false);setsopen(false);settcopen(false);setieopen(false)
                    }}>Forms</p>
                <p className='HtmlTagsP' onClick={() => {
                    setieopen(true);setitsopen(false);setimopen(false);setecopen(false);setsopen(false);settcopen(false);setfopen(false)
                    }}>Interactive elements</p>
            </div>

            <div className="HtmlHomeTagsOpen">
            {itsopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Inline text semantics</h1>
                <p className='cp'>Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.</p>
                
                <div className="HtmlTags-crds3">
                    {InlineTextSemantics.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {imopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Image and multimedia</h1>
                <p className='cp'>HTML supports various multimedia resources such as images, audio, and video.</p>
                
                <div className="HtmlTags-crds3">
                    {ImageMultimedia.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {ecopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Embedded content</h1>
                <p className='cp'>In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.</p>
                
                <div className="HtmlTags-crds3">
                    {EmbeddedContent.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {sopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Scripting</h1>
                <p className='cp'>To create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.</p>
                
                <div className="HtmlTags-crds3">
                    {ScriptingTags.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {tcopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Table content</h1>
                <p className='cp'>The elements here are used to create and handle tabular data.</p>
                
                <div className="HtmlTags-crds3">
                    {TableContent.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {fopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Forms</h1>
                <p className='cp'>HTML provides several elements that can be used together to create forms that the user can fill out and submit to the website or application. Further information about this available in the HTML forms guide.</p>
                
                <div className="HtmlTags-crds3">
                    {FormsTags.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}

            {ieopen &&  <div className="HtmlTags-cards3">
                <h1 className='ch'>Interactive elements</h1>
                <p className='cp'>HTML offers a selection of elements that help to create interactive user interface objects.</p>
                
                <div className="HtmlTags-crds3">
                    {InteractiveElements.map((data) => (
                        <div className="Tags-card3">
                            <p className='syntax'>{data.syntax}</p>
                            <p className='description'>{data.description1} {readMore && <>{data.description2}</>}
                            <span onClick={() => setReadMore(!readMore)} className='readm'>{readMore ? 'read less...' : 'read more...'}</span></p>
                        </div>
                    ))}
                </div>
            </div>}
            </div>

            </div>
        </>
    );
};

export default HtmlHomeTagsMore;