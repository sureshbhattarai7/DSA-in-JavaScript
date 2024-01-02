//Allows to call the function directly without creating an instances.

class MathHelper{
    static calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
}

const radius = 5;
const area = MathHelper.calculateCircleArea(radius);
console.log(area);

// Here, 'calculateCircleArea' is static method within the 'MathHelper' class
// You don't need to create an instance of 'MathHelper' to use this method.
// Instead we can directly call it on the class itself.