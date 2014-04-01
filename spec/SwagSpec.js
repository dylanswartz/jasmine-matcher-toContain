describe('dat jasmine swag', function(){

	it('passes if container and subset are empty', function() {
        expect({}).toBeContainedWithin({});
    });

    it('passes if container equals subset', function() {
        var container = {};
        expect(container).toBeContainedWithin(container);
    });
 
    it('passes if container contains all subset members', function() {
        var subset = {
            k1: 'v1'
        };
        var container = {
            k1: 'v1',
            k2: 'v2'
        };
        expect(subset).toBeContainedWithin(container);
    });

    it('does not pass if subset is undefined', function() {
        expect(undefined).not.toBeContainedWithin({});
    });
 
    it('does not pass if container does not contain all subset members', function() {
        var container = {};
        var subset = {
            key: 'value'
        };
        expect(subset).not.toBeContainedWithin(container);
    });
 
    it('does not pass if container contains same keys with different values', function() {
        var subset = {
            k1: 'v3'
        };
        var container = {
            k1: 'v1',
            k2: 'v2'
        };
        expect(subset).not.toBeContainedWithin(container);
    });
 
    it('does not pass if container and subset are both not defined', function() {
        expect(undefined).not.toBeContainedWithin(undefined);
    });
 
    it('does not pass if subset is not key/value', function() {
        var container = {
            k: 1
        };
        expect(2).not.toBeContainedWithin(container);
        expect(false).not.toBeContainedWithin(container);
        expect([]).not.toBeContainedWithin(container);
        expect(parseInt).not.toBeContainedWithin(container);
        expect("abc").not.toBeContainedWithin(container);
    });
 
    it('does not pass if container is not key/value', function() {
        expect({}).not.toBeContainedWithin(2);
        expect({}).not.toBeContainedWithin(true);
        expect({}).not.toBeContainedWithin([]);
        expect({}).not.toBeContainedWithin(parseInt);
        expect({}).not.toBeContainedWithin("abc");
    });
});