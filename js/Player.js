/***
*@author souleymane v0.1
*This class represent the single player objet of game 
*it illustrete all player's methods
*/

// Define player attributes



function Player(){
	
	
	this.width=20;
	this.height=20;
	this.halfwidth=10 ;
	this.halfheight=10;
	this.move=false;
	this.rotatationVelocity=1;
	this.maxVelocity=5;
	this.x=0;
	this.y=0;
	this.moveAcceleration=.05;
	this.supPowerMin=0;
	this.supPowerMax=5;
	this.missilesDelay=5;
	this.velocityX=velocityX;
	this.velocityY=velocityY;
//this.jogeDegatMin=0; 
	//this.jogeDegatMax=2 ;
	
	// met la position du jour à jour
	function playerUpdate(x,y){}
	// redessiner le player dans le canvas
	function playerRenderer(){} 
	// tirer un missile 
	function playerFireMissiles(){}
	// fait exploiser une ou des  mine(s) quand sont super power est à max 
	function playerGetOUTMine(){}
	// poser une mine 
	function playerPutMine(){}
	// repere les mines situes a la distance captprox du player 
	function playerDetectMine(){}
	
	}
	
	