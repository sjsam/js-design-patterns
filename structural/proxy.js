// Create an object to be proxied
const realObject = {
  property: 'This is the real object property value'
};

// Define a proxy object
const proxyObject = new Proxy(realObject, {
  get: function(target, property) {
    console.log(`Getting ${property} from the proxy object`);
    return target[property];
  },
  set: function(target, property, value) {
    console.log(`Setting ${property} on the proxy object`);
    target[property] = value;
  }
});

// Access the property of the real object through the proxy object
console.log(proxyObject.property); // Outputs "Getting property from the proxy object" and "This is the real object property value"

// Set the property of the real object through the proxy object
proxyObject.property = 'This is a new value';
console.log(realObject.property); // Outputs "Setting property on the proxy object" and "This is a new value"
