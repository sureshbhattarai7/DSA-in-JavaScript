function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    };
    return total;
}

console.log(sum([9, 10, 2]));

//Here, total number of variables are 2(total, i).
//It will not increase no matter the input.
//Therefore, the big O for space complexity if O(1).