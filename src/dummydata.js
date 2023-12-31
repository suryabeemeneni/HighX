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

// ------------------------------------------------------- Home Page Cards --------------------------------------------------------------- //

export const HomeCards = [
  {
    link : '/htmlHome',
    imgsrc : "../images/HomeCards/html.jpg",
    h3 : "HTML",
    p1 : "In this curated compilation, we have gathered a diverse range of ",
    em : "HTML code snippets",
    p2 : " that showcase various functionalities and techniques"
  },
  {
    link : "/CSSHome",
    imgsrc : "../images/HomeCards/css.jpg",
    h3 : "CSS",
    p1 : "In this carefully curated compilation, we have gathered a wide array of ",
    em : "CSS code snippets",
    p2 : " that demonstrate the power and versatility of Cascading Style Sheets"
  },
  {
    link : "/JSHome",
    imgsrc : "../images/HomeCards/javascript.jpg",
    h3 : "JavaScript",
    p1 : "In this meticulously curated compilation, we have assembled a diverse range of ",
    em : "JavaScript code snippets",
    p2 : " that showcase the flexibility and power of this dynamic programming language"
  },
  {
    link : "/ReactHome",
    imgsrc : "../images/HomeCards/react.jpg",
    h3 : "React",
    p1 : "In this meticulously curated compilation, we have assembled a diverse range of ",
    em : "code snippets",
    p2 : " that showcase the power and flexibility of the React library"
  },
]
// --------------------------------------- React Home Cards-------------------------------------//


export const ReactHomeCardsOne = [
  {
    link : '/Homeprops',
    imgsrc : '../images/ReactHomeCards/props.png',
    title : 'Props',
    para : '25 items'
  },
]

export const ReactHomeCards = [
  {
    link : '/Usestate',
    imgsrc : '../images/ReactHomeCards/useState.jpg',
    title : 'useState',
    para : '25 Items'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/JSX.png',
    title : 'JSX',
    para : '1 Item'
  },
  {
    link : '/useeffect',
    imgsrc : '../images/ReactHomeCards/useEffect.jpg',
    title : 'useEffect',
    para : '25 Items'
  },
  {
    link : '/Homevalidation',
    imgsrc : '../images/ReactHomeCards/form.jpg',
    title : 'Login Forms',
    para : '15 Items'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/BCC.jpg',
    title : 'Back Ground Colour Changer',
    para : '1 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/CounterApp.png',
    title : 'Counter App',
    para : '1 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/useNavigate.jpg',
    title : 'useNavigate',
    para : '8 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/Calculator.gif',
    title : 'Calculator App',
    para : '1 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/Router.jpg',
    title : 'React Router',
    para : '4 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/Map.jpg',
    title : 'Map',
    para : '10 Item'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/Todo.png',
    title : 'Todo List App',
    para : '5 Item'
  },
  {
    link : '/UMV',
    imgsrc : '../images/ReactHomeCards/useStateForMV.png',
    title : 'useState With Multiple Values',
    para : '2 Items'
  },
  {
    link : '',
    imgsrc : '../images/ReactHomeCards/Api.jpg',
    title : 'API',
    para : '3 Items'
  },
  {
    link : '/ResponsiveCarouselHome',
    imgsrc : '../images/ReactHomeCards/Carousel.jpg',
    title : 'Carousel',
    para : '2 Items'
  },
  {
    link : '/APIHome',
    imgsrc : '../images/ReactHomeCards/BMS.png',
    title : 'Book My Show - Clone',
    para : '1 item'
  },
  // {
  //   link : '',
  //   imgsrc : '',
  //   title : '',
  //   para : ''
  // },
]

