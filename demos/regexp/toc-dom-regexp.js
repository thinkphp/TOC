/* Create TOC using RegExp*/          
(function(){

     var bd = document.body,

         x = bd.innerHTML,

         headings = x.match(/<h\d[^>]*>[\S\s]*?<\/h\d>/ig),

         r1 = />/, r2 = /<(\/)?(h|H)(\d)/g,
        
         toc = document.createElement('div'),

         out = '<ul>',

         i = 0, j = headings.length, 

         weight = 0, nextweight = 0, oldweight = 2,

         container = bd;

         for(i=0;i<j;i++) {

             if(headings[i].indexOf('id=') == -1) {
 
               curr = headings[i].replace(r1,' id="head'+i+'">');

               x = x.replace(headings[i],curr);  
                    
             } else {

               curr = headings[i]; 
             }

             weight = curr.substr(2,1);

             if(i<j-1) {

                  nextweight = headings[i+1].substr(2,1); 
             } 

             var a = curr.replace(r2,'<$1a');

                 a = a.replace('id="','href="#');

                 if(weight > oldweight) {out += '<ul>';}

                 out += '<li>' + a;

                 if(weight > nextweight) { out += '</li></ul></li>';}

                 if(weight > nextweight) { out += '</li>';}

                 oldweight = weight;

         }//end for   

         bd.innerHTML = x;

         var end = '</li></ul>';

         toc.innerHTML = out + end;

         container = document.getElementById('toc') || bd;

         container.appendChild(toc); 

                 /* Handler for event click */
  
                 var tocState = 'block';  

                 function ShowHideToc() { 

                          tocState = (tocState === 'none') ? 'block' : 'none'; 

                          document.getElementById('contentheader').innerHTML = (tocState == 'none') ? 'show page contents' : 'hide page contents';

                          if(tocState === 'none') {

                          document.getElementById('toc').style.borderTop = '0px solid #EEF0EB';

                          document.getElementById('toc').style.borderBottom = '0px solid #EEF0EB';

                          document.getElementById('toc').style.backgroundColor = '';

                          } else {

                          document.getElementById('toc').style.borderTop = '1px solid #ccc';

                          document.getElementById('toc').style.borderBottom = '1px solid #ccc';
 
                          document.getElementById('toc').style.backgroundColor = '#fff';

                          }

                          document.getElementById('toc').lastChild.style.display = tocState;
                 }

                 document.getElementById('contentheader').onclick = ShowHideToc;
})();//do Exec