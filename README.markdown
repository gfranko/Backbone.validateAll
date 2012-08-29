Backbone.validateAll
====================

![Example](http://backbonejs.org/docs/images/backbone.png)

Backbone.js plugin that provides an option to only validate Model properties that are currently being set or saved
------------------------------------------------------------------------------------------------------------------

A small Backbone.js plugin that originated from a failed Backbone.js [pull request](https://github.com/documentcloud/backbone/pull/1595).

**Background**

This plugin originated out of frustration with using the Backbone.js Model `validate` method when validating HTML forms.  Since Backbone.js v0.9.1 and greater, Backbone Model validation was not made to elegantly handle form validation, since the default `validate` method will validate all Model attributes, regardless of what particular attribute is being **set** or **saved**.  For certain use cases, it is necessary to only validate a certain Model property (or form field) without worrying about the validation of any other Model property (or form field).

Backbone core contributor, [@braddunbar](https://github.com/braddunbar), presented a possible solution for this use case in the above mentioned [pull request](https://github.com/documentcloud/backbone/pull/1595), but it still involved calling all of the validation methods within the `validate()` method, which can negatively affect performance.

Backbone.validateAll allows you to know which Model property is being set/saved during the validation process.

##Who Should Use This

Anyone who wants the ability to not validate all Model properties when attributes are set on a Model.  An obvious use case for this is HTML forms.

##Dependencies
[Backbone](http://www.backbonejs.org)
[Lodash](http://www.lodash.com)

##Getting Started
   **Note**: This Getting Started example assumes a Registration form

#Set Up a Backbone Model and Validate Method
      // Creates a User Model
      var User = Backbone.Model.extend({

          // RegEx Patterns
          // ==============
          patterns: {

              specialCharacters: "[^a-zA-Z 0-9]+",

              digits: "[0-9]",

              email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$",

              phone: "^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"

          },

          // Validators
          // ==========
          validators: {

              minLength: function(value, minLength) {
                
                  console.log("minLength validation called");

                  return value.length >= minLength;

              },

              maxLength: function(value, maxLength) {

                  console.log("maxLength validation called");
                
                  return value.length <= maxLength;

              },

              pattern: function(value, pattern) {

                  return new RegExp(pattern, "gi").test(value) ? true : false;

              },

              isEmail: function(value) {
 
                  console.log("isEmail validation called");
  
                return User.prototype.validators.pattern(value, User.prototype.patterns.email);

              },

              isPhone: function(value) {

                  console.log("isPhone validation called");
                  return User.prototype.validators.pattern(value, User.prototype.patterns.phone);

              },

              hasSpecialCharacter: function(value) {

                  console.log("hasSpecialCharacter validation called");
  
                return User.prototype.validators.pattern(value, User.prototype.patterns.specialCharacters);

              },

              hasDigit: function(value) {

                  console.log("hasDigit validation called");
                  
                return User.prototype.validators.pattern(value, User.prototype.patterns.digits);

              }

          },

          // Is able to determine which properties are getting validated by checking to see if properties are equal to null
          validate: function(attrs) {
            
              var errors = this.errors = {};
          
              if(attrs.firstname != null) {
                  if (!attrs.firstname) {
                      errors.firstname = 'firstname is required';
                      console.log('first name isEmpty validation called');
                  }
                  else if(!this.validators.minLength(attrs.firstname, 2)) errors.firstname = 'firstname is too short';
                  else if(!this.validators.maxLength(attrs.firstname, 15)) errors.firstname = 'firstname is too large';
                  else if(this.validators.hasSpecialCharacter(attrs.firstname)) errors.firstname = 'firstname cannot contain special characters';
              }

              if(attrs.lastname != null) {

                  if (!attrs.lastname) {
                      errors.lastname = 'lastname is required';
                      console.log('last name isEmpty validation called');
                  }
                  else if(!this.validators.minLength(attrs.lastname, 2)) errors.lastname = 'lastname is too short';
                  else if(!this.validators.maxLength(attrs.lastname, 15)) errors.lastname = 'lastname is too large';
                  else if(this.validators.hasSpecialCharacter(attrs.lastname)) errors.lastname = 'lastname cannot contain special characters';  

              }

              if(attrs.password != null) {

                  if(!attrs.password) {
                      errors.password = 'password is required';
                      console.log('password isEmpty validation called');
                  }
                  else if(!this.validators.minLength(attrs.password, 6)) errors.password = 'password is too short';
                  else if(!this.validators.maxLength(attrs.password, 15)) errors.password = 'password is too big';
                  else if(!this.validators.hasSpecialCharacter(attrs.password)) errors.password = 'password must contain a special character';
                  else if(!this.validators.hasDigit(attrs.password)) errors.password = 'password must contain a digit';

              }           
              
              if(attrs.email != null) {

                  if (!attrs.email) {
                      errors.email = 'email is required';
                      console.log('email isEmpty validation called');
                  }  
                  else if(!this.validators.isEmail(attrs.email)) errors.email = 'email is not valid';

              }
            
              if(attrs.phone != null) {

                  if(!attrs.phone) {
                      errors.phone = 'phone is required';
                      console.log('phone isEmpty validation called');
                  }
                  else if(!this.validators.isPhone(attrs.phone)) errors.phone = 'phone number is invalid';

              }
          
              if (!_.isEmpty(errors)) return errors;
          }
      });

#Create a Model instance
    var user = new User();

#Set data on your model using the validateAll option
    user.set({ "firstname": "Greg" }, {validateAll: false});

##Unit Tests
All unit tests are written using the Jasmine Framework

##Contributing
Take care to maintain the existing coding style. Add Jasmine unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

If you plan to contribute to `Backbone.validateAll` in the future, keep in mind that you should make sure your code passes the Grunt checks.  If you are on Windows (like me) remember you need to run the grunt command using `grunt.cmd`.  Also, if you have trouble getting the Jasmine Unit Tests to work with the current release of PhantomJS (the current release), install PhantomJS 1.3.

After you have verified your code, send a pull request to the `Backbone.validateAll` dev branch.  After you send a pull request, you will hear back from me shortly after I review your code.

You'll find source code in the "src" subdirectory!

##Forking
If you find that you need a feature that Backbone.validateAll does not currently support, either let me know via the Backbone.validateAll issue tracker, or fork Backbone.validateAll on Github and extend it.

##Change Log

`0.1.0` - August 29, 2012

- Initial Backbone.validateAll release.  Added annotated source code, unit tests, and documentation

**Contributors**

Greg Franko - [@gfranko](https://github.com/gfranko)

## License
Copyright (c) 2012 Greg Franko  
Licensed under the MIT license.
