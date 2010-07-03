<?php

    $file = $_GET['file'];

    if(preg_match('/\.[a-zA-Z0-9\-\_]*$/',$file)) {

    $content = file_get_contents($file);

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

    $toc = '<div id="toc"><span id="contentheader">hide page contents</span>'.$out.'</div>';

    echo str_replace('<div id="toc"><span id="contentheader">hide page contents</span></div>',$toc,$content);

    } else {

        echo'Please give me a valid filename. ex: filename.html';

        exit; 
    }
?>