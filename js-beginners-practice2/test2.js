const testBigIntInput = prompt('Input bigInt', '');

testBigInt = +testBigIntInput;


    console.log(typeof(testBigInt));

    const obj1 = {};
    obj1.key1 = 'true';
    obj1.key2 = 23;
    obj1.key3 = 'solo';
    
    const arr1 = [];
    arr1[0] = 'el1';
    arr1[1] = 'el2';
    arr1[2] = 'el3';
    
    const arr2 = new Array('elm1', 'elm2', 'elm3');
    
    let variable1 = arr2[0];
    
    console.log(obj1);
    console.log(obj1.key3);
    console.log(arr1);
    console.log(arr2, variable1);
    
    const obj3 = {};
    // for (let i = 1; i < 35; i++) {
    //     i1 = i.toString;
    //     obj3.i1 = i;
    // }
    obj3.key1 = 'first';
    
    obj3.key2 = 'second';
    console.log(obj3);
    
    console.log('-----------------');
    
    const arr3 = ['Audi', 'BMW', 'Opel'];
    arr3.push('ZAZ');
    
    arr3[1] = 'Polo';
    console.log(arr3);
    
    console.log('-----------------');
    
    function func1() {
        return 'It works.';
    }
    
    console.log(func1());


