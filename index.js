const assert = require('assert');

describe('Hello world', () => {
  it('greets and converts name to lowercase letters', () => {
    const name = 'World';
    const greeting = `Hello ${name.toLocaleLowerCase()}`;
    assert.equal(greeting, 'Hello world');
  });
});
