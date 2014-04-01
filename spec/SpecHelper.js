
function isKeyValue(object) {
    return object && _.isObject(object) && !_.isArray(object) && !_.isFunction(object);
}

beforeEach(function () {
  jasmine.addMatchers({
    toBeContainedWithin: function() {
      return {
        compare: function(subset, container) {
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
