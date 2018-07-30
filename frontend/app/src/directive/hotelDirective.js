(function(app){
    var HotelController = (function(){
        function HotelController($scope){
            this.$scope = $scope;
        }
       
        return HotelController;
    })();



    app
    .directive('amHotel', [function ($parse) {
        return {
            restrict: 'E',
            templateUrl: 'src/view/directive/hotel.html',
            scope: {
                hotel: '='
            },
            controller: HotelController,
            controllerAs: 'ctrl',
            bindToController: true,
        };
    }]);
})(angular.module('app'));