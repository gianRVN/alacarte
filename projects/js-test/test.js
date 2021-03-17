const Container = require('./container');
/**
 * Unit test goes below
 * We Use Jest https://jestjs.io/ to help us for the test runner
 */

describe('Test class container', () => {
  test('testing Class Container import', () => {
    const c = new Container([
      { productId: '01', qty: 1 }
    ]);
    console.log(c);
    expect(c).toBeTruthy;
  });

  /**
   * test container.get()
   * test if we have instant of Container which contain item of {productId: '01', 1}
   * when we call get, assert it returning equal {productId: '01', 1}
   */
   test('testing Class Container GET', () => {
    const c = new Container(
      { productId: '01', qty: 1 }
    )
    expect(c.get("01")).resolves.toBe({productId: '01', qty: 1});
  });


  /**
  * test container.put()
  * test if we put item of {productId: '01', 1}
  * assert it returning equal to {productId: '01', 1}
  */

   test('testing Class Container PUT', () => {
    const c = new Container(
      [{ productId: '01', qty: 1 }]
    )
    c.put({productId: '01', qty: 1})
    expect(c.storage).toEqual([{productId: '01', qty: 1}]);
  });

  /**
  * test container.delete()
  */

   test('testing Class Container DELETE', () => {
    const c = new Container(
      [{ productId: '01', qty: 1 }]
    )
    c.delete("01")
    expect(c.storage).toEqual([]);
  });
});
