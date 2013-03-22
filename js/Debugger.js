/**
*debugger function 
*show the message in console
**/

var Debug=function(){};
Debug.log=function(msg){
	   try{
	      
      console.log(msg);
      }
      catch(exception){
         return;
      }
}
