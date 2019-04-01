"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var parse = function parse(attributes, propertyLookup) {
  var props = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var attribute = _step.value;
      var property = propertyLookup[attribute.name];

      if (property) {
        var propertyName = propertyLookup[attribute.name].property;
        props[propertyName] = parseAttributeValue(attribute);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return props;
};

var parseAttributeValue = function parseAttributeValue(attribute) {
  if (attribute.value === 'true') {
    return true;
  } else if (attribute.value === 'false') {
    return false;
  } else {
    return attribute.value;
  }
};

var _default = {
  parse: parse
};
exports.default = _default;