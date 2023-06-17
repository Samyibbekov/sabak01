//console.log("Hallo World"f); - Строчный комент


/*бочный комкент*/


// переменные -  ичине маалымат сактаган сандыкча

/*var name = 'Akzholbek';
var email = 'samyibbekov@gmail.com';
console.log(email)
console.log(name)

// типы данных 
//1 String - техт тырмакча бул стринг болот
//typeof - бул тип данныйды чыгарып берет

/*var name2 = 'kanat';
console.log( typeof name2)

// Методы String - бул переменныйдын ситльин өгөртөт
var name3 = 'Migek';
console.log(name3.repeat(4))
console.log(name3)*/

//Типы данные
//null - импут есть, разработчик сам писваивает
//var address = null
//undefined - не опредлено, программа сам присваивает
//let name;
//console.log(name)

//object
var objectUser = {
   names: 'Malik',
   number: 1332875732,
   address: null,
   isMarried: false,
   Object:{
   undef:undefined
   }
}
console.log(objectUser)
console.log(objectUser.names)
console.log(objectUser.Object.undef)
//методы
objectUser.course = 'It' // добавить
console.log(objectUser)
objectUser['nuber'] = 90  // изминение
console.log(objectUser)
objectUser['Object']["undef"] = 98
console.log(objectUser)
delete objectUser.isMarried // удаление
console.log(objectUser)

console.log(Object.keys(objectUser))//все ключи
console.log(Object.values(objectUser))//все значение
console.log(Object.entries(objectUser))// ключи и значение
console.log(objectUser.hasOwnProperty('names')) // обьектен ключ издесен болот true же false

// Number - число
 
/*var Number = 90;
console.log( typeof Number.toString())


// boolean-true,false
console.log(1<2)
//<,>,<=,>=,===,!=,!===
// === стогий равно, тип данныйларын карап салыштырат
// == не строгий жон гана визуально анализ кылат

var  num1 = 6;
var num2 = "6";
console.log(num1===num2)

// условные конструкции if, else, if else, else
// prompt()- буд окошка, адамдар оз данныйларын сакташ учун
// ||- или, && -и 
// toLocaleLowerCase() - жазылган данныйлардын окшоштугуна карап гана анализ кылыт

/*var userLogin = 'akzholbek'
var userpassword = '0101200ak'

var login = prompt('Enter your login').toLocaleLowerCase()
var password = prompt('Enter your password')

if(userLogin === login && userpassword === password){
   alert('Welcome!')
}else{
   alert('Sorry, have a nice day')
}*/

/*var nameUsrer = prompt('Ваше имя')
var surnameUser = prompt('Ваше фамилия')
var ageUser = prompt('Ваш возраст')
 
if(ageUser <= 18){
   console.log('Привет'+ nameUsrer)
} else if( ageUser >= 19 && ageUser <= 65){
 console.log('Здраствуйте'  + ' ' +   surnameUser+ ' ' + nameUsrer)
} else if (ageUser >= 66 && ageUser <= 85 ){
   console.log('Добро пожаловать' +  ' '   + surnameUser+ ' ' + nameUsrer )
  } else{
   console.log('произашло ошибка, вщзрас можно ввадить только до 85!')
  }*/
  
  // length- бул тексти номер кылып берет. возрашает длину вде числа
  // console.error() - бул консольдогу катаны таап берет
  
 /* var inn = '01810100107809'
  var firsNum = Number (inn [0])
  if ((firsNum === 1 || firsNum === 2 || firsNum === 0 ) && inn.length === 14){
   console.log('ИНН найден')
  }else{
   console.error("ИНН не найден")
  }*/

// switch..case
// break - бул коддорду бузат, андан кийин код иштебейт
// default — невыполнение обязательств
/*var dey = '';
switch(new Date().getDay()){
case 1:
   dey = 'Понедельник'
   break
case 2:
   dey = 'Вторник'
   break  
case 3:
    dey = 'Среда'
   break
case 4:
   dey = 'Четверг'
   break
case 5:
   dey = 'Пятница'
   break
case 6:
   dey = 'Суббота'
   break
case 7:
   dey = 'Воскресеньие'
   break
   default:
      console.log('error')
}
console.log(dey)*/

/*var euSize = 'M';
switch(euSize){
case 's':
   console.log('42')
     break
case 'M':
   console.log('44')
   break
case 'L': 
   console.log('46')
   break
default:
   console.log('unknow size')
}*/

// методы Массива 
// 1.push - добавление в конец. стринге же санга.
// 2.concat - не мутирует, баштапкы абалын алсак болот 
// 3.unshift - Мутирует, маалымат кошот. болгону стрингге же санга.
// 4.pop - стрингдин же нумбердин эң акыркы бир элементин өчүрөт.
// 5.join - бул метод массивди страка кылып берет б.а стринг

/*var Number = [1,3,4,5,6]
Number.push(7,8)
console.log(Number)

var newArr = Number.concat([0,0])
console.log(newArr)
console.log(Number)

Number.unshift(3)
console.log(Number)

var lastNum = Number.pop()
console.log(Number)
console.log(lastNum)

var joinNum = Number.join()
console.log(joinNum)*/

//Циклы
// 1. while - true колдонуп бесконечно цикл кылсак болот
// 2. for - бул циклда бир гана i колдуналат
// includes - эки тексти аналис кылып жатканда окшоштук бар экенин же жок экенин чыгарып берет.
// console.warn() записывает предупреждение на консоль
// continue - продалжает, стрингти же нумберди. Брейктин  карама каршысы.
// length - Стракада канча тамга бар экекнин чыгарып берет
//1
/*var count = 0;
//count = count + 1 
//count += 1
//count ++
/*while(count <= 20){
   console.log(count)
   count++
}*/
 
//2
/*for(var i = 0; i <= 20; i++){
   console.log(i)
}*/

/*var names = ['Sultn','Bektur' , 'Akyl', 'Malik','Ali']
var blacklist = ['aiken', 'bektur', 'adella', 'malik']
for (var i = 0; i < names.length; i++ ){
   if(blacklist.includes(names[i].toLocaleLowerCase())){
   console.warn(`${names[i]} в черном списке`)

   continue
}
console.log (`кош келдиңиз ${names[i]}`)
}*/

// git hup
//1. git init
//2. git add. пронекте катталган баардык папкаларды, файлдарды кошуп берет.
//3. git commit -m ""  коментарий кошсоң 
//4. git branch - дефолт боюнча  main либа  master чыгарып берет
//5. git remote add origin -сслка коюлат githup
//5. git puch origin-main je master 
