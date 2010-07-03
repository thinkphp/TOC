<?php

   $file = $_GET['file'];

   if(preg_match('/\.[a-zA-Z0-9]+$/i',$file)) {

     $content = file_get_contents($file);     

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

     echo str_replace('<div id="toc"></div>',$out,$content);

   } else {

     echo'Only files in this format *.html';

     exit;   
   }

?>