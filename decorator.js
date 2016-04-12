var helpers = require('candycane/lib/decorators/action-hook-helpers');
var addToTargetAfterHooks = helpers.addToTargetAfterHooks;
var Mapper = require('jsonapi-mapper');

module.exports = function jsonApiMapper (type) {
  return function (target) {
    const mapper = new Mapper.Bookshelf();

    addToTargetAfterHooks(target, function(data) {
      return mapper.map(data, type);
    });
  };
}
