<?php

    function toc($content) {

    preg_match_all('/<h([1-6])[^>]*>.*<\/h.>/',$content,$headings);

    $out = '<ul>';

    foreach($headings[0] as $k=>$h) {

            if(strstr($h,'id=') === false) {

                  $x = preg_replace('/>/',' id="head'.$k.'">',$h,1);

                  $content = str_replace($h,$x,$content);                  

                  $h = $x; 
            }         

            $link = preg_replace('/<(\/)?h\d/','<$1a',$h);

            $link = str_replace('id="','href="#',$link);

            if($k > 0 && $headings[1][$k-1] < $headings[1][$k]) {

                    $out .= '<ul>';
            } 

            $out .= '<li>'.$link; 

            if($headings[1][$k+1] && $headings[1][$k+1] < $headings[1][$k]) {

                    $out .= '</li></ul></li>';
            } 


            if($headings[1][$k+1] && $headings[1][$k+1] == $headings[1][$k]) {

                    $out .= '</li>';
            } 

    }//end foreach

    $out .= '</li></ul>';

    $toc = '<div id="toc">'.$out.'</div>'; 

    return str_replace('<div id="toc"></div>',$toc,$content);

  }

   ob_start('toc');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />  
  <title>Looping input.html through a PHP script to create the TOC.</title>
  <style type="text/css">
  html,body{font-family: helvetica,arial,verdana,sans-serif;}
  h2{color:#69c}
  .title{font-size: 240%;font-weight: bold}
  </style>
</head>
<body>
<center><span class="title">Generate a TOC using PHP(ob_start($callback))</span></center>
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
</body>
</html>
<?php ob_end_flush(); ?>