// ---------------------------------------------------------------About-------------------------------------------------------------------------//
export const ApplienceRepairHeading = [
  {
    title : "Welcome to Our Appliance Repair Services",
    subtitle : "Expert Repairs for Your Home Appliances",
    para : "we understand the importance of having well-functioning appliances in your home. When your appliances break down, it can disrupt your daily routine and cause unnecessary stress. That's where we come in – providing reliable and efficient appliance repair services to get your home running smoothly again."
  },
]
  export const ApplienceRepair = [
  {
    heading : 'Refrigerator Repair',
    para : 'A malfunctioning refrigerator can lead to spoiled food and inconvenience. Our skilled technicians are trained to diagnose and repair a wide range of refrigerator issues promptly.',
  },
  {
    heading : 'Washer and Dryer Repair',
    para : 'Laundry piling up? Our experts specialize in washer and dryer repairs, ensuring your laundry appliances are back in working order quickly.',
  },
  {
    heading : 'Oven and Range Repair',
    para : 'Cooking is a central part of daily life. If your oven or range is acting up, let us handle the repairs so you can get back to preparing delicious meals for your family.',
  },
  {
    heading : 'Dishwasher Repair',
    para : 'A malfunctioning dishwasher can lead to a pileup of dirty dishes. Our technicians can diagnose and fix common dishwasher problems efficiently.',
  },
  {
    heading : 'Microwave Repair',
    para : 'Is your microwave not heating or turning on? Our team can troubleshoot and repair microwave issues, restoring this essential kitchen appliance',
  },
]
// ```````````````````````````````````````//
export const ComputerRepairHeading = [
  {
    title : "Expert Computer Repair Services",
    subtitle : "Reliable Solutions for Your Computing Needs",
    para : "we understand the vital role computers play in your daily life. Whether you rely on your computer for work, education, or entertainment, a malfunctioning computer can be a major inconvenience. Our team of skilled technicians is here to provide efficient and effective computer repair services to keep your devices running smoothly."
  },
]
export const ComputerRepair = [
  {
    heading : 'Laptop Repair',
    para : 'Laptops are essential for both work and leisure. Our technicians specialize in diagnosing and fixing a variety of laptop issues, from hardware malfunctions to software glitches.',
  },
  {
    heading : 'Desktop Repair',
    para : 'If your desktop computer is experiencing issues such as slow performance, hardware failures, or software issues, our team is equipped to handle all types of desktop repairs.',
  },
  {
    heading : 'Virus and Malware Removal',
    para : 'Is your computer infected with viruses or malware? Our experts can perform thorough scans, remove malicious software, and implement security measures to protect your system.',
  },
  {
    heading : 'Hardware Upgrades',
    para : "Need to upgrade your computer's hardware for better performance? We can assess your current setup and recommend and install upgrades, such as RAM, storage, or graphics cards.",
  },
  {
    heading : 'Software Troubleshooting',
    para : 'Encountering software glitches, errors, or compatibility issues? Our technicians have the expertise to troubleshoot and resolve a wide range of software-related issues.',
  },
]
// ```````````````````````````````````````//
export const HomeCleaningHeading = [
  {
    title : "Professional Home Cleaning Services",
    subtitle : "Transforming Homes, One Clean at a Time",
    para : "We understand the importance of a clean and healthy living environment. Our team of dedicated cleaning professionals is here to provide comprehensive cleaning solutions tailored to meet your unique needs."
  },
]
export const HomeCleaning = [
  {
    heading : 'Regular Cleaning',
    para : 'Maintain a spotless home with our regular cleaning services. Our team will ensure that your living spaces are consistently clean, creating a comfortable and inviting atmosphere.',
  },
  {
    heading : 'Deep Cleaning',
    para : 'For a more thorough and detailed clean, choose our deep cleaning services. Ideal for occasional cleanups or before special events, our deep cleaning ensures every nook and cranny is pristine.',
  },
  {
    heading : 'Move-In/Move-Out Cleaning',
    para : "Planning to move? Our move-in/move-out cleaning services guarantee a fresh start. We'll leave your old or new home impeccably clean, so you can focus on the excitement of moving.",
  },
  {
    heading : 'Specialized Cleaning',
    para : 'We offer specialized cleaning services for specific areas such as kitchens, bathrooms, and more. Our attention to detail ensures that these spaces are not only clean but also sanitized.',
  },
]
// ```````````````````````````````````````//
export const HomeHelpHeading = [
  {
    title : "Home Help Services Tailored to Your Needs",
    subtitle : "Simplifying Your Life with Compassionate Support",
    para : "We provide dedicated home help services designed to make your daily life more manageable. Whether you need assistance with household tasks, companionship, or personal care, our team of caring professionals is here to support you every step of the way."
  },
]
export const HomeHelp = [
  {
    heading : 'Meal Preparation',
    para : 'Enjoy delicious and nutritious meals without the hassle. Our team can assist with meal planning, grocery shopping, and preparation, taking the stress out of daily cooking.',
  },
  {
    heading : 'Housekeeping',
    para : "Maintain a tidy and comfortable living space with our light housekeeping services. From dusting and vacuuming to organizing, we're here to help keep your home in order.",
  },
  {
    heading : 'Personal Care',
    para : 'For those who require personal care assistance, our compassionate team can provide support with bathing, grooming, dressing, and other personal hygiene needs.',
  },
]
// ```````````````````````````````````````//
export const HomeRepairHeading = [
  {
    title : "Expert Home Repair Services",
    subtitle : "Restoring Comfort and Functionality to Your Home",
    para : "From minor fixes to major renovations, our skilled team of professionals is dedicated to ensuring your home remains a safe and comfortable space for you and your family."
  },
]
export const HomeRepair = [
  {
    heading : 'Plumbing Repairs',
    para : 'Leaky faucets, clogged drains, or more extensive plumbing issues – our expert plumbers are equipped to handle a wide range of plumbing repairs, ensuring the efficient flow of water throughout your home.',
  },
  {
    heading : 'Electrical Repairs',
    para : 'Faulty wiring, electrical malfunctions, or the need for new installations – our licensed electricians provide reliable electrical repairs to keep your home safely powered.',
  },
  {
    heading : 'Carpentry and Woodwork',
    para : 'From repairing damaged woodwork to custom carpentry projects, our skilled carpenters can enhance the beauty and functionality of your home with precision and craftsmanship.',
  },
  {
    heading : 'Painting and Drywall Repair',
    para : 'Refresh the appearance of your home with our painting services, and trust our team to handle any drywall repairs needed to achieve a smooth and flawless finish.',
  },
  {
    heading : 'Roofing Repairs',
    para : 'Leaks, missing shingles, or general wear and tear on your roof – our roofing experts are here to address issues promptly, ensuring the protection of your home from the elements.',
  },
]
// ```````````````````````````````````````//
export const InteriorDesigningHeading = [
  {
    title : "Elevate Your Space with Our Interior Design Services",
    subtitle : "Transforming Dreams into Beautiful Living Spaces",
    para : "Our team of experienced interior designers is passionate about creating stunning and personalized spaces that reflect your style and enhance your lifestyle."
  },
]
export const InteriorDesigning = [
  {
    heading : 'Residential Design',
    para : 'Designing a home is a personal journey, and our residential interior design services are tailored to bring your vision to life. From concept to completion, we focus on creating spaces that are not only aesthetically pleasing but also functional and comfortable.',
  },
  {
    heading : 'Commercial Design',
    para : 'Make a lasting impression on clients and employees with our commercial interior design services. We blend form and function to create work environments that inspire creativity, productivity, and collaboration.',
  },
  {
    heading : 'Kitchen and Bathroom Design',
    para : 'The heart of the home deserves special attention. Our designers excel in crafting beautiful and efficient kitchen and bathroom spaces, combining style with practicality to meet your daily needs.',
  },
  {
    heading : 'Renovation and Remodeling',
    para : "Whether you're looking to update a single room or embark on a full-home renovation, our design and renovation experts will guide you through the process, ensuring a seamless transformation of your space.",
  },
  {
    heading : 'Custom Furniture',
    para : 'Add a unique touch to your space with custom-designed furniture and décor. Our team works with skilled craftsmen to create one-of-a-kind pieces that perfectly complement your interior design.',
  },
  
]
// ```````````````````````````````````````//
export const InvertorBatteriesHeading = [
  {
    title : "Reliable Inverters and Batteries for Uninterrupted Power",
    subtitle : "Powering Your Life with Trusted Energy Solutions",
    para : "We understand the importance of a reliable power supply, and our range of products is designed to ensure you have uninterrupted power for your home or business."
  },
]
export const InvertorBatteries = [
  {
    heading : 'Inverters',
    para : 'Discover a wide selection of inverters catering to different power needs. Whether you need a small inverter for your home or a robust system for your business, our range includes the latest models with advanced features for efficient power conversion.',
  },
  {
    heading : 'Batteries',
    para : 'Power your inverters with our range of durable and long-lasting batteries. We offer various types, including lead-acid and maintenance-free batteries, to suit your specific requirements. Our batteries are known for their reliability and optimal performance.',
  },
]
// ```````````````````````````````````````//
export const KitchenApplienceRepairHeading = [
  {
    title : "Professional Kitchen Appliance Repair Services",
    subtitle : "Keeping Your Kitchen Running Smoothly",
    para : "We understand the importance of a fully functional kitchen, and our skilled technicians are here to ensure your appliances are in top-notch condition, allowing you to enjoy the heart of your home."
  },
]
export const KitchenApplienceRepair = [
  {
    heading : 'Refrigerator Repair',
    para : 'Is your refrigerator not cooling properly or making strange noises? Our technicians specialize in diagnosing and repairing a variety of refrigerator issues to keep your perishables fresh.',
  },
  {
    heading : 'Oven and Stove Repair',
    para : 'From temperature inconsistencies to faulty burners, our experts can handle oven and stove repairs promptly. Enjoy hassle-free cooking with our reliable repair services.',
  },
  {
    heading : 'Dishwasher Repair',
    para : 'Experiencing leaks, drainage problems, or issues with dishwashing cycles? Let our technicians troubleshoot and repair your dishwasher, restoring its efficiency.',
  },
  {
    heading : 'Microwave Repair',
    para : 'If your microwave is not heating or turning on, our technicians can identify the problem and provide efficient repair services, ensuring your quick and easy meal preparations.',
  },
]
// ```````````````````````````````````````//
export const MobileTabletRepairHeading = [
  {
    title : "Expert Mobile and Tablet Repair Services",
    subtitle : "Your Trusted Partner for Quick and Reliable Repairs",
    para : "Our dedicated team of technicians is committed to providing top-notch repair services, ensuring your devices are back in optimal condition."
  },
]
export const MobileTabletRepair = [
  {
    heading : 'Mobile Phone Repairs',
    para : "From cracked screens to battery replacements, our technicians are skilled in repairing a variety of mobile phone issues. We work with popular brands and models to restore your phone's functionality.",
  },
  {
    heading : 'Tablet Repairs',
    para : "Whether your tablet has a damaged display, charging issues, or software problems, our experts can diagnose and repair a wide range of tablet issues, bringing your device back to life.",
  },
  {
    heading : 'Screen Replacements',
    para : 'If your mobile phone or tablet has a cracked or shattered screen, our technicians can perform professional screen replacements using high-quality parts to restore visual clarity.',
  },
  {
    heading : 'Battery Replacements',
    para : 'Experiencing rapid battery drain or difficulty holding a charge? Our battery replacement services ensure your mobile devices have a reliable power source for everyday use.',
  },
  {
    heading : 'Software',
    para : 'From software glitches to operating system issues, our technicians can troubleshoot and resolve a variety of software-related problems on both mobile phones and tablets.',
  },
]
// ```````````````````````````````````````//
export const PackersMoversHeading = [
  {
    title : "Efficient Packers and Movers Services",
    subtitle : "Making Your Move Hassle-Free and Seamless",
    para : "Whether you're moving locally or across long distances, our experienced team of packers and movers is dedicated to ensuring a smooth and seamless transition to your new home."
  },
]
export const PackersMovers = [
  {
    heading : 'Residential Moving',
    para : 'We understand that moving homes can be a challenging task. Our residential moving services are designed to handle every aspect of your move, from packing and loading to transportation and unpacking.',
  },
  {
    heading : 'Commercial Relocation',
    para : 'Moving your business? Our expert packers and movers specialize in efficient and organized commercial relocations. We minimize downtime, ensuring your business operations resume quickly in the new location.',
  },
  {
    heading : 'Local and Long-Distance Moves',
    para : "Whether you're moving across the street or to a different state, our team is equipped to handle local and long-distance moves with precision and care.",
  },
  {
    heading : 'Packing and Unpacking',
    para : 'Leave the packing and unpacking to us. Our professional packers use high-quality materials to secure your belongings, ensuring they arrive at your new destination in excellent condition.',
  },
  {
    heading : 'Furniture and Specialty Item Moving',
    para : 'From heavy furniture to delicate specialty items, we have the expertise and equipment to move your belongings safely. Our team ensures the proper handling and transportation of all your possessions.',
  },
]
// ```````````````````````````````````````//
export const PestControlHeading = [
  {
    title : "Effective Pest Control Solutions for a Pest-Free Environment",
    subtitle : "Protecting Your Home and Business from Unwanted Guests",
    para : "Our experienced team of pest control professionals is committed to safeguarding your home or business from the challenges posed by pests."
  },
]
export const PestControl = [
  {
    heading : 'Residential Pest Control',
    para : 'Our residential pest control services are designed to create a safe and comfortable living environment for you and your family. We address common household pests, including ants, rodents, spiders, and more, ensuring your home remains pest-free.',
  },
  {
    heading : 'Commercial Pest Management',
    para : 'Protect your business and reputation with our commercial pest management services. We work with businesses of all sizes to implement tailored pest control solutions that meet industry regulations and standards.',
  },
  {
    heading : 'Rodent and Wildlife Removal',
    para : 'Rodents and wildlife can pose health risks and property damage. Our experts employ humane and effective methods to remove unwanted guests and implement preventive measures to keep them from returning.',
  },
]


