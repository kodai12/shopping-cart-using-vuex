/**
 * Mocking client-server processing
 */
const _products = [
  {'id': 1, 'title': 'iPad 4 mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'H&M T-Shirt white', 'price': 10.09, 'inventory': 10},
  {'id': 3, 'title': 'Apple Watch', 'price': 200.01, 'inventory': 6}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
