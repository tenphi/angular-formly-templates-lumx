(function () {
  'use strict';

  angular.module('shmck.formFields.ngModelAttrs', [])
    .service('ngModelAttrsFormFields', ngModelAttrsFormFields)
    .config(stateRoutes);

  function ngModelAttrsFormFields() {
    this.contents = {
      title: 'ngModelAttrs',
      docsLink: 'http://formly-js.github.io/angular-formly/#/example/very-advanced/ngModelAttrs',
      description: 'app/notes/ngModelAttrsDescription.md'
    };

    this.formData = {};

    this.fields = function () {
      return [{
        "key": "password",
        "type": "lx-input",
        "templateOptions": {
          "type": "password",
          "label": "Password (8 character maximum)",
          "maxlength": 8,
          "required": true
        },
        "ngModelAttrs": {
          "maxlength": {
            "attribute": "maxlength"
          }
        }
      }];
    };
  }

  function stateRoutes($stateProvider) {
    $stateProvider
      .state('ngModelAttrs', {
        url: '/ngModelAttrs',
        views: {
          'form@': {
            templateUrl: 'app/form/form.html',
            controller: 'FormCtrl as vm',
            resolve: {
              formFields: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.fields;
              },
              contents: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.contents;
              },
              formData: function (ngModelAttrsFormFields) {
                return ngModelAttrsFormFields.formData;
              }
            }
          }
        }
      });
  }

}());