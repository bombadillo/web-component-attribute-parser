const parse = (attributes, propertyLookup) => {
  let props = {};

  for (let attribute of attributes) {
    let property = propertyLookup[attribute.name];

    if (property) {
      let propertyName = propertyLookup[attribute.name].property;

      props[propertyName] = parseAttributeValue(attribute);
    }
  }

  return props;
};

const parseAttributeValue = attribute => {
  if (attribute.value === 'true') {
    return true;
  } else if (attribute.value === 'false') {
    return false;
  } else {
    return attribute.value;
  }
};

export default {
  parse: parse
};
