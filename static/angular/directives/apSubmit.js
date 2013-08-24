var apSubmitDirective = {
    'apSubmit': ['$parse', function ($parse) {
        return {
            restrict: 'A',
            require: 'form',
            link: function (scope, formElement, attributes, formController) {

                var fn = $parse(attributes.apSubmit);

                formElement.bind('submit', function (event) {
                    // if form is not valid cancel it.
                    if (!formController.$valid) {
                        scope.showMsg = true;
                        scope.notification = "Enter *Required Fields";
                        return false;
                    }

                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            }
        };
    }]
};