// -------------------------------------------- GHCone -----------------------------------------------------------------------//

export const GHCone = [
  {
    h5 : 'GitHub for Windows',
    p : 'htps://windows.github.com'
  },
  {
    h5 : 'GitHub for Mac',
    p : 'htps://mac.github.com'
  },
  {
    h5 : '',
    p : 'For Linux and Solaris platforms, the latest release is available on the official Git web site.'
  },
  {
    h5 : 'Git for All Platforms',
    p : 'htp://git-scm.com'
  }
]
// ````````````````````````````````````````````````//
export const GHCCont = [
  {
    h3 : 'Create a new repository',
    p1 : 'A repository contains all project files, including the revision history. Already have a project repository elsewhere?',
    sub : [
      {
        h5 : 'Public'  ,
        p : 'Anyone on the internet can see this repository. You choose who can commit.',
      },
      {
        h5 : 'Private'  ,
        p : 'You choose who can see and commit to this repository.',
      },
    ],
  },
  {
    h3 : 'SETUP',
    p1 : 'Configuring user information used across all local repositories',
    sub : [
      {
        h5 : 'git config --global user.name “[firstname lastname]”'  ,
        p : 'set a name that is identifiable for credit when review version history',
      },
      {
        h5 : 'git config --global user.email “[valid-email]”'  ,
        p : 'set an email address that will be associated with each history marker',
      },
    ],
  },
  {
    h3 : 'SETUP & INIT',
    p1 : 'Configuring user information, initializing and cloning repositories',
    sub : [
      {
        h5 : 'git init'  ,
        p : 'initialize an existing directory as a Git repository',
      },
      {
        h5 : 'git clone [url]'  ,
        p : 'retrieve an entire repository from a hosted location via URL',
      },
    ],
  },
  {
    h3 : 'STAGE & SNAPSHOT',
    p1 : 'Working with snapshots and the Git staging area',
    sub : [
      {
        h5 : 'git status'  ,
        p : 'show modified files in working directory, staged for your next commit',
      },
      {
        h5 : 'git add [file]'  ,
        p : 'add a file as it looks now to your next commit (stage)',
      },
      {
        h5 : 'git commit -m “[descriptive message]”'  ,
        p : 'commit your staged content as a new commit snapshot',
      },
    ],
  },
  {
    h3 : 'BRANCH & MERGE',
    p1 : 'Isolating work in branches, changing context, and integrating changes',
    sub : [
      {
        h5 : 'git branch'  ,
        p : 'list your branches. a * will appear next to the currently active branch',
      },
      {
        h5 : 'git branch [branch-name]'  ,
        p : 'create a new branch at the current commit',
      },
      // {
      //   h5 : 'git checkout'  ,
      //   p : 'switch to another branch and check it out into your working directory',
      // },
      {
        h5 : 'git merge [branch]'  ,
        p : 'merge the specified branch’s history into the current one',
      },
      {
        h5 : 'git log'  ,
        p : 'show all commits in the current branch’s history',
      },
    ],
  },
  {
    h3 : 'SHARE & UPDATE',
    p1 : 'Retrieving updates from another repository and updating local repos',
    sub : [
      {
        h5 : 'git pull'  ,
        p : 'fetch and merge any commits from the tracking remote branch',
      },
      {
        h5 : 'git push [alias] [branch]'  ,
        p : 'Transmit local branch commits to the remote repository branch',
      },
    ],
  },
  {
    h3 : 'TEMPORARY COMMITS',
    p1 : 'Temporarily store modified, tracked files in order to change branches',
    sub : [
      {
        h5 : 'git stash dro'  ,
        p : 'discard the changes from top of stash stack',
      },
      {
        h5 : 'git stash'  ,
        p : 'Save modified and staged changes',
      },
      {
        h5 : 'git stash pop'  ,
        p : 'write working from top of stash stack',
      },
      // {
      //   h5 : 'git stash list'  ,
      //   p : 'list stack-order of stashed file changes',
      // },
    ],
  },
  
  // {
  //   h3 : '',
  //   p1 : '',
  //   sub : [
  //     {
  //       h5 : ''  ,
  //       p : '',
  //     },
  //     {
  //       h5 : ''  ,
  //       p : '',
  //     },
  //   ],
  // },
]

