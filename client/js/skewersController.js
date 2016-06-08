chessApp.controller("skewersController", function ($scope, PuzzleFactory) {

  $scope.skewers = [];
  $scope.puzzles = [];

  PuzzleFactory.index(function (data) {
    $scope.puzzles = data;

    for(i in $scope.puzzles){
      if($scope.puzzles[i].tactic == "skewer"){

        $scope.skewers.push($scope.puzzles[i]);

      }
    }

    $(document).ready(function () {

      var board = ChessBoard("board", {position: $scope.skewers[0].fen})

      getSkewerIndex = function () {

        return $("#skewerIndex").val()
      }

      $("#showTacticBtn").click(getSkewerIndex, function () {

        var index = getSkewerIndex();
        board = ChessBoard("board", {position: $scope.skewers[index].fen})
      })
    })
  })
})
