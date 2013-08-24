var apFormModule = angular.module('apForm', ['ng']);

if (apSubmitDirective) apFormModule.directive(apSubmitDirective);
if (apAttemptDirective) apFormModule.directive(apAttemptDirective);
if (apConfirmDirective) apFormModule.directive(apConfirmDirective);