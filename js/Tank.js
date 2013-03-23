/***
*@author souleymane keita v0.1
*This class represent the tank objet of game 
*it illustrete all tank  methods
*/

// Define tank attributes

//var width=;   // longeur
//var height=;  // largeur
//var velocityX=; // vitesse sur l'axe X
//var velocityY=; // vitesse sur l'axe Y
//var speed =;  // facteur de vitesse 
//var nblifes= ;   // la duree de vie  
//var jogeDegat=;  // indicateur du nombre de degats subit 
//var captprox=;  // capteur de proximité pour reperer le player 
//var missilesDelay=; // delai entre chaque coup canon . 
//var supPowerMin =; // le niveau min de son super pouvoir. 
//var supPowerMax =; // le niveau max de son super pouvoir. 
//var accelerationMax=; 
//var x=; // position courante sur l'axe X 
//var y=; // position courante sur l'axe Y

function Tank(x,y,width,height){
	
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
		
	// met la position du jour à jour
	function tankUpdate(x,y){}
	// redessiner le player dans le canvas
	function tankRenderer(){} 
	// tirer un missile 
	function tankFireMissiles(){}
	// fait exploiser une ou des  mine(s) quand sont super power est à max 
	function tankGetOUTMine(){}
	// poser une bomb
	function tankPutBomb(){}
	// repere les mines situes a la distance captprox du Tank
	function tankDetectBomb(){}
	// detecte la collision avec un autre objet de la scène
	function collideswithObjets(Object,Object){}
	// ia du tank
	function tankIA(){}
	
	}
	