chessApp.controller("discoveriesController", function ($scope, PuzzleFactory) {

  $scope.discoveries = [];
  $scope.puzzles = [];

  PuzzleFactory.index(function (data) {
    $scope.puzzles = data;

    for(i in $scope.puzzles){
      if($scope.puzzles[i].tactic == "skewer"){

        $scope.discoveries.push($scope.puzzles[i]);

      }
    }

    $(document).ready(function () {

      var board = ChessBoard("board", { position: $scope.discoveries[0].fen} )

      getDiscoveryIndex = function () {

        return $("#discoveryIndex").val()
      }

      $("#showTacticBtn").click(getDiscoveryIndex, function () {

        var index = getDiscoveryIndex();
        board = ChessBoard("board", { position: $scope.discoveries[index].fen})
      })
    })

  })//closed PuzzleFactory
})
