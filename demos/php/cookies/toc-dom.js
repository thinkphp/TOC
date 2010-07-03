(function(){
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