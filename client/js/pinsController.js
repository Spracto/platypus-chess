chessApp.controller("pinsController", function ($scope, PuzzleFactory) {

  $scope.pins = [];
  $scope.puzzles = [];


  PuzzleFactory.index(function (data) {
    $scope.puzzles = data;

    for(i in $scope.puzzles){
      if($scope.puzzles[i].tactic == "pin"){

        $scope.pins.push($scope.puzzles[i]);

      }
    }

    $(document).ready(function () {

      var board = ChessBoard("board", {position: $scope.pins[0].fen} )

      getPinIndex = function () {

        return $("#pinIndex").val()
      }

      $("#showTacticBtn").click(getPinIndex, function () {

        var index = getPinIndex();
        board = ChessBoard("board", {position: $scope.pins[index].fen} )
      })
    })
  })//closes PuzzleFactory.index
})//closee PinsController
