/***
*@author souleymane v0.1
*This class represent the single player objet of game 
*it illustrete all player's methods
*/

// Define player attributes

var width;   // longeur
var height;  // largeur
var velocityX; // vitesse sur l'axe X
var velocityY; // vitesse sur l'axe Y
var speed ;  // facteur de vitesse 
var nblifes;   // la duree de vie  
var jogeDegat;  // indicateur du nombre de degats subit 
var captprox;  // capteur de proximité pour reperer les enimies et les mines enemies 
var missilesDelay; // delai entre chaque coup canon . 
var supPowerMin ; // permet d'indique le niveau de son super pouvoir. 
var supPowerMax ; 
var accelerationMax; 
var x; // position courante sur l'axe X 
var y; // position courante sur l'axe Y

function Player(x,y,width,height,velocityX,velocityY){
	
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.velocityX=velocityX;
	this.velocityY=velocityY;	
	
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
	
	