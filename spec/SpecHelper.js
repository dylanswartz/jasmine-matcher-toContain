function isKeyValue(object) {
    return object && _.isObject(object) && !_.isArray(object) && !_.isFunction(object);
}

beforeEach(function () {
  jasmine.addMatchers({
    toContain: function() {
      return {
        compare: function(container, subset) {
          var isContained;
          if (!isKeyValue(container) || !isKeyValue(subset)) {
              isContained = false;
          } else {
            var compare  = _.matches(subset);
            isContained  = compare(container);
          }
          return {
            pass: isContained
          };
        }
      };
    }
  });
});
