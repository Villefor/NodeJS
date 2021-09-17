function divideAndConquer (num, num2) {

    const promise = new Promise ((resolve, reject) => {
        if (num2 === 0) {
            reject(new Error ("cant divide for 0")
        )}

        const result = num / num2
        resolve(result)
    })
    return promise
}
divideAndConquer(2, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log("error: %s", error.message))