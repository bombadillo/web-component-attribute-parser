# web-component-attribute-parser

HTML elements (including custom elements) will convert any attributes into lower case. Generally, JavaScript variables are pascal case. This library handles the parsing of attributes on a web component into a format that we would expect within JS.

# Usage

For this example the custom element is `my-element`

# Consuming the web component

You can pass in your attributes as normal:

```html
<my-element my-attribute="my value"></my-element>
```

# Parsing the web component attributes

Import the library

```js
import webComponentAttributeParser from 'web-component-attribute-parser';
```

Create a lookup for mapping the attributes into properties

```js
export default {
  'my-attribute': { property: 'myAttribute' }
};
```

Within your web component you need to call the `parse()` method passing in the web components attributes
and the properties lookup key value pair:

```js
this.props = webComponentAttributeParser.parse(
  this.attributes,
  propertiesLookup
);
```

`this.props` will now have the following value

```js
{
  myAttribute: 'my value';
}
```

# Booleans

To get boolean values passed in you can pass the string equivelant:

```html
<my-element my-boolean-attribute="true"></my-element>
```

The parsed attributes would be returned as

```js
{
  myBooleanAttribute: true;
}
```
