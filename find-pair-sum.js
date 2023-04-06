// [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

function calculate(array, sum) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                result.push({[array[i]]:array[j]})
            }
        }
    }
    return result;
}
console.log(calculate([80, 60, 10, 50, 30, 100, 0, 50],100))
