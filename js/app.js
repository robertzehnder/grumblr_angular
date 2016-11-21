angular.module("grumblr", ["ui.router"])
.config(["$stateProvider", Router])
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
]);

angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  GrumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
  this.grumble = grumbles[$stateParams.id];
}

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
}

function Router($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"
  })
  .state("grumbleCreate", {
    url: "/grumbles",
    controller: "GrumbleCreateController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/create.html"
  })
}

angular.module("grumblr")
.controller("GrumbleCreateController", [GrumbleCreateControllerFunction])

function GrumbleCreateControllerFunction() {
  console.log("Create function works")
}
