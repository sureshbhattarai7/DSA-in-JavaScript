function addUpTo(number) {
    let total = 0;
    for (let i = 1; i <= number; i++){
        total = total + i;
    };
    return total;
};

console.log(addUpTo(3));

//Here, total number of operations is n. The operations will be increased with the increasement of number.
//Therefore, Big O notation for time complexity is O(n).