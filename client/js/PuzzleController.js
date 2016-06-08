//this controller is for creating new puzzle on new.html
chessApp.controller("PuzzleController", function ($scope, PuzzleFactory) {

  newPuzzle = {};
  var fenfen;
  var solutionFen;

  PuzzleFactory.index(function (data) {
    $scope.puzzles = data;
  })

  $scope.create = function() {

    //
    // console.log("Current position as an Object:");
    // newPuzzle.positionObj = newPuzzleBoard.position()
    // console.log(newPuzzle.positionObj);

    // newPuzzle.fen = newPuzzleBoard.fen()
    // console.log("Current position as a FEN string:");
    // console.log(newPuzzle.fen);

    // removed this because it was creating duplicates
    // PuzzleFactory.create($scope.newPuzzle, function() {

    // })
  }

//jquery stuff for saving new puzzle in new.html
$(document).ready(function(){


var newPuzzleBoard = ChessBoard('newPuzzleBoard', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
});

$('#startBtn').on('click', newPuzzleBoard.start);
$('#clearBtn').on('click', newPuzzleBoard.clear);


//getPositionBtn should show the starting fen string to the user on new.html
//getSolutionBtn should show the solution fen string to the user on new.html
$("#getPositionBtn").on("click", showStartingFen);

function showStartingFen(){
  $scope.fenfen = newPuzzleBoard.fen()
  // console.log($scope.fenfen)
  $("#showStart").val($scope.fenfen)
};
// console.log($scope.fenfen)


$("#getSolutionBtn").on("click", showSolutionFen);
function showSolutionFen(){
  $scope.solutionFen = newPuzzleBoard.fen()
  // console.log($scope.solutionFen)
  $("#showSolution").val($scope.solutionFen)
}
// console.log($scope.solutionFen)

//i want this button to create the FEN & positionObj
//then call the puzzlecontroller create function
$('#savePuzzleBtn').on('click', clickSavePuzzle);

function clickSavePuzzle() {


  // newPuzzle.positionObj = newPuzzleBoard.position()
  // console.log("Current position as an Object:");
  // console.log(newPuzzle.positionObj);

  // $scope.fenfen = newPuzzleBoard.fen()
  // console.log("Current position as a FEN string:");
  // console.log(fenfen);

  $scope.solutionFen = $("#solution").val()
  //show user that starting position and solution were saved

  var request = $.ajax({
    url: "/puzzles",
    method: "POST",
    data: {
      fen: $("#showStart").val(),
      tactic: $("#tactic").val(),
      turn: $("#turn").val(),
      solution: $("#showSolution").val()
    },
    datatype: "html"
  });

  // console.log(request.data)
  // console.log(request)

  request.done(function () {
    console.log("Success")
  });

  request.fail(function (jqXHR, textStatus) {
    alert("I'm sorry. Request failed: " + textStatus);
  });
}//closes clickGetPositionBtn
})//closes document.ready for new.html
})//closes puzzle controller
