(function(app){var CollapseController=function(){function CollapseController($scope,$element,$attrs){this.$scope=$scope;this.isCollapsed=false;this.$scope.collapse=this.collapse}CollapseController.prototype.collapse=function(){this.isCollapsed=!this.isCollapsed};return CollapseController}();app.directive("amCollapse",[function($parse){return{restrict:"E",transclude:true,templateUrl:"src/view/directive/collapse.html",scope:{icon:"=",title:"="},controller:CollapseController}}])})(angular.module("app"));