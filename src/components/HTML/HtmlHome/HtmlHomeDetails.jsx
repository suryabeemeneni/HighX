import React from 'react';
import './HtmlHome.css'
import structure from '../HtmlImages/HtmlStructure.png'
import element from '../HtmlImages/htmlElement.png'
import enteties from '../HtmlImages/HtmlEnteties.png'

const HtmlHomeDetails = () => {
    return (
        <>
            <div className="HtmlHome-Main-Details">
            <div className="HtmlHome-Details">
                    <details><summary>Software Required</summary>
                    {/* <i class='fas fa-times cl1'></i> */}
                        <h4>Text Editor</h4>
                        <p>&emsp; &emsp;Ex:- Notepad, notepad++, Atom, Vscode</p>
                        <h4>Browser</h4>
                        <p>&emsp; &emsp;Ex:- Chrome, Mozilla, FireFox, Internet Explorer</p>
                    </details>

                    <details><summary>Structure</summary>
                    {/* <i class='fas fa-times cl2'></i> */}
                    <img src={structure} alt="" width={'95%'} height={'180px'}/>
                    </details>

                    <details><summary>HTML Entities</summary>
                    {/* <i class='fas fa-times cl1'></i> */}
                    <img src={enteties} alt="" width={'95%'} height={'300px'}/>
                    </details>

                {/* </div> */}
                {/* <div className="HtmlHome-Details"> */}
                    <details><summary>Elements</summary>
                    {/* <i class='fas fa-times cl3'></i> */}
                    <img src={element} alt="" width={'95%'} height={'150px'}/>
                    </details>

                    <details><summary>Block Level Elements</summary>
                    {/* <i class='fas fa-times cl2'></i> */}
                    <p>A block-level element always takes up the full width available (stretches out to the left and right as far as it can).</p>
                    <h5>Here are some block-level elements in HTML:</h5>
                    <p className='tags'>&lt;address&gt; &lt;article&gt; &lt;aside&gt; &lt;blockquote&gt; &lt;canvas&gt; &lt;dd&gt; &lt;div&gt; &lt;dl&gt; &lt;dt&gt; &lt;fieldset&gt; &lt;figcaption&gt; &lt;figure&gt; &lt;footer&gt; &lt;form&gt; &lt;h1&gt;-&lt;h6&gt; &lt;header&gt; &lt;hr&gt; &lt;li&gt; &lt;main&gt; &lt;nav&gt; &lt;noscript&gt; &lt;ol&gt; &lt;p&gt; &lt;pre&gt; &lt;section&gt; &lt;table&gt; &lt;tfoot&gt; &lt;ul&gt; &lt;video&gt;</p>
                    </details>

                    <details><summary>Inline Elements</summary>
                    {/* <i class='fas fa-times cl3'></i> */}
                    <p>An inline element does not start on a new line.</p>
                    <p>An inline element only takes up as much width as necessary.</p>
                    <h5>Here are some inline elements in HTML:</h5>
                    <p className='tags'>&lt;a&gt; &lt;abbr&gt; &lt;acroynm&gt; &lt;b&gt; &lt;bdo&gt; &lt;big&gt; &lt;br&gt; &lt;button&gt; &lt;cite&gt; &lt;code&gt; &lt;dfn&gt; &lt;em&gt; &lt;i&gt; &lt;img&gt; &lt;input&gt; &lt;kbd&gt; &lt;label&gt; &lt;map&gt; &lt;object&gt; &lt;output&gt; &lt;q&gt; &lt;samp&gt; &lt;script&gt; &lt;select&gt; &lt;small&gt; &lt;span&gt; &lt;strong&gt; &lt;sub&gt; &lt;sup&gt; &lt;textarea&gt; &lt;time&gt; &lt;tt&gt; &lt;var&gt;</p>
                    </details>
                </div>
                </div>
        </>
    );
};

export default HtmlHomeDetails;