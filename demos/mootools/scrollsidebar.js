/* class ScrollSidebar */
var ScrollSidebar = new Class({

          /* Implements */
          Implements: [Options],

          /* options */
          options: {

             offsets: {x:0,y:0}, 

             mode: 'vertical',
 
             positionVertical: 'top',

             positionHorizontal: 'left',

             speed: 400
          },

          /* constructor of class - public method */
          //@param (String) ID of the menu bar
          //@param (Object) options for personalization
          initialize: function(menu,options) {

               this.setOptions(options);

               this.menu = $(menu);

               this.move = this.options.mode == 'vertical' ? 'y' : 'x';

               this.property = this.move == 'y' ? 'positionVertical' : 'positionHorizontal';

               var css = {position: 'absolute','display': 'block'}; 

               css[this.options.positionsVertical] = this.options.offsets.y; 

               css[this.options.positionsHorizontal] = this.options.offsets.x; 

               this.menu.setStyles(css);
 
               this.menu.set('tween',{duration: this.options.speed});

               this.startListeners();
          },  

          /* private method */
          startListeners: function() {

               var action = function() {

                   this.setPosition($(document.body).getScroll()[this.move]+this.options.offsets[this.move]); 

               }.bind(this);

               window.addEvent('scroll',action);

               window.addEvent('load',action);  
          },

          /* private method */
          //@param move (int) 
          setPosition: function(move) {

               this.menu.tween(this.options[this.property],move);

             return this;
          } 
});//end class