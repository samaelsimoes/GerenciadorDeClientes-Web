var app = angular.module('clientes',[	'ngAnimate', 'ngTouch', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid', 'ui.grid.pagination', 
										'ui.grid.cellNav', 'ui.grid.expandable', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.saveState', 
										'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.moveColumns', 'ui.utils.masks',
										'ui.grid.infiniteScroll', 'ui.grid.importer', 'ui.grid.grouping','ui.materialize', 'toastr', 'ngResource', 
										'ngRoute', 'ngTouch', 'ui.mask'
									]
						); 
	app.pathRest = 'rest';
	app.config(function($routeProvider, $locationProvider){
		
	// remove o # da url
	$locationProvider.html5Mode({		
		enabled: 	 false,
		requireBase: false
	});    
		
	$routeProvider
	
	.when('#!/', {	
		templateUrl: '/',
	}) 
	.when('/gerencial', {
    	templateUrl: 'resources/pages/gerencial.html',
    	controller:  'GerencialFormCrtl',
	}) 
	.when('/listaCliente', {
    	templateUrl: 'resources/pages/gridClientes.html',
    	controller:  'GerencialGridCrtl',
    }) 
});



