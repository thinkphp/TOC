/* Create TOC */
(function(){
              //define vars
             var nodes = [], weight, oldweight, nextweight = 0;

                 //get all headers
                 nodes = getElementsByTagNames('h1,h2,h3,h4');

                 //define var out
                 var out = '<ul>';

                 /* For each header do */
                 nodes.each(function(o,k){

                     var id = o.id;
 
                         if(id == '') {

                              id = 'head' + k;

                              o.id = id;  
                         }  

                         weight = o.nodeName.substr(1,1);

                         if(k>0 && weight > oldweight) {

                             out += '<ul>';
                         }

                         out += '<li><a href="#'+o.id+'">'+o.innerHTML+'</a>';

                         if(nodes[k+1]) {

                                nextweight = nodes[k+1].nodeName.substr(1,1);

                                if(weight > nextweight) {

                                     out += '</li></ul></li>';
                                } 

                                if(weight == nextweight) {

                                     out += '</li>'; 
                                }
                         }//endif

                         oldweight = weight;

                    });//end each

                 out += '</li></ul>'; 

                 $('toc').set('html',$('toc').get('html') + out);

                 var tocState = 'block';
 
                 /* 
                    Handler for click event - 

                    function which is triggered 

                    when make click on the button 
                 */
                 function ShowHideToc() { 

                          tocState = (tocState === 'none') ? 'block' : 'none'; 

                          $('contentheader').set('text',(tocState == 'none') ? 'show page contents' : 'hide page contents');

                          if(tocState === 'none') {

                          $('toc').setStyle('borderTop','0px solid #EEF0EB');

                          $('toc').setStyle('borderBottom','0px solid #EEF0EB');

                          $('toc').setStyle('backgroundColor','');

                                } else {

                                $('toc').setStyle('borderTop','1px solid #ccc');
 
                                $('toc').setStyle('borderBottom','1px solid #ccc');

                                $('toc').setStyle('backgroundColor','#fff');
                           }

                          $('toc').lastChild.style.display = tocState;
                 }

                 /* 
                    Attach handler for event click  

                    when the element with ID 'contentheader 

                    is clicked the function 'ShowHideToc' is triggered.
                 */
                 $('contentheader').addEvent('click',function(){

                       ShowHideToc();
                 });

                 /* function getElementsByTagNames - get All elements from obj */
                 function getElementsByTagNames(list,obj) {

                          if (!obj) var obj = document;

                          var tagNames = list.split(',');

                          var resultArray = new Array();

                               for (var i=0;i<tagNames.length;i++) {

                                         var tags = obj.getElementsByTagName(tagNames[i]);

                                              for (var j=0;j<tags.length;j++) {

                                                    resultArray.push(tags[j]);
                                               }
                                }

                            var testNode = resultArray[0];

                            if (!testNode) return [];

                            if (testNode.sourceIndex) {

                                resultArray.sort(function (a,b) {

                                   return a.sourceIndex - b.sourceIndex;

                                });

	                       }

	                       else if (testNode.compareDocumentPosition) {

                                      resultArray.sort(function (a,b) {

                                            return 3 - (a.compareDocumentPosition(b) & 6);

                                      });
                            	}
                       	return resultArray;
                     }//end function
})();//do Exec
