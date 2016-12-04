var app = angular.module('app', []);

app.controller('Ctrl', function ($scope) {
  $scope.divisions = [{'group':0,'sub':0}, {'group':0,'sub':1}, {'group':0,'sub':2}, {'group':0,'sub':3}, {'group':1,'sub':0}, {'group':1,'sub':1}, {'group':1,'sub':2}, {'group':1,'sub':3}, {'group':2,'sub':0}, {'group':2,'sub':1}, {'group':2,'sub':2}, {'group':2,'sub':3}, {'group':3,'sub':0}, {'group':3,'sub':1}, {'group':3,'sub':2}, {'group':3,'sub':3}];
  
  $scope.match = function(a, b){
  	return function(cell){
  		return(cell.x===a && cell.y===b);
  }
  };
  $scope.cells=[{'x':0, 'y':0, 'color':'orange', 'id':1}, {'x':0, 'y':1, 'color':'khaki', 'id':2}, {'x':0, 'y':2, 'color':'plum', 'id':3}, {'x':0, 'y':3, 'color':'tomato', 'id':4}, {'x':1, 'y':0, 'color':'magenta', 'id':5}, {'x':1, 'y':1, 'color':'forestgreen', 'id':6}, {'x':1, 'y':2, 'color':'pink', 'id':7}, {'x':1, 'y':3, 'color':'sienna', 'id':8}, {'x':2, 'y':0, 'color':'crimson', 'id':9}, {'x':2, 'y':1, 'color':'silver', 'id':10}, {'x':2, 'y':2, 'color':'chartreuse', 'id':11}, {'x':2, 'y':3, 'color':'orchid', 'id':12}, {'x':3, 'y':0, 'color':'tan', 'id':13}, {'x':3, 'y':1, 'color':'maroon', 'id':14}, {'x':3, 'y':2, 'color':'chocolate', 'id':15}, {'x':3, 'y':3, 'color':'black', 'id':'null'}];
  
  
  $scope.move = function(e){
  var direction = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  switch(direction){
  // balra
  	case 1:
    for(var i=0; i<$scope.cells.length; i++) {
    	if($scope.cells[i].id==='null') {
      	var n = $scope.cells[i];
        
      	for(var j=0; j<$scope.cells.length; j++){
        	if($scope.cells[j].x === n.x){
          	switch($scope.cells[j].y){
            case 0: $scope.cells[j].y = 3;
           	break;
            case 1: $scope.cells[j].y = 0;
            break;
            case 2: $scope.cells[j].y = 1;
            break;
            case 3: $scope.cells[j].y = 2;
            break;
            }
            
          }
        }
      }
    }
    break;
    // fel
    case 2:
    for(var i=0; i<$scope.cells.length; i++) {
    	if($scope.cells[i].id==='null') {
      	var n = $scope.cells[i];
        
      	for(var j=0; j<$scope.cells.length; j++){
        	if($scope.cells[j].y === n.y){
          	switch($scope.cells[j].x){
            case 0: $scope.cells[j].x = 3;
           	break;
            case 1: $scope.cells[j].x = 0;
            break;
            case 2: $scope.cells[j].x = 1;
            break;
            case 3: $scope.cells[j].x = 2;
            break;
            }
            
          }
        }
      }
    }
    break;
    // jobbra
    case 3:
    for(var i=0; i<$scope.cells.length; i++) {
    	if($scope.cells[i].id==='null') {
      	var n = $scope.cells[i];
        
      	for(var j=0; j<$scope.cells.length; j++){
        	if($scope.cells[j].x === n.x){
          	switch($scope.cells[j].y){
            case 0: $scope.cells[j].y = 1;
           	break;
            case 1: $scope.cells[j].y = 2;
            break;
            case 2: $scope.cells[j].y = 3;
            break;
            case 3: $scope.cells[j].y = 0;
            break;
            }
            
          }
        }
      }
    }
    break;
    // lefelé
    case 4:
    for(var i=0; i<$scope.cells.length; i++) {
    	if($scope.cells[i].id==='null') {
      	var n = $scope.cells[i];
        
      	for(var j=0; j<$scope.cells.length; j++){
        	if($scope.cells[j].y === n.y){
          	switch($scope.cells[j].x){
            case 0: $scope.cells[j].x = 1;
           	break;
            case 1: $scope.cells[j].x = 2;
            break;
            case 2: $scope.cells[j].x = 3;
            break;
            case 3: $scope.cells[j].x = 0;
            break;
            }
            
          }
        }
      }
    }
    break;
  }
    };
  }
