//adding to module (getting) module
//Foundation.global.namespace = '';
angular.module("loanPurposeSelect",['templates', 'mm.foundation.alert'])

  .service("loanPurposesService", function(){
    // right now these are hard-coded...we may want to fetch these from the db at some point
    // select * from ListingCategory;
    var privatePurposes = [
      {id: 1, title: "Debt consolidation"},
      {id: 2, title: "Home improvement"},
      {id: 3, title: "Business"},
      {id: 6, title: "Auto"},
      {id:16, title: "Motorcycle"},
      {id:17, title: "RV"},
      {id:9,  title: "Boat"},
      {id:15, title: "Medical/Dental"},
      {id:19, title: "Vacation"},
      {id:13, title: "Household Expenses"},
      {id:8,  title: "Baby &amp; Adoption Loans"},
      {id:11, title: "Engagement Ring Financing"},
      {id:20, title: "Wedding Loans"},
      {id:14, title: "Large Purchases"},
      {id:18, title: "Taxes"},
      {id:12, title: "Green Loans"},
      {id:7,  title: "Other"}
    ];
    return{
      getPurposes: function(){
        return privatePurposes;
      }
    };
  })

  .controller("LoanPurposeSelectController", ["$scope", "loanPurposesService",function($scope, loanPurposesService){
    $scope.purposes = loanPurposesService.getPurposes();
    $scope.selectionMade = function(){
      $scope.showAlert = ($scope.purpose.id == 3);
    };
    $scope.closeAlert = function(){
      $scope.showAlert = false;
    };
  }])

  .directive("loanPurposeSelect", function($templateCache){
    return{
      restrict: "E",
      template: $templateCache.get("shared/directives/loan_purpose_select/loan_purpose_select_tmpl.html"),
      controller: "LoanPurposeSelectController",
      scope: {
        enableAlert: "="
      }
    };
  });
