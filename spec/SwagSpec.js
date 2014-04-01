describe('dat jasmine swag', function(){
	it('passes if container and subset are empty', function() {
        expect({}).toContain({});
    });

    it('passes if container equals subset', function() {
        var container = {};
        expect(container).toContain(container);
    });
 
    it('passes if container contains all subset members', function() {
        var subset = {
            k1: 'v1'
        };
        var container = {
            k1: 'v1',
            k2: 'v2'
        };
        expect(container).toContain(subset);
    });

    it('does not pass if subset is undefined', function() {
        expect({}).not.toContain(undefined);
    });
 
    it('does not pass if container does not contain all subset members', function() {
        var container = {};
        var subset = {
            key: 'value'
        };
        expect(container).not.toContain(subset);
    });
 
    it('does not pass if container contains same keys with different values', function() {
        var subset = {
            k1: 'v3'
        };
        var container = {
            k1: 'v1',
            k2: 'v2'
        };
        expect(container).not.toContain(subset);
    });
 
    it('does not pass if container and subset are both not defined', function() {
        expect(undefined).not.toContain(undefined);
    });
 
    it('does not pass if subset is not key/value', function() {
        expect({}).not.toContain(2);
        expect({}).not.toContain(true);
        expect({}).not.toContain([]);
        expect({}).not.toContain(parseInt);
        expect({}).not.toContain("abc");
    });
 
    it('does not pass if container is not key/value', function() {
        var subset = {
            k: 1
        };
        expect(2).not.toContain(subset);
        expect(false).not.toContain(subset);
        expect([]).not.toContain(subset);
        expect(parseInt).not.toContain(subset);
        expect("abc").not.toContain(subset);
    });
});
