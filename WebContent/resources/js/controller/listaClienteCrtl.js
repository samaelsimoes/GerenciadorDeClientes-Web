/**
    * Arquivo Controller em angular.
    * @author Samael Pereira Simões
*/
app.controller('GerencialGridCrtl', ['$scope', '$http', '$log','$rootScope', '$location', 'toastr', 'GerencialService', '$timeout','uiGridConstants',
function($scope, $rootScope, $location, $http, $log, toastr, GerencialService, timeout, uiGridConstants) {

// Model da lista de gêneros
$scope.rows = [];

$scope.gridOptions = {
     
    rowHeight: 				  35,         
    selectionRowHeaderWidth:  35,
    enableRowSelection: 	  true,
    enableSelectAll: 		  true,
    showGridFooter:			  false,
    paginationPageSize: 	  10,
    selectedItems: 			  $scope.mySelections,
    enablePaginationControls: false,
    enableFiltering : 		  false,
    
    columnDefs: [		 
        { 
            field: 		 	'code',
            displayName: 	'Código', 
            enableCellEdit: false, 
            type: 			"number"
        },
        { 
            field: 		    'name', 
            displayName:    'Nome', 
            enableCellEdit: false
        }
    ]
};

/* --- Server --- */ // Service
$scope.load = function() { // load all		
    GerencialService.query(function( gerencial ) {	
        $scope.gerencial_ 		= gerencial_;
        $scope.gridOptions.data = gerencial_;		 		
    }, function( error ) {			 
        toastr.error( error );
    });
};
//-- end load 

$scope.load();
}])


