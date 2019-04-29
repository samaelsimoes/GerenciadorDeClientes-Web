/**
 * Arquivo service tipo de custo em angular.
 * @author Samael Pereira Simões
 */
app.factory('GerencialService', function($resource) {	
	return $resource('/manager-client/rest/manager/', null, {
	    update: {
	    	method: 'PUT'
	    },
	    remove: {
			method: 'DELETE'
		}
	});
});

