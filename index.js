const assert = require('assert');

it('Hello world', function () {
  const text = 'WORLD';
  assert.equal(`Hello ${text.toLocaleLowerCase()}`, 'Hello world');
});
