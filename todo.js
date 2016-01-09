angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;

    todoList.roles = [
      {id:1,
       text:'admin',
       done:true,
       perimeter:[
         {id:1, axe:[{id:1, key:'legalEntity', value:'sgss'},
                     {id:2, key:'legalEntity', value:'sg'},
                     {id:3, key:'process', value:'p1'}]},

         {id:2, axe:[{id:4, key:'legalEntity', value:'sg'},
                     {id:5, key:'process', value:'p2'}]}
      ]},
      {id:2,
       text:'viewer',
       done:false,
       perimeter:[
         {id:1, axe:[{id:1, key:'legalEntity', value:'sgss2'},
                     {id:2, key:'legalEntity', value:'sg2'},
                     {id:3, key:'process', value:'p12'}]},

         {id:2, axe:[{id:4, key:'legalEntity', value:'sg2'},
                     {id:5, key:'process', value:'p22'}]}
      ]}
    ];
    
    todoList.add = {legalEntity: '', process: ''};
    
    todoList.removeAxe = function(role, perimeter, axe) {
        var roleIndex = todoList.roles.findIndex(function(item) {
            return item.id === role.id;
        });
        
        var perimeterIndex =  todoList.roles[roleIndex].perimeter.findIndex(function(item){
            return item.id === perimeter.id;
        });
        
        var axeIndex = todoList.roles[roleIndex].perimeter[perimeterIndex].axe.findIndex(function(item){
            return item.id === axe.id;
        });
        
        if(axeIndex > -1){
            todoList.roles[roleIndex].perimeter[perimeterIndex].axe.splice(axeIndex, 1);
        }
    };

    todoList.addPerimeter = function(role) {
	    if(todoList.add.legalEntity === '' || todoList.add.process === '') {
			  return;
		  }
      var roleIndex = todoList.roles.findIndex(function(item) {
        return item.id === role.id;
      });
      todoList.roles[roleIndex].perimeter.push({id:Math.random(), axe:[
          {id:Math.random(), key:'legalEntity', value:todoList.add.legalEntity},
          {id:Math.random(), key:'process', value:todoList.add.process}
      ]});
      todoList.add = {};
    };
		
		todoList.addAxe = function(role, perimeter) {
	    if(todoList.add.legalEntity === '' || todoList.add.process === '') {
			  return;
		  }
      var roleIndex = todoList.roles.findIndex(function(item) {
        return item.id === role.id;
      });

			var perimeterIndex =  todoList.roles[roleIndex].perimeter.findIndex(function(item){
        return item.id === perimeter.id;
      });
      todoList.roles[roleIndex].perimeter[perimeterIndex].axe.push(
          {id:Math.random(), key:'legalEntity', value:todoList.add.legalEntity},
          {id:Math.random(), key:'process', value:todoList.add.process});
      todoList.add = {};
    };

    /*todoList.addTodo = function() {
      todoList.roles.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };*/

    /*todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.roles, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldroles = todoList.roles;
      todoList.roles = [];
      angular.forEach(oldroles, function(todo) {
        if (!todo.done) todoList.roles.push(todo);
      });
    };*/
  });