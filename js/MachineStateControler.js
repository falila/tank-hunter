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

// Game environnement variables
var score=0;
var level=1;
var player=3;
var titleStarted=false;
var gameOverStarted=false;

// Score variables 
var tankscore=250;
var bombScore=100;

// variables logical 
 Player player=null;
 var tanks=[];
 var playerMissiles=[];
 var tankMissiles=[];
 var bombs=[];
 
 // level specific variables
 var levelTankOccurence=15 ;
 var levelTankSpeed=1;
 var levelTankMissileSpeed=1;
 var levelTankSpeedAdjust=1;

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
function checkkeysPress();
function update (){
	// appel tous les updates funct 
	}
function updatePlayer(); 
function updatePlayerMissiles();
function updateTankMissiles();
function updateTank();
function updateBomb();
function updateBase();

// function d'affichage
function render(){} 
function renderPlayer(){}
function renderPlayerMissile(){};
function renderTank(){};
function renderBomb(){};
function renderTankMissile();
function renderPlayerBomb(){};
function checkCollisions(){}
function firePlayerMissile(){}
function fireTankMissile(){}
function playerDie(){}
function createExplode(){}
function boundingBoxCollide(){}
function addToScore(){}
