const assert = require('assert');

describe('Hello world', () => {
  it('Name is lowercased in the greeting.', () => {
    const name = 'World';
    const greeting = `Hello ${name.toLocaleLowerCase()}`;
    assert.equal(greeting, 'Hello world');
  });
});
