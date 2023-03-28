const areSimilar = require('./problems/areSimilar')
const arrayChange = require('./problems/arrayChange')
const palindrome = require('./problems/palindomeRearranging')
const sequence = require('./problems/sequenceChars')
const containedString = require('./problems/containedString')
const arrayMaximal = require('./problems/arrayMaximal')

console.log(areSimilar([1,2,3],[1,2,3]));//true
console.log(areSimilar([1,2,3],[2,1,3])); //true
console.log(areSimilar([1,2,2],[2,1,1]));//false
console.log(areSimilar([1,2,1,2],[2,2,1,1])); //true
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]));//false


console.log(arrayChange([1,2,3,4])); //0 moves -> 1,2,3,4
console.log(arrayChange([1,1,1])); //3 moves -> 1,2,3
console.log(arrayChange([-1000,0,-2,0])); //5 moves -> -1000,0,1,2
console.log(arrayChange([2,1,10,1])); //12 moves -> 2,3,10,11
console.log(arrayChange([2,3,3,5,5,5,4,12,12,10,15])); //13 moves -> 2,3,4,5,6,7,8,12,13,14,15



console.log(palindrome('azzz yZzzy')); //true
console.log(palindrome('aabb')); //true -> correct
console.log(palindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')); //false
console.log(palindrome('abbcabb'));//true
console.log(palindrome('zyyzzzzz')); //true
console.log(palindrome('abca'));//false
console.log(palindrome('abdhuierf'))//false
console.log(palindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa'));//false



console.log("************ Sequence **************");
console.log(sequence('()')); //true
console.log(sequence('()[]{}')); //true
console.log(sequence('(]')); //false
console.log(sequence('([)]')) //false
console.log(sequence('{[]}')); //true


console.log("************ ContainedString **************");
console.log(containedString('abc','abdbca')); //1
console.log(containedString('ab','abcbcbadrazklb')); //3


console.log("************ Array Maximal Adjacent Difference **************");
console.log(arrayMaximal([2,4,1,0])); //3
console.log(arrayMaximal([-1, 1, -3, -4])); //4