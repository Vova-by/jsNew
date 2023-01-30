// 1 Переменные
// const firstName = 'Vladlen'
//const lastName = 'Minin' //string
// const age = 26 //number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// 2 Мутирование
// console.log('Имя человека:' + firstName + ', а возраст человека: ' + age)
// const lastName = prompt('введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
 // let currentYear = 2020
 // const birthYear = 1993

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 32

// c = c+a
// c-= a
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(currentYear)
// console.log(c)

// 4 ТИпы данных

// const isProgrammer = true
// const name = 'Vladlen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// Приоритет оператора

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
//  

// const num1 = 42
// const num2 = '42'
// console.log(num1===num2)

// const isReady = false

// if (isReady === true) {
//    console.log('Все готово')
// } else {
//    console.log ('Все не готово')
// }

// // Тернарное выражение
// isReady ? console.log('готово') : console.log('не готово')

// 7 Булевая логика
// 8 Функции

// function calculateAge(year) {
//    return 2020 - year
// }

// const myAge = calculateAge(1993)
// console.log(myAge)

// console.log(calculateAge(1993))
// console.log(calculateAge(2019))
// console.log(calculateAge(1999))

// function logInfoAbout(name, year) {
//    const age = calculateAge(year)

//    if (age > 0) {
//       console.log('Человек - ' + name + ' Возраст: ' + age)
//    } else {
//       console.log('This is Future')
//    }   
// }

// logInfoAbout ('Vlad', 1993)
// logInfoAbout ('Elena', 1995)
// logInfoAbout ('Vlad', 2022)

// 9 Массивы

// const cars = ['Мазда', 'Мэрс', 'Форд']
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// console.log(cars[0])
// cars[cars.length] = 'Mazda'
// console.log(cars)
 
// 10 Циклы

// const cars = ['Мазда', 'Мэрс', 'Форд']

// for (let i = 0; i<cars.length; i++) {
//    const car = cars[i]
//    console.log(car)
// }

// for (let car of cars) {
//    console.log(car)
// }


// 11 Обьекты

// const person = {
//    firstName: 'Vlad',
//    lastName: 'Minin',
//    year: 1993,
//    languages: ['ru', 'En', 'De'],
//    hasWife: false,
//    greet: function(){
//       console.log('greet from person ')
//    }
// }

// console.log(person.firstName)
// console.log(person['firstName'])
// const key = 'year'
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// console.log(person[key])

 






// 1 Number

// const a = 42 // integer
// const b = 42.42 // float
// const c = 10e3 // pow

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 2e53-1', Math.pow(2, 53) - 1)

// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)

// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2/0', 2/0)
// console.log(Number.NaN) //Not a Number
// console.log(typeof NaN)
// const weird = 2 / undefined 
// console.log(isNaN(weird))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(Number.parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2)
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// const a = 0.4 + 0.2
// console.log(a)
// console.log(typeof a)
// console.log(+a.toFixed(1))
// console.log(typeof a.toFixed(1))

// 2 BigInt
// console.log(111111111111111111111n - 11111111111111111111n)

// console.log(10n - 4) //error
// console.log(parseInt(10n) - 4)
// console.log(5n / 2n)

// 3 Maht

// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 13, 52, 422))
// console.log(Math.min(42, 12, 13, 52, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.random())
 
 // 4 Example
// function getRandomBetween(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10, 42))


// Lesson 5 (Строки)
// const name = 'Vlad'
// const age = 30

// function getAge() {
//    return age
// }

// const output = `hello, my name is ${name} and i ${age} years old.`
// const output = `hello, my name is ${name} and i ${age <= 30 ? 'A' : 'B'} years old.`

// console.log(output)

// const output = `
//  <div>This is div</div>
//  <p>this is p</p> 
// `
// console.log(output)

// const name = 'Vlad'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.indexOf('lad'))
// console.log(name.startsWith('vla'))
// console.log(name.toLowerCase().startsWith('vla'))
// console.log(name.endsWith('ad'))
// const string = '     password     '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
   if (age < 0){
      age = 'Еще не родился'
   }
   return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Влад'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge} лет.`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2} лет.`

console.log(output)
console.log(output2)







