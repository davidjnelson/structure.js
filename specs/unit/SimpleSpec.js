define(function(require) {
    var Simple = require('Simple'),
        simple;

    describe('Simple', function() {
        beforeEach(function() {
            simple = new Simple();
        });

        it('should be true', function() {
            var result = simple.execute();
            expect(result).toEqual(true);
        });
    })
});
