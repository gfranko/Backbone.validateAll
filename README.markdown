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

##Dependencies
[Backbone](http://www.backbonejs.org)
[Lodash](http://www.lodash.com)

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
