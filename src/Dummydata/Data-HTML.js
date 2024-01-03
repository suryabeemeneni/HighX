// --------------------------------------------------------HTML TAGS------------------------------------------------------------------------//
export const DocumentMetadata = [
  {
    element:"<link>",
    syntax:"<link rel='' href=''>",
    output:"../images/Tags/DocumentMetadata/linktag.png",
    description:"This element is most commonly used to link to CSS but is also used to establish site icons (both 'favicon' style icons and icons for the home screen and apps on mobile devices) among other things."
  },
  {
    element:"<meta>",
    syntax:"<meta re=''> or <meta name=''> or <meta charset=''>",
    output:"../images/Tags/DocumentMetadata/metatag.png",
    description:"Represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> and <title>."
  },
  {
    element:"<style>",
    syntax:"<style>--</style>",
    output:"../images/Tags/DocumentMetadata/styletag.png",
    description:"Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element."
  },
  {
    element:"<title>",
    syntax:"<title>****</title>",
    output:"../images/Tags/DocumentMetadata/titletag.jpg",
    description:"Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored."
  },
];
//```````````````````````````````````````````````//
export const ContentSectioning = [
  {
    element:"<address>",
    syntax:[{
      syntax1:"<address>",
      syntax2:"<p>772, Elson Appartments</p>",
      syntax3:"<p>Desko city, Mesrai</p>",
      syntax4:"<p>New Delhi - 73473</p>",
      syntax5:"</address>",
      syntax6:"",
    }],
    output:"../images/Tags/ContentSectioning/addresstagO.jpg",
    description:"Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
  },
  {
    element:"<datalist> or <search>",
    syntax:[{
      syntax1:"<inut list='x' />",
      syntax2:"<dtalist id='x'>",
      syntax3:"<option value='a'>",
      syntax4:"<option value='b'>",
      syntax5:"<option value='c'>",
      syntax6:"</datalist>",
    }],
    output:"../images/Tags/ContentSectioning/datalisttagO.jpg",
    description:"Represents a part that contains a set of form controls or other content related to performing a search or filtering operation."
  },
  {
    element:"<header>",
    syntax:[{
      syntax1:"<header>",
      syntax2:"<h1>A heading here</h1>",
      syntax3:"<p>Posted by surya</p>",
      syntax4:"<p>Some additional infornation here</p>",
      syntax5:"<p>Lorem Ipsum dolor set amet.....</p>",
      syntax6:"</header>",
    }],
    output:"../images/Tags/ContentSectioning/headertagO.png",
    description:"Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."
  },
  {
    element:"<h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
    syntax:[{
      syntax1:"<h1>This is heading 1</h1>",
      syntax2:"<h2>This is heading 2</h2>",
      syntax3:"<h3>This is heading 3</h3>",
      syntax4:"<h4>This is heading 4</h4>",
      syntax5:"<h5>This is heading 5</h5>",
      syntax6:"<h6>This is heading 6</h6>",
    }],
    output:"../images/Tags/ContentSectioning/htagsO.png",
    description:"Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    element:"<main>",
    syntax:[{
      syntax1:"<main>",
      syntax2:"<article>",
      syntax3:"<h1>Beemeneni",
      syntax4:"<p>Developed by surya</p>",
      syntax5:"</article>",
      syntax6:"</main>",
    }],
    output:"../images/Tags/ContentSectioning/maintagO.png",
    description:"Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."
  },
  {
    element:"<nav>",
    syntax:[{
      syntax1:"<nav>",
      syntax2:"<a href=''>HTML</a>",
      syntax3:"<a href=''>CSS</a>",
      syntax4:"<a href=''>JavaScript</a>",
      syntax5:"<a href=''>Python</a>",
      syntax6:"</nav>",
    }],
    output:"../images/Tags/ContentSectioning/navtagO.png",
    description:"Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."
  },
  {
    element:"<footer>",
    syntax:[{
      syntax1:"<footer>",
      syntax2:"<h4>Footer</h4>",
      syntax3:"<h4>Footer</h4>",
      syntax4:"</footer>",
      syntax5:"",
      syntax6:"",
    }],
    output:"../images/Tags/ContentSectioning/footertagO.png",
    description:"Represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data, or links to related documents."
  },
  {
    element:"<section>",
    syntax:[{
      syntax1:"<section>",
      syntax2:"<h1>Heading</h1>",
      syntax3:"<p>Some para 1</p>",
      syntax4:"<p>Some para 2</p>",
      syntax5:"<i> italic</i>",
      syntax6:"</section>",
    }],
    output:"../images/Tags/ContentSectioning/sectiontagO.png",
    description:"Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions."
  },
];
//```````````````````````````````````````````````//
export const InlineTextSemantics = [
  {
    element:"",
    syntax:"<a href=''>*****</a>",
    output:"",
    description1:"Together with its href attribute, creates a hyperlink to web pages, files, email ",
    description2:"addresses, locations within the current page, or anything else a URL can address.",
  },
  {
    element:"",
    syntax:"<b>***</b>",
    output:"",
    description1:"Used to draw the reader's attention to the element's contents, which are not ",
    description2:"otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the strong element.",
  },
  {
    element:"",
    syntax:"<br> or <br/> or <br></br>",
    output:"",
    description1:"Produces a line break in text (carriage-return). It is useful for writing a poem or an ",
    description2:"address, where the division of lines is significant.",
  },
  {
    element:"",
    syntax:"<i>***</i>",
    output:"",
    description1:"Represents a range of text that is set off from the normal text for some reason, such ",
    description2:"as idiomatic text, technical terms, and taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.",
  },
  {
    element:"",
    syntax:"<mark>***</mark>",
    output:"",
    description1:"	Represents text which is marked or highlighted for reference or notation purposes ",
    description2:"due to the marked passage's relevance in the enclosing context.",
  },
  {
    element:"",
    syntax:"<span>***</span>",
    output:"",
    description1:"A generic inline container for phrasing content, which does not inherently represent ",
    description2:"anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a div element, but div is a block-level element whereas a <span> is an inline-level element.",
  },
  {
    element:"",
    syntax:"<strong>***</strong>",
    output:"",
    description1:"Indicates that its contents have strong importance, seriousness, or urgency. Browsers ",
    description2:"typically render the contents in bold type.",
  },
  {
    element:"",
    syntax:"<sub>***</sub>",
    output:"",
    description1:"Specifies inline text which should be displayed as subscript for solely typographical ",
    description2:"reasons. Subscripts are typically rendered with a lowered baseline using smaller text.",
  },
  {
    element:"",
    syntax:"<sup>***</sup>",
    output:"",
    description1:"Specifies inline text which is to be displayed as superscript for solely typographical ",
    description2:"reasons. Superscripts are usually rendered with a raised baseline using smaller text.",
  },
  {
    element:"",
    syntax:"<u>***</u>",
    output:"",
    description1:"Represents a span of inline text which should be rendered in a way that indicates that ",
    description2:"it has a non-textual annotation. This is rendered by default as a simple solid underline but may be altered using CSS.",
  },
];
//```````````````````````````````````````````````//
export const ImageMultimedia = [
  {
    element:"",
    syntax:"<img src=''>",
    output:"",
    description1:"Embeds an image into the document. ",
    description2:"",
  },
  {
    element:"",
    syntax:"<audio>",
    output:"",
    description1:"Used to embed sound content in documents. It may contain one or more audio ",
    description2:"sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.",
  },
  {
    element:"",
    syntax:"<video>",
    output:"",
    description1:"Embeds a media player which supports video playback into the document. You can ",
    description2:"also use <video> for audio content, but the audio element may provide a more appropriate user experience.",
  },
];
//```````````````````````````````````````````````//
export const EmbeddedContent = [
  {
    element:"",
    syntax:"<iframe src=''> </iframe>",
    output:"",
    description1:"Represents a nested browsing context, embedding another HTML page into the ",
    description2:"current one.",
  },
  {
    element:"",
    syntax:"<object data=''> </object>",
    output:"",
    description1:"",
    description2:"",
  },
  {
    element:"",
    syntax:"<source src=''>",
    output:"",
    description1:"Specifies multiple media resources for the picture, the audio element, or the video ",
    description2:"element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.",
  },
];
//```````````````````````````````````````````````//
export const ScriptingTags = [
  {
    element:"",
    syntax:"<script>***</script>",
    output:"",
    description1:"	Used to embed executable code or data; this is typically used to embed or refer to ",
    description2:"JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.",
  },
  {
    element:"",
    syntax:"<noscript>***</noscript>",
    output:"",
    description1:"Defines a section of HTML to be inserted if a script type on the page is ",
    description2:"unsupported or if scripting is currently turned off in the browser.",
  },
  {
    element:"",
    syntax:"<canvas>",
    output:"",
    description1:"Container element to use with either the canvas scripting API or the WebGL API to ",
    description2:"draw graphics and animations.",
  },
];
//```````````````````````````````````````````````//
export const TableContent = [
  {
    element:"",
    syntax:"<table>",
    output:"",
    description1:"Represents tabular data — that is, information presented in a two-dimensional table ",
    description2:"comprised of rows and columns of cells containing data.",
  },
  {
    element:"",
    syntax:"<tr>",
    output:"",
    description1:"Defines a row of cells in a table. The row's cells can then be established using a mix ",
    description2:"of <td> (data cell) and <th> (header cell) elements.",
  },
  {
    element:"",
    syntax:"<th>",
    output:"",
    description1:"Defines a cell as a header of a group of table cells. The exact nature of this group is ",
    description2:"defined by the scope and headers attributes.",
  },
  {
    element:"",
    syntax:"<td>",
    output:"",
    description1:"Defines a cell of a table that contains data. It participates in the table model. ",
    description2:"",
  },
  {
    element:"",
    syntax:"<thead>",
    output:"",
    description1:"	Defines a set of rows defining the head of the columns of the table. ",
    description2:"",
  },
  {
    element:"",
    syntax:"<tbody>",
    output:"",
    description1:"Encapsulates a set of table rows (<tr> elements), indicating that they comprise the ",
    description2:"body of the table (<table>).",
  },
  {
    element:"",
    syntax:"<tfoot>",
    output:"",
    description1:"Defines a set of rows summarizing the columns of the table. ",
    description2:"",
  },
];
//```````````````````````````````````````````````//
export const FormsTags = [
  {
    element:"",
    syntax:"<form>",
    output:"",
    description1:"Represents a document section containing interactive controls for submitting ",
    description2:"information.",
  },
  {
    element:"",
    syntax:"<input>",
    output:"",
    description1:"Used to create interactive controls for web-based forms to accept data from the ",
    description2:"user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.",
  },
  {
    element:"",
    syntax:"<label>",
    output:"",
    description1:"Represents a caption for an item in a user interface. ",
    description2:"",
  },
  {
    element:"",
    syntax:"<button>",
    output:"",
    description1:"An interactive element activated by a user with a mouse, keyboard, finger, voice ",
    description2:"command, or other assistive technology. Once activated, it performs an action, such as submitting a form or opening a dialog.",
  },
  {
    element:"",
    syntax:"<fieldset>",
    output:"",
    description1:"Used to group several controls as well as labels (<label>) within a web form.",
    description2:"",
  },
  {
    element:"",
    syntax:"<datalist>",
    output:"",
    description1:"Contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.",
    description2:"",
  },
  {
    element:"",
    syntax:"<option>",
    output:"",
    description1:"Used to define an item contained in a select, an <optgroup>, or a <datalist> ",
    description2:"element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.",
  },
  {
    element:"",
    syntax:"<output>",
    output:"",
    description1:"Container element into which a site or app can inject the results of a calculation or ",
    description2:"the outcome of a user action.",
  },
  {
    element:"",
    syntax:"<select>",
    output:"",
    description1:"Represents a control that provides a menu of options.",
    description2:"",
  },
  {
    element:"",
    syntax:"<textarea>",
    output:"",
    description1:"Represents a multi-line plain-text editing control, useful when you want to allow ",
    description2:"users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.",
  },
  
];
//```````````````````````````````````````````````//
export const InteractiveElements = [
  {
    element:"",
    syntax:"<details> <summary>***</summary> **</details",
    output:"",
    description1:"Creates a disclosure widget in which information is visible only when the widget is ",
    description2:"toggled into an 'open' state. A summary or label must be provided using the <summary> element."
  },
  {
    element:"",
    syntax:"<summary>****</summary>",
    output:"",
    description1:"	Specifies a summary, caption, or legend for a details element's disclosure box. ",
    description2:"Clicking the <summary> element toggles the state of the parent <details> element open and closed."
  },
  {
    element:"",
    syntax:"<dialog>*****</dialog>",
    output:"",
    description1:"Represents a dialog box or other interactive component, such as a dismissible alert, ",
    description2:"inspector, or subwindow."
  },
];

// --------------------------------------------------------HTML TAGS------------------------------------------------------------------------//