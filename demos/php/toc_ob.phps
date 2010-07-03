<?php

  function toc($content) {

     preg_match_all("/<h([1-6])[^>]*>.*<\/h.>/Us",$content,$headlines);

     $out = '<ul>';

     foreach($headlines[0] as $k=>$h) {

           if(strstr($h,'id') === false) {

               $x = preg_replace('/>/',' id="head'.$k.'">',$h,1);  

               $content = str_replace($h,$x,$content); 

               $h = $x; 
           }

           $link = preg_replace('/<(\/)?h\d/','<$1a',$h);  

           $link = str_replace('id="','href="#',$link);   

           if($k > 0 && $headlines[1][$k-1] < $headlines[1][$k]) {

                     $out .= '<ul>';
           } 
           
           $out .= '<li>'.$link.'';  

           if($headlines[1][$k+1] && $headlines[1][$k+1] < $headlines[1][$k]) {

                 $out .= '</li></ul></li>';
           }

           if($headlines[1][$k+1] && $headlines[1][$k+1] == $headlines[1][$k]) {

                 $out .= '</li>';
           }
     } 

     $out .= '</li></ul>';

     $out = '<div id="toc">'.$out.'</div>'; 

     return str_replace('<div id="toc"></div>',$out,$content);

  }//end function


  ob_start('toc');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Using the PHP ob_start($callback) output buffer to create the TOC</title>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />  
  <link rel="stylesheet" href="http://yui.yahooapis.com/2.7.0/build/base/base.css" type="text/css">
</head>
<body>
<div id="toc"></div>
<h1>Cute things on the interwebs</h1>
<h2 id="rabbits">Rabbits</h2>
<h2 id="puppies">Puppies</h2>
<h3 id="labs">Labradors</h3>
<h3 id="alsatians">Alsatians</h3>
<h3 id="corgies">Corgies</h3>
<h3 id="retrievers">Retrievers</h3>
<h2 id="kittens">Kittens</h2>
<h2 id="gerbils">Gerbils</h2>
<h2 id="ducklings">ducklings</h2>
</body>
</html>


<?php ob_end_flush(); ?>