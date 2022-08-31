const name = 'JS'

const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

const getTransformedArray = (arr, func) => {
    newArr = [];

    const transformItem = (el) => {
        newArr.push(func(el))
    }

    forEach(arr, transformItem);

    return newArr;
}

const square = (num) => num * num

const res = getTransformedArray([1, 2, 3], square);

console.log(res);





