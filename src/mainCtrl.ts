'use strict';

angular.module(`typescript`)
.controller(`mainCtrl`, function( $scope ) {

    $scope.title = "People List";

    $scope.people = [
        {
              name: 'Ryan'
            , age: 24
        }
        , {
              name: 'Sean'
            , age: 29
        }
    ];

});