// -------------------------------------------------------------------------------------------------------------------------- //
export const JSTopics = [
  {
    link : '',
    imgsrc : '../images/JavaScript/variables.jpg',
    h3 : 'Variables',
    para : [
      {p : '‣ Variables are Containers for Storing Data'},
      {p : '‣ JavaScript Variables can be declared in 4 ways:'},
      {p : '1. Automatically '},
      {p : '2. Using var'},
      {p : '3. Using let'},
      {p : '4. Using const'}
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/datatypes.jpg',
    h3 : 'Data Types',
    para : [
      {p : '‣ JavaScript provides different data types to hold different types of values.'},
      {P : 'There are two types of data types in JavaScript.'},
      {p : '1. Primitive data type'},
      {p : '2. Non-primitive (reference) data type'},
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/operators.jpg',
    h3 : 'Operators',
    para : [
      {p : '‣ JavaScript operators are symbols that are used to perform operations on operands.'},
      {p : '1. Assignment Operators'},
      {p : '2. Arithmetic Operators'},
      {p : '3. Comparison (Relational) Operators'},
      {p : '4. Logical Operators'},
      {p : '5. Bitwise Operators'},
      {p : '6. String Operators'},     
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/typeConversion.jpg',
    h3 : ' Type Conversions',
    para : [
      {p : '‣ In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.'},
      {p : '1. Implicit Conversion - automatic type conversion'},
      {p : '2. Explicit Conversion - manual type conversion'},      
  ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/conditionalStatements.png',
    h3 : 'conditional statements',
    para : [
      {p : '‣ Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition'},
      {p : '1. If statement'},
      {p : '2. else statement'},
      {p : '3. else if statement'},
      {p : '4. switch statement'},
      {p : '5. Ternary Operator'}
      
    ]
  },
    {
    link : '',
    imgsrc : '../images/JavaScript/loops.jpg',
    h3 : ' Loops ',
    para : [
      {p : '‣ Loops offer a quick and easy way to do something repeatedly.'},
      {p : '● For, for in, for of, Break, try-catch, continue, block'},
      {p : '●  While, do while.'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/functions.png',
    h3 : 'Functions',
    para : [
      {p : '‣ JavaScript function is a set of statements that take inputs, do some specific computation, and produce output.'},
      {p : ''},
      {p : 'Function declaration'},
      {p : 'Function Expression'},
      {p : 'Arrow Function'},
      {p : 'immediate invoked'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/objects.jpg',
    h3 : 'Objects',
    para : [
      {p : '‣ A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.'},
      {p : '‣ JavaScript is an object-based language. Everything is an object in JavaScript.'},
      {p : "‣ JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects'"},
      {p : ' Definition, Methods, Constructors, Accessors'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/array.jpg',
    h3 : ' Arrays',
    para : [
      {p : '‣ JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed. Javascript Arrays are not associative in nature.'},
      {p : ' Array Methods'},
      {p : 'Array sort'},
      {p : 'Array iteration'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/events.jpg',
    h3 : 'Events',
    para : [
      {p : '‣ Javascript has events to provide a dynamic interface to a webpage. These events are hooked to elements in the Document Object Model(DOM). '},
      {p : '● mouse events : mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu'},
      {p : '● touch events : touchstart, touchmove, touchend, touchcancel.'},
      {p : '● keyboard events: keydown, keypress, keyup. form events: focus, blur, change, submit.'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/numbers.jpg',
    h3 : 'Numbers',
    para : [
      {p : '‣ The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point. JavaScript number object follows IEEE standard to represent the floating-point numbers.'},
      {p : ''},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/string.jpg',
    h3 : 'String',
    para : [
      {p : '‣ The String object is used to represent and manipulate a sequence of characters.'},
      {p : '1. methods'},
      {p : '2. Search'},
      {p : '3. Templates'},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/scopenclouser.jpg',
    h3 : 'Scope & Clouser',
    para : [
      {p : '‣ A scope can be defined as the region of the execution, a region where the expressions and values can be referenced.'},
      {p : '● Global Scope'},
      // {p : ': In the global scope, the variable can be accessed from any part of the JavaScript code.'},
      {p : '● Local Scope'},
      // {p : ': In the local scope, the variable can be accessed within a function where it is declared.'},
      {p : '● Block'},
      
      // {p : '‣ Closures allow a function to access variables from its enclosing scope, even after that scope has finished executing.'},
      {p : '‣ Closure is created when a child function keep the environment of the parent scope even after the parent function has already executed '},
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/hoisting.png',
    h3 : 'Hoisting',
    para : [
      {p : "‣ In JavaScript, hoisting allows you to use functions and variables before they're declared"},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/get&set.jpg',
    h3 : 'Get method & Set method',
    para : [
      {p : '‣ The Set object lets you store unique values of any type, whether primitive values or object references.'},
      {p : '‣ The get syntax binds an object property to a function that will be called when that property is looked up. '},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/this.png',
    h3 : '',
    para : [
      {p : "‣ The 'this' keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assign values to object properties"},
      // {p : '‣ “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object. If the function that is being referenced is a method in an object, “this” references the object itself.'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/modules.jpg',
    h3 : 'Modules',
    para : [
      {p : '‣ As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.'},
      {p : "‣ Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc. Let's see an example"},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/debugging.png',
    h3 : 'Debugging',
    para : [
      {p : "‣ Sometimes a code may contain certain mistakes. Being a scripting language, JavaScript didn't show any error message in a browser. But these mistakes can affect the output."},
      {p : 'The best practice to find out the error is to debug the code. The code can be debugged easily by using web browsers like Google Chrome, Mozilla Firebox.'},     
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/reserved.jpg',
    h3 : 'Reserved Key Words',
    para : [
      {p : '‣ In JavaScript, you cannot use these reserved words as variable names, label names, or function names.'},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/setMap.jpg',
    h3 : 'Sets and Maps',
    para : [
      {p : '‣ In JavaScript, Set and Map are two types of objects that are used for storing data in an ordered manner.'},
      {p : '‣ Both these data structures are used to store distinct types of data inside the same object.'},
      {p : '‣ In Maps, the data is stored as a key-value pair whereas in Set data is a single collection of values that are unique.'},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/json.jpg',
    h3 : ' JSON',
    para : [
      {p : '‣ The JavaScript JSON is an acronym of JavaScript Object Notation. It provides a format for storing and transporting data. It is a lightweight human readable collection of data that can be accessed in a logical manner.'},
      {p : '● It generates and stores the data from user input.'},
      {p : '● It can transport the data from the server to client, client to server, and server to server.'},
      {p : '● It can also build and verifying the data.'},
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/asyncawait.png',
    h3 : 'Async/Await',
    para : [           
      {p : '‣ Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.'}, 
      {p : '‣ "async and await make promises easier to write"'},
      {p : '● async makes a function return a Promise'},
      {p : '● await makes a function wait for a Promise'},
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/callback.png',
    h3 : 'Call-back',
    para : [
      {p : '‣ A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.'},
      {p : 'syntax : (x) => x >= 0'},      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/class.png',
    h3 : 'Class',
    para : [
      {p : '‣ Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.'},
      {p : '● A class is a type of object template.'},
      {p : '● The class statement initiates a JavaScript class.'},
      {p : '● Properties and methods are assigned in the constructor() method.'},
      {p : '● The constructor() method is called each time a class object is initialized.'},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/strict1.jpg',
    h3 : 'Strict Mode JS',
    para : [
      {p : "‣ In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. "},
      {p : '‣ Being a scripting language, sometimes the JavaScript code displays the correct result even it has some errors. To overcome this problem we can use the JavaScript strict mode.'},
      {p : '‣ The JavaScript provides "use strict"; expression to enable the strict mode. If there is any silent error or mistake in the code, it throws an error.'},
      {p : ''},
      
    ]
  },
  {
    link : '',
    imgsrc : '../images/JavaScript/dom.jpg',
    h3 : 'JavaScript DOM',
    para : [
      {p : '‣ The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.'},
      {p : ''},
      {p : ''},
      {p : ''},
      
    ]
  },
  // {
  //   link : '',
  //   imgsrc : '../images/JavaScript/.jpg',
  //   h3 : '',
  //   para : [
  //     {p : ''},
  //     {p : ''},
  //     {p : ''},
  //     {p : ''},
      
  //   ]
  // },
];
// ----------------------------------------------------------------------------------------------------------//
export const coursesCard = [
  {
    id: 1,
    cover: "../images/courses/c1.png",
    coursesName: "Introducing to Software Engineering",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by John Smith",
        totalTime: "50 lectures (190 hrs)",
      },
    ],
    priceAll: "$100 All Course",
    pricePer: "$15 per month",
  },
  {
    id: 2,
    cover: "../images/courses/c2.png",
    coursesName: "Enhancing Adobe Photoshop CC 2020 Skills",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Ram Gurung",
        totalTime: "30 lectures (125 hrs)",
      },
    ],
    priceAll: "$200 All Course",
    pricePer: "$25 per month",
  },
  {
    id: 3,
    cover: "../images/courses/c3.png",
    coursesName: "HTML, CSS, and Javascript for Web Developers",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Saroj Nepal",
        totalTime: "50 lectures (50 hrs)",
      },
    ],
    priceAll: "$50 All Course",
    pricePer: "$5 per month",
  },
  {
    id: 4,
    cover: "../images/courses/c4.png",
    coursesName: "Introducing to Programming with WordPress",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Prabin Thapa Mager",
        totalTime: "20 lectures (20 hrs)",
      },
    ],
    priceAll: "$30 All Course",
    pricePer: "$3 per month",
  },
  {
    id: 5,
    cover: "../images/courses/c5.png",
    coursesName: "Introducing to Programming with ReactJS",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Sunil Bishowkaram",
        totalTime: "100 lectures (150 hrs)",
      },
    ],
    priceAll: "$300 All Course",
    pricePer: "$30 per month",
  },
  {
    id: 6,
    cover: "../images/courses/c6.png",
    coursesName: "Learn Frontend Programming Language",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Sunil Bishowkaram",
        totalTime: "200 lectures (300 hrs)",
      },
    ],
    priceAll: "$500 All Course",
    pricePer: "$80 per month",
  },
  {
    id: 7,
    cover: "../images/courses/c7.png",
    coursesName: "Introducing to with HTML / CSS",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Price",
        totalTime: "20 lectures (50 hrs)",
      },
    ],
    priceAll: "$20 All Course",
    pricePer: "$2 per month",
  },
  {
    id: 8,
    cover: "../images/courses/c8.png",
    coursesName: "Introducing to with JAVA",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Petter",
        totalTime: "80 lectures (200 hrs)",
      },
    ],
    priceAll: "$200 All Course",
    pricePer: "$40 per month",
  },
  {
    id: 9,
    cover: "../images/courses/c9.png",
    coursesName: "Introducing to with HTML / CSS / JAVASCRIPT",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Petter",
        totalTime: "50 lectures (50 hrs)",
      },
    ],
    priceAll: "$20 All Course",
    pricePer: "$3 per month",
  },
];
export const online = [
  {
    cover:
      "https://media.istockphoto.com/id/1256852529/vector/washing-machine-repair-service-vector-illustration-in-flat-style-plumbing-services-household.jpg?s=612x612&w=0&k=20&c=RvyhNc0zJWZA7TF-pTTm0tMijYMB9WjphTi5WAnjb6M=",
    hoverCover:
      "https://media.istockphoto.com/id/1256852529/vector/washing-machine-repair-service-vector-illustration-in-flat-style-plumbing-services-household.jpg?s=612x612&w=0&k=20&c=RvyhNc0zJWZA7TF-pTTm0tMijYMB9WjphTi5WAnjb6M=",
    courseName: "Applience Repair",
  },
  {
    cover:
      "https://static.vecteezy.com/system/resources/previews/016/223/089/non_2x/computer-and-laptop-repair-logo-template-icon-illustration-design-vector.jpg",
    hoverCover: "https://static.vecteezy.com/system/resources/previews/016/223/089/non_2x/computer-and-laptop-repair-logo-template-icon-illustration-design-vector.jpg",
    courseName: "Computer Repair",
  },
  {
    cover: "https://static.vecteezy.com/system/resources/previews/004/590/847/non_2x/clean-house-icon-home-wash-cleaning-house-simple-design-editable-design-template-vector.jpg",
    hoverCover: "https://static.vecteezy.com/system/resources/previews/004/590/847/non_2x/clean-house-icon-home-wash-cleaning-house-simple-design-editable-design-template-vector.jpg",
    courseName: "Home Cleaning",
  },
  {
    cover: "https://static.vecteezy.com/system/resources/previews/005/863/334/non_2x/home-office-icon-concept-man-working-on-computer-in-the-house-illustration-isolated-on-white-background-free-vector.jpg",
    hoverCover: "https://static.vecteezy.com/system/resources/previews/005/863/334/non_2x/home-office-icon-concept-man-working-on-computer-in-the-house-illustration-isolated-on-white-background-free-vector.jpg",
    courseName: "Home Help",
  },
  {
    cover: "https://www.freeiconspng.com/uploads/home-repair-service-icon-32.jpg",
    hoverCover: "https://www.freeiconspng.com/uploads/home-repair-service-icon-32.jpg",
    courseName: "Home Repair",
  },
  {
    cover: "https://img.freepik.com/premium-photo/interior-design-with-living-room-black-line-sketch-with-shadows-white-texture-paper-illustration_263512-1760.jpg?w=2000",
    hoverCover: "https://img.freepik.com/premium-photo/interior-design-with-living-room-black-line-sketch-with-shadows-white-texture-paper-illustration_263512-1760.jpg?w=2000",
    courseName: "Interior Designing",
  },
  {
    cover: "https://static.vecteezy.com/system/resources/previews/025/086/527/non_2x/inverter-battery-icon-in-gray-and-white-color-vector.jpg",
    hoverCover: "https://static.vecteezy.com/system/resources/previews/025/086/527/non_2x/inverter-battery-icon-in-gray-and-white-color-vector.jpg",
    courseName: "Invertor & Batteries",

  },
  {
    cover: "https://media.istockphoto.com/id/1401398136/vector/kettle-on-gas-stove-sketch-vector.jpg?s=612x612&w=0&k=20&c=sr8dcccIkpFZkCvOVML5oidDjMJIwHJd4dH3RyxZkic=",
    hoverCover: "https://media.istockphoto.com/id/1401398136/vector/kettle-on-gas-stove-sketch-vector.jpg?s=612x612&w=0&k=20&c=sr8dcccIkpFZkCvOVML5oidDjMJIwHJd4dH3RyxZkic=",
    courseName: "Kitchen Applience Repair ",
  },
  {
    cover: "https://img.freepik.com/premium-vector/mobile-phone-repair-shop-disassembly-information-cell-phones-service-guide-wrench-icon-vector-illustration_642540-114.jpg?w=2000",
    hoverCover: "https://img.freepik.com/premium-vector/mobile-phone-repair-shop-disassembly-information-cell-phones-service-guide-wrench-icon-vector-illustration_642540-114.jpg?w=2000",
    courseName: "Mobile & Tablet Repair",
  },
  {
    cover: "https://www.clipartkey.com/mpngs/m/140-1407042_movers-and-packers-icon.png",
    hoverCover: "https://www.clipartkey.com/mpngs/m/140-1407042_movers-and-packers-icon.png",
    courseName: "Packers & Movers",
  },
  {
    cover: "https://img.freepik.com/premium-vector/pest-control-icon-set-silhouettes-about-fight-against-cockroaches_703715-179.jpg?w=2000",
    hoverCover: "https://img.freepik.com/premium-vector/pest-control-icon-set-silhouettes-about-fight-against-cockroaches_703715-179.jpg?w=2000",
    courseName: "Pest Control",
  },

];
export const team = [
  {
    cover: "./images/team/t1.webp",
    name: "Sanjiv",
    work: "DEVELOPER AND LEAD INSTRUCTOR",
  },
  {
    cover: "./images/team/t2.webp",
    name: "Devraj",
    work: "DEVELOPER",
  },
  {
    cover: "./images/team/t3.webp",
    name: "Naya",
    work: "DEVELOPER",
  },
  {
    cover: "./images/team/t4.webp",
    name: "Nikhel",
    work: "DEVELOPER",
  },
  {
    cover: "./images/team/t5.jpg",
    name: "Aarna",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t6.jpg",
    name: "Farookh",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t7.jpg",
    name: "Kavi",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t8.jpg",
    name: "Ekalinga",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t9.jpg",
    name: "Ananya",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t10.jpg",
    name: "Anjali",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t11.jpg",
    name: "Shiv Nadar",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t12.jpg",
    name: "Narayana Murthy",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t13.jpg",
    name: "Arjun",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t14.jpg",
    name: "Aadhya",
    work: "Jr.DEVELOPER",
  },
  {
    cover: "./images/team/t15.jpg",
    name: "Saanvi",
    work: "Jr.DEVELOPER",
  },
];
export const price = [
  {
    name: "BASIC PLAN",
    price: "49K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "BEGINNER PLAN",
    price: "79K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "PREMIUM PLAN",
    price: "109k",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "ULTIMATE PLAN",
    price: "149K",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];
export const faq = [
  {
    title: "How to Enroll This Online Courses?",
    desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Where It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How to Enroll This Online Courses?",
    desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Where It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How It is hidden by default, until the collapse?",
    desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];
export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 18, 2021",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b1.webp",
  },
  {
    id: 2,
    type: "admin",
    date: "API. 25, 2022",
    com: "5 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b2.webp",
  },
  {
    id: 3,
    type: "user",
    date: "MAY. 15, 2022",
    com: "10 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b3.webp",
  },
  {
    id: 4,
    type: "admin",
    date: "JAN. 02, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b4.webp",
  },
  {
    id: 5,
    type: "admin",
    date: "DEC. 14, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b5.webp",
  },
  {
    id: 6,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b6.webp",
  },
];
export const testimonal = [
  {
    id: 1,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t1.webp",
  },
  {
    id: 2,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t2.webp",
  },
  {
    id: 3,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t3.webp",
  },
];
