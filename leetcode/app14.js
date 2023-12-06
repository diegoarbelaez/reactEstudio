//implement the method closestToZero, if two numbers are closest to zero, the positive positive number must be returned

let arr = [8, 2, 10, 3, -9, 4, -2, -8];

function closestToZero(arr) {
    let closest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(closest)) {
        closest = arr[i];
        } else if (Math.abs(arr[i]) === Math.abs(closest)) {
        closest = Math.abs(closest);
        }
    }
    return closest;

}

console.log(closestToZero(arr));
