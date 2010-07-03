/* Create TOC */          
(function(){

             var headings = [];

             var heregexp = /h\d/i;

             var count = 0;

             var elems = document.getElementsByTagName('*');
                 
                 for(var i=0;i<elems.length;i++) {

                         var curr = elems[i];

                         var id = curr.id;

                             if(heregexp.test(curr.nodeName)) {

                                    if(curr.id == '') {

                                         id = 'head'+count;

                                         curr.id = id;

                                         count++;  

                                    }//end if

                                    headings.push(curr);

                             }//end if
                 }//endfor


                 var out = '<ul>';

                 for(i=0;i<headings.length;i++) {

                     var weight = headings[i].nodeName.substr(1,1);

                         if(weight > oldweight) {

                             out += '<ul>';
                         }

                         out += '<li><a href="#'+headings[i].id+'">'+headings[i].innerHTML+'</a>';

                         if(headings[i+1]) {

                                var nextweight = headings[i+1].nodeName.substr(1,1);

                                if(weight > nextweight) {

                                     out += '</li></ul></li>';
                                } 

                                if(weight == nextweight) {

                                     out += '</li>'; 
                                }
                         }//endif

                         var oldweight = weight;

                 }//end for

                 out += '</li></ul>'; 

                 document.getElementById('toc').innerHTML += out;

})();//do Exec