/**
let dict = ['apple', 'banana', 'cranberry', 'strawberry']

$ simpleAutocomplete('app')
$ ['apple']

$ simpleAutocomplete('berry')
$ ['cranberry', 'strawberry']

$ simpleAutocomplete('fart')
$ []
*/

const dict = ["apple", "banana", "cranberry", "strawberry"];

const simpleAutocomplete = (string) => dict.filter((e) => e.includes(string));

console.log(simpleAutocomplete("app"));
console.log(simpleAutocomplete("berry"));
console.log(simpleAutocomplete("fart"));
