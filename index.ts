let age: number = 49
let firstName: string="Jonathan"
let isTeaching:boolean=false


const classes: string[]=['javascript', "typescript"]
const NumberOfStudents: number[]=[23,24,22]
NumberOfStudents.push(age)


console.log(NumberOfStudents)
// console.log('hello typrscript',age)


enum TaxForms{
    incomeTax=1099,
    childCare=244,
    bitcoinLoss=420,
    richDude=378,
}
 const WhichTaxForm=TaxForms.incomeTax
//  console.log('use tax form: ', WhichTaxForm)

let postalCode: number | string ='lp3-33486'
postalCode=33333
// console.log(postalCode)

function findIndex(index:number,arr:number[]):number{

    return arr[index]
}
// console.log(findIndex(1,NumberOfStudents))

function log(msg:any): void {
    console.log(msg)
}

let finalNumber:number =findIndex(1,NumberOfStudents)
// log(finalNumber+1)
const complexObject: any ={name:"Damian", height:'yes please',age:49}

interface human{
    name:string,
    height:string,
}
interface Teacher extends human{
    age:number,
    weight?:string
}
const complexObject2: Teacher ={name:"Damian", height:'yes please',age:49}

function displayteacher(teacher:Teacher): string{
return `This teacher is ${teacher.age} old`
}
console.log(displayteacher(complexObject2))

console.log(complexObject2)