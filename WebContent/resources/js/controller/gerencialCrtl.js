(function(){	   //invocando a funcao
	'use strict'; //incluindo string  para o navegador nao ignorar erros de sintaxe na função

	angular.module("clientes").controller("GerencialFormCrtl",Controller);
	Controller.$inject = ["lowercaseFilter"];
	
	// injetando um filtro
	
	function Controller(lc) {

		let self = this;
			
		self.cliente  = {}; 
		self.clientes = []; 
		self.pesquisa = "";
		
		self.novoCliente = function() {
			self.cliente = {};
		}
		
		self.salvarCliente = function(cliente) {
			cliente.nome = lc(cliente.nomeUsua);
			if (cliente.id) {
				editarCliente(cliente, this);
			}else{
				incluirCliente(cliente);
			}
		}		
		
		function incluirCliente(cliente) {
			cliente.id = cliente.id ? cliente.id +1 : +1;
			self.clientes.push(cliente);
			self.novoCliente();
		}
		
		this.removerCliente = function(cliente) {
			debugger
			let pos = -1; 
			angular.forEach(self.clientes,function(item,index) {
				angular.forEach(self.clientes,function(item,index) {
					pos = index;
				});
				if (pos > -1) {
					self.clientes.splice(pos,1);
				}
			});
		}
		self.selecionarCliente = function(cliente) { 
			self.cliente = angular.copy(cliente);
		}	
		
		debugger;
		
		function editarCliente(cliente, context) {
			let pos = -1;
			angular.forEach(context.clientes,function(item,index) {
				if (cliente.id == item.id) {
					pos = index;
				}
			});
			if (pos > -1) {
				self.clientes.splice(pos,1,self.cliente);
				self.novoCliente();
			}
		}
		
		/*if($scope.gerencialForm.$valid) {  
			if ( ce == undefined || ce == "" ){
			
				toastr.warning("Gentileza preencher os campos obrigatório");	
			}else if( ce != undefined || ce != "" ){				
				GerencialService.save(ce , function(response) {						
					toastr.success("Cadastrado com sucesso!");
					$scope.load();				
					$scope.gerencial = null;
				}, function(err){			
					toastr.error( 'Erro ' + err.data);
				})
			}
		} else {  
			toastr.warning("Gentileza Verifique os campos obrigatórios!");
		}  */
	};
})();