/***
*@author souleymane keita v0.1
*this class represent a bomb objet 
*
*/

function Bomb(){
	this.x; // position sur l'axe x
	this.y; // position sur l'axe y
	this.width; // longueur
	this.height; // largeur
	this.timeOut; // delai avant l'explosion de la bomb 
	this.notExplosed=false;
	
	// fait exploser la bomb
	function bombExplosed(){} 
	//neutralise la bomb elle est retirer de la liste des bomb et supp sur le screen
	function neutraliseBomb(){}
	
	}