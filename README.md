TOC
===

TOC is a MooTools Plugin which turn a list of HTML headings into a Table of Content.

![Screenshot](http://farm5.static.flickr.com/4117/4757170244_07f03e67e9_b.jpg)

 
How to Use
----------

TOC can be initialized an any time, but will most likely be initialized at DOMReady.


First you must to include the JS files in the head of your HTML document.
       
     #HTML
     <script type="text/javascript" src="mootools-core.js"></script>
     <script type="text/javascript" src="toc.js"></script>

In your JavaScript code:

     #JS
     window.addEvent('domready',function(){
        var toc = new TOC('toc');
     }); 

In your HTML code:

     #HTML
     <div id="toc"></div>
     <h1>Unobtrusive JavaScript</h1>
     <h2>Operation Cleanout</h2>
     <h3>Never, under any circumstances add JavaScript directly to the document</h3>
     <h3>JavaScript is an enhancement, not a secure functionality</h3>
     <h3>Check the availability of the object before accessing it</h3>
     <h3>Create JavaScript, not browser specific dialects</h3>
     <h3>Don't hijack other script's variables</h3>
     <h3>Keep effects mouse independent</h3>
     <h2>Reach what you want to change</h2>
     <h3>Function to reach an element in the page</h3>
     <h3>Tool to navigate from a certain element</h3>
     <h3>Attributes and functions for elements</h3>
     <h2>Creating and destroying elements</h2>
     <h3>createElement(element)</h3>
     <h3>createTextNode(string)</h3>
     <h3>setAttribute(attribute,value)</h3>
     <h3>appendChild(child)</h3>
     <h3>cloneNode</h3>
     <h3>hasChildNodes()</h3>
     <h3>insertBefore(newChild,oldChild)</h3>
     <h3>removeChild(oldChild)</h3>
     <h3>replaceChild(newChild,oldChild)</h3>
     <h3>removeAttribute(attribute)</h3>
     <h2>Separated JS and CSS</h2>
     <h3>Our mistake</h3>
     <h3>Applying classes via JavaScript</h3>
     <h3>Multiple classes syntax</h3>
     <h2>Useful links</h2>
     <h3>http://www.w3.org/DOM</h3>
     <h3>Quirksmode.org</h3>
     <h3>The W3C DOM specification (http://www.w3.org/DOM/)</h3>
     <h3>http://www.scottandrew.com/weblog/jsjunk#events</h3> 