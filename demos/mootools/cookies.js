var Cookies = {

            init: function(){

                  var allcookies = document.cookie.split("; ");

                  for(var i=0;i<allcookies.length;i++) {

                          var cookiepair = allcookies[i].split("=");

                          this[cookiepair[0]] = cookiepair[1];
                  }  
            },

            create: function(name,value,days){

                    if(days) {

                       var date = new Date();

                           date.setTime(date.getTime()+(days*24*60*60*1000));

                           var expires = "; expires="+date.toGMTString();

                    } else {var expires = "";}

                    document.cookie = name + "=" + value + expires + "; path=/";
     
                    this[name] = value; 
            },

            erase: function(name) {

                   this.create(name,"",-1);

                   this[name] = undefined; 
            } 
};

Cookies.init();

function saveIt(name) {

         var x = document.forms['cookieform'].cookiename.value;

         if(!x) {

                alert('Please fill in a value in the input box.');

         } else {

                Cookies.create(name,x,7);

                alert('Cookie created.')
         }    
}

function readIt(name) {

         alert('The value of the '+ name + ' is: ' + Cookies[name]);
}	

function eraseIt(name) {

         Cookies.create(name,"",-1);

         alert('Cookie erased.');
}

function init_cookies() {

         for(var i=1;i<3;i++) {

                  var x = Cookies['thinkcookie'+i];

                  if(x) {alert('Cookie thinkcookie' + i + '\n that you set on a previous  visit is still active.\n Its value is: ' + x );}
         } 
}