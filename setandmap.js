const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);

console.log("Set:");
mySet.forEach(value => {
    console.log(value);
});

const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'Boolean Key');

console.log("Map contains:");
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
