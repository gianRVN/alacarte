class Container {
  /**
   * 
   * Hint, choose proper data type for storing product item
   */
  constructor(data) {
    this.storage = data; 
  }


  get(productId = null) {
    /**
     * Dont remove this setTimeout, assume there is an I/O delay to get the result of querying the storarage.
     * Offcourse you can modify the code, but the return value must be call inside setTimeout.
     */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.storage) {
          const product = this.storage
            .filter(product => product.productId === productId);
          resolve(product);
        } else {
          reject("Data Belum Ada")
        }
      }, 1000)
    })
  }

  put({ productId, qty }) {
    /**
     * Add new item if productId not already exist either way update qty
     */
    if(this.storage.some(item => item.productId === productId)){
      const index = this.storage.findIndex(x => x.productId === productId);
      this.storage[index].qty = qty
    } else {
      this.storage.push({productId, qty})
    }
  }

  delete(productId) {
    const temp = this.storage.filter(function(el) {
      return el.productId != productId
    })
    this.storage = temp
  }
}

module.exports = Container

