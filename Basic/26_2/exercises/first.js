
function math(a, b, c) {
    return new Promise((resolve, reject) => {
      const result = (a + b) * c
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
         return reject('Only numbers, please')
    }
      else if (result < 50) {
          return reject('Valor muito baixo')
      }
    resolve(result)
  });
}

// math(100, 50, 2)
//   .then (resolve => console.log(resolve))
//   .catch (error => (error))

// math(1, 2, a)
//     .then (resolve => console.log(resolve))
//     .catch (error => (error))

math(1, 2, 3)
    .then (resolve => console.log(resolve))
    .catch (error => console.log(error))