

//rankDif = rankTo - rankFrom
//negative rankDif for Black
//fileDif = fileTo - fileFrom
//missing enpasant
//promotion
function blackPawnShape(obj){

	if(obj.rankDif === -1 && obj.fileDif === 1 && obj.capture){
		return true;
	}
	else if(obj.rankFrom === 7 && obj.rankDif >= -2 && obj.rankDif < 0 && obj.fileDif === 0 && !obj.capture){
		return true;
	}
	else if(obj.rankDif === -1 && obj.fileDif === 0 && !obj.capture){
		return true;
	}
	else {
		return false;
	}
}

function whitePawnShape(obj){

	if(obj.rankDif === 1 && obj.fileDif === 1 && obj.capture){
		return true;
	}
	else if(obj.rankFrom === 2 && obj.rankDif <= 2 && obj.fileDif === 0 && !obj.capture){
		return true;
	}
	else if(obj.rankDif === 1 && obj.fileDif === 0 && !obj.capture){
		return true;
	} 
	else {
		return false;
	}
}

function knightShape(obj){

	var rankDif = Math.abs(obj.rankDif);
	var fileDif = Math.abs(obj.fileDif);

	if(rankDif === 1 && fileDif === 2){
		return true;
	}
	else if(rankDif === 2 && fileDif === 1){
		return true;
	}
	else {
		return false;
	}
}

function bishopShape(obj){

	var rankDif = Math.abs(obj.rankDif);
	var fileDif = Math.abs(obj.fileDif);	

	if(rankDif === fileDif){
		return true;
	} else {
		return false;
	}
}


//castling??
function rookShape(obj){

	if(obj.rankTo === obj.rankFrom && obj.fileTo !== obj.fileFrom){
		return true;
	} else if(obj.rankTo !== obj.rankFrom && obj.fileTo === obj.fileFrom){
		return true;
	} else {
		return false;
	}
}

function queenShape(obj){

	if(rookShape(obj) || bishopShape(obj)){
		return true;
	} else {
		return false;
	}
}

//check
//castling
function kingShape(obj){

	if(Math.abs(obj.rankDif) === 1 || obj.rankDif === 0 ){
		if(Math.abs(obj.fileDif) === 1 || obj.fileDif === 0){
			return true;
		}
	} else {
		return false;
	}
}

function legalShape(obj){

	switch(obj.piece) {

		case "p":
			return blackPawnShape(obj);
			break;

		case "P":
			return whitePawnShape(obj);
			break;

		case "n":
		case "N":
			return knightShape(obj);
			break;

		case "b":
		case "B":
			return bishopShape(obj);
			break;

		case "r":
		case "R":
			return rookShape(obj);
			break;

		case "q":
		case "Q":
			return queenShape(obj);
			break;

		case "k":
		case "K":
			return kingShape(obj);

		default:
				return "unknown piece";


	}
}



			





























































