Backbone.validateAll
====================

![Example](http://3.bp.blogspot.com/-JFOJ-k6tLnA/TsiKgBYPvqI/AAAAAAAAAT8/dGXeu0LeuTE/s320/backbone-js-logo.png)

Backbone.js plugin that provides an option to only validate Model properties that are currently being set or saved
------------------------------------------------------------------------------------------------------------------

A small Backbone.js plugin that originated from a failed Backbone.js [pull request](https://github.com/documentcloud/backbone/pull/1595).

**Background**

This plugin originated out of frustration with using the Backbone.js Model `validate` method when validating HTML forms.  Since Backbone.js v0.9.1 and greater, Backbone Model validation was not made to elegantly handle form validation, since the default `validate` method will validate all Model attributes, regardless of what particular attribute is being **set** or **saved**.  For certain use cases, it is necessary to only validate a certain Model property (or form field) without worrying about the validation of any other Model property (or form field).

Backbone core contributor, [@braddunbar](https://github.com/braddunbar), presented a possible solution for this use case in the above mentioned [pull request](https://github.com/documentcloud/backbone/pull/1595), but it still involved calling all of the validation methods within the `validate()` method, which can negatively affect performance.

Here is a [jsPerf Test](http://jsperf.com/backbone-validateall) showing the performance benefits when setting Backbone Model attributes with and without Backbone.validateAll.

Backbone.validateAll allows you to know which Model property is being set/saved during the validation process.

##Who Should Use This

Anyone who wants an **option** to validate only Model properties that are currently being set/saved instead of the entire Model.  An obvious use case for this is form validation.

**Note**: The plugin does not override the default Backbone.js Model validation behavior (all Model attributes are validated whenever an attribute is saved/set on a Model) by default.  You need to pass the **validateAll** option when setting/saving Model attributes.

##Dependencies
[Backbone](http://www.backbonejs.org)

##Getting Started

#Include Backbone (and all of its dependencies) and the Backbone.validateAll plugin
    <script src='http://code.jquery.com/jquery.js'></script>
    <script src='http://underscorejs.org/underscore.js'></script>
    <script src='http://backbonejs.org/backbone.js'></script>
    <script src='http://gregfranko.com/javascripts/Backbone.validateAll.js'></script>

#Set Up a Backbone Model and Validate Method
      // Creates a User Model
      var User = Backbone.Model.extend({

          // Is able to determine which properties are getting validated by checking to see if properties are equal to null.  Below are a few examples.
          validate: function(attrs) {

          	if(attrs.firstname != null) {
          		// Your logic goes here
          	}

          	if(attrs.lastname != null) {

          	}
            
          }

      });

#Create a Model instance
    var user = new User();

#Set data on your model using the validateAll option
    // The validateAll option makes sure that only the Model attributes that you are setting get passed to the validate method
    user.set({ "firstname": "Greg" }, {validate: true, validateAll: false});

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

`0.3.0` - April 5, 2013

- Upgraded to support **Backbone v1.0.0**

`.0.2.0` - January 23, 2013

- Upgraded to support **Backbone v0.9.10**
- Fixed demo bug [#2](https://github.com/gfranko/Backbone.validateAll/issues/2)

`0.1.0` - August 29, 2012

- Initial Backbone.validateAll release.  Added annotated source code, unit tests, and documentation

**Contributors**

Greg Franko - [@gfranko](https://github.com/gfranko)

## License
Copyright (c) 2012 Greg Franko  
Licensed under the MIT license.
