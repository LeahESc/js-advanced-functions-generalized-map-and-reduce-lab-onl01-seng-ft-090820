// Add your functions here

function map(array, func) {
    let arr = [] 
    for(let i = 0; i < array.length; i++) { 
      arr.push(func(array[i]))
    }
    return arr
}

function reduce(array, func, startingPoint=0) { 
    let result = (!!startingPoint) ? startingPoint : array[0] 
    let i = (!!startingPoint) ? 0 : 1 
    for(; i < array.length; i++) {
        result = func(array[i], result)
    }
    return result
}