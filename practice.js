/*const Team= "Obj Web Doc!";
console.log ('hello from %s',Team);
const dance= "love you!";
console.log('I %s', dance)
console.info("am now a developer"); // i don learn o
console.log('console using table!')
/*const dogs= [
{Name: "ekuke", color: "black", age: "30" },
{Name: "chiwawa", color: "white", age: "34"},
]
console.table (Dogs)*/

/*const dogs= [
    {name: 'ekuke', color: 'black', age: '30'},
    {nam: 'chiwawa', color: 'white', age: '43'},
    ];
    console.table(Dogs)
*/
//let brownBox= "sugar"
//console.log(brownBox)

/*function  greet (){
    let x = 5<5
    return x
}
console.log(greet())


*/
let customerName = prompt('Enter your full name')
let customerAddress = prompt`${customerName},Enter his house address`
let customerAge = prompt`${customerName}, How old are you? :`
let istTimeDriver = prompt`${customerName}, is it your first time driving?: `
if(customerAge<18){
console.log('sorry not qualified to drive, Engine stops')
}
else{
console.log(`congratulation,${customerName}, you can drive`)
}