const assert = require('assert');

describe('Hello world', () => {
  it('Name is lowercased in the greeting.', () => {
    const name = 'World';
    const result = `Hello ${name.toLocaleLowerCase()}`;
    assert.equal(result, 'Hello world');
  });
});
