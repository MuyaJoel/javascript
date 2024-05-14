let obj ={};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
//The output for "console.log(obj[1])" is "String One" because the first input is updated by the second entry 
console.log(obj['1'])
//The output for "console.log(obj['1'])" is "String One" because it's the latest updated value of the variable.
console.log(obj[1] === obj['1'])
//The output will will be True because the index passed without quotes "obj[1]" and the one passed with quotes "obj['1']" is the same
//meaning that in javascripts they all refer to the same thing.