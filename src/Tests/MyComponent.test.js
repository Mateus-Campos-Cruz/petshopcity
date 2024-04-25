const assert = require('chai').assert;
const MyComponent = require('../src/App.js');

describe('App', function() {
  it('deve retornar true se o componente estiver funcionando corretamente', function() {
    const myComponent = new MyComponent();
    assert.isTrue(myComponent.isWorking());
  });
});
