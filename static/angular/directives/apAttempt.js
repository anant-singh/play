var apAttemptDirective = {
    'apAttempt': function () {
        return {
            restrict: 'A',
            controller: ['$scope', function ($scope) {
                this.attempted = false;

                this.setAttempted = function() {
                    this.attempted = true;
                };
            }],
            compile: function(cElement, cAttributes, transclude) {
                return {
                    pre: function(scope, formElement, attributes, attemptController) {
                        scope.ap = scope.ap || {};
                        scope.ap[attributes.name] = attemptController;
                    },
                    post: function(scope, formElement, attributes, attemptController) {
                        formElement.bind('submit', function () {
                            attemptController.setAttempted();
                            if (!scope.$$phase) scope.$apply();
                        });
                    }
                };
            }
        };
    }
};
