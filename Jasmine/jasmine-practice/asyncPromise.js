function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if (isNaN(a) || isNaN(b)) {
        reject('Both inputs must be numbers');
      } else {
        resolve(a + b);
      }
    });
  }
  
  module.exports = { addAsync };
  