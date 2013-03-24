/***
*@author souleymane keita version 0.1 
*this file present all function controlling the game
*ce fichier decrit l'ensemble des methodes permettant de controller le jeu
*
*/


// variables Globales

// taille du canevas 
var xMin=0;
var xMax=400;
var yMin=0;
var yMax=400;
var currentGameState =0; // l'etat du courant du jeu
var currentGameFunction=null; // contient la function du jeu encour d'execution 

//Game state
var GAME_STATE_GAME_OVER =5;
const GAME_STATE_PLAYER_LEVEL=1;
var GAME_STATE_PLAYER_START=2;
var GAME_STATE_NEW_LEVEL=4;
var GAME_STATE_PLAYER_DIE;
const GAME_STATE_TITLE=0;
var GAME_STATE_NEW_GAME=3;


// all methods game state / les functions sur l'etat du jeu 

function switchGameState(newState){};
function gStatePlayerLevel(){};
function gStatePlayerGameOver(){};
function gStateTitle(){};
function runGame(){};
function gStateNewGame(){}
function gStatePlayerStart(){}
function gStatePlayerDie(){}

// functions du jeu
function resetPlayer(){}
function checkForEndOFLevel(){};
function fillBackground();
function setTextStyle();
function renderScoreBoard();
function checkeysPress();
function update (){
	// appel tous les updates funct 
	}
function updatePlayer(); 
function updatePlayerMissiles();
function updateTankMissiles();
function updateTank();
function updateBomb();
function upadteBase();

