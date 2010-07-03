YUI({combine: true,timeout: 1000}).use("node",function(Y){
                  
     var nodes = Y.all('h1,h2,h3,h4,h5,h6');

     var out = '<ul>';

     var weight, nextweight = 0, oldweight;

         nodes.each(function(o,k){

               var id = o.get('id');

                   if(id == '') {
 
                      id = 'head' + k;

                      o.set('id',id);   
                   };

               weight = o.get('nodeName').substr(1,1);

                  if(k>0 && weight>oldweight) {

                      out += '<ul>';  
                  };

               out += '<li><a href="#'+o.get('id')+'">'+o.get('innerHTML')+'</a>'; 

                  if(nodes.item(k+1)) {

                     nextweight = nodes.item(k+1).get('nodeName').substr(1,1);

                     if(weight > nextweight) {

                        out += '</li></ul></li>';
                     }

                    if(weight == nextweight) {
 
                        out += '</li>'; 
                     }  
                  };

                 oldweight = weight;  

       });//end each 

       out += '</li></ul>';

       var old = Y.one('#toc').get('innerHTML'); 

       Y.one('#toc').set('innerHTML',old + out); 

       var tocState = 'block';
 
            function ShowHideToc() { 

                             tocState = (tocState === 'none') ? 'block' : 'none'; 

                             Y.one('#contentheader').set('innerHTML',(tocState == 'none') ? 'show page contents' : 'hide page contents');

                             if(tocState === 'none') {

                               Y.one('#toc').setStyle('borderTop','0px solid #EEF0EB');
 
                               Y.one('#toc').setStyle('borderBottom','0px solid #EEF0EB');

                               Y.one('#toc').setStyle('backgroundColor','');
  
                             } else {

                               Y.one('#toc').setStyle('borderTop','1px solid #ccc');

                               Y.one('#toc').setStyle('borderBottom','1px solid #ccc');
 
                               Y.one('#toc').setStyle('backgroundColor','#fff');
                            }
 
                            document.getElementById('toc').lastChild.style.display = tocState;

             }//end function ShowHideToc

        Y.one('#contentheader').on('click',function(e){ShowHideToc();});

});//end YUI3