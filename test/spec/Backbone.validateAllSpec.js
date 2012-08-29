describe('Backbone.validateAll Plugin', function () {

    beforeEach(function() {

        // Set up Backbone Model
        User = Backbone.Model.extend({

        	validate: function(attrs) {

                this.currentAttrs = attrs;

        	}

        });

        user = new User();

    });

    it("should pass validate the entire Model by default", function() {

        user.set({ "firstname": "Greg" });

        expect(_.keys(user.currentAttrs).length).toEqual(1);

        user.set({ "middlename": "Paul" });

        expect(_.keys(user.currentAttrs).length).toEqual(2);

        user.set({ "lastname": "Franko" });

        expect(_.keys(user.currentAttrs).length).toEqual(3);

    });

    it("should validate only the entire Model when setting the new validateAll attribute to true", function() {

        user.set({ "firstname": "Greg" }, {validateAll: true});

        expect(_.keys(user.currentAttrs).length).toEqual(1);

        user.set({ "middlename": "Paul" }, {validateAll: true});

        expect(_.keys(user.currentAttrs).length).toEqual(2);

        user.set({ "lastname": "Franko" }, {validateAll: true});

        expect(_.keys(user.currentAttrs).length).toEqual(3);

    });

    it("should validate only the Model attributes that are getting set when setting the new validateAll attribute to false", function() {

        user.set({ "firstname": "Greg" }, {validateAll: false});

        expect(_.keys(user.currentAttrs).length).toEqual(1);

        user.set({ "middlename": "Paul" }, {validateAll: false});

        expect(_.keys(user.currentAttrs).length).toEqual(1);

        user.set({ "lastname": "Franko" }, {validateAll: false});

        expect(_.keys(user.currentAttrs).length).toEqual(1);

        user.set({ "lastname": "Franko" });

        expect(_.keys(user.currentAttrs).length).toEqual(3);

    });

});