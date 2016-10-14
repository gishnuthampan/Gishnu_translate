  describe('ToDo' , function() {
  //   
      modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

       // }); 
    describe('add_test', function() {
    it('test_pop', function() {
      var $scope = {};
      var controller = $controller('PopupCont', { $scope: $scope,$uibModalInstance:modalInstance });
      $scope.id="111";
      $scope.name="qwe";
      $scope.add_data();
      expect(obj).toContain({task_ID:'111',task_name:'qwe'});
    })
});

      describe('remove_test', function() {
    it('test_rem', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope,$uibModalInstance:modalInstance });
      $scope.remove(0);
      expect(obj).not.toContain({task_ID:'100',task_name:'Task 1'});
    })
});
});