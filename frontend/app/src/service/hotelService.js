var HotelService = (function(){
    function HotelService($http, ResponseService){
        this.$http = $http;   
        this.ResponseService = ResponseService   
        this.filterHotel = function(options){
            var self = this;
            options.beforeSend && options.beforeSend();
            $http({
                method : "GET",
                url : "http://localhost:1337/hotel/filter",
                params: options.filter
            }).then(function (response) {
                options.complete &&options.complete();
                if(self.ResponseService.validResponse(response.data)){
                    //se ejecuta el callback success 
                    options.success && options.success(response.data.data, response.data);
                }else{
                    //se ejecuta el callback error 
                    options.error && options.error();
                }
            }, function (response) {
                console.log("Error en reques:", response.statusText);
                //se ejecuta el callback fail 
                options.fail && options.fail();
                options.complete &&options.complete();
            });
        }     
    }


    return HotelService;
})();

//ResponseService
//Funciones generales para el manejo de respuesta
var ResponseService = (function(){
    function ResponseService(){      
    }

    //valida si la respuesta fue satisfactoria
    ResponseService.prototype.validResponse = function(response){
        var isSuccess = true,
            msg = '';
        if(!response || !response.isSuccess){
            isSuccess = false;
            msg = response.message || 'Error en el servidor';
            alert(msg);
        }
        return isSuccess;
    }

    return ResponseService;
})();

angular.module('app')
.service('ResponseService', ResponseService)
.service('HotelService', HotelService);



