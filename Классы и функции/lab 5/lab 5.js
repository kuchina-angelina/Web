const mainUl = document.getElementById("palindrom")
function checkString(string){
    string = document.getElementById("string").value

        str = string.toLowerCase().split(" ") // Удаляем все пробелы и приводим строку к нижнему регистру
        var newString = ''
        for (let i = 0; i < str.length; i++){ //добавляем нашу переданную строку в новую переменную, с этой переменной будем сравнивать
            newString = newString + str[i]
        }        
        const reversedStr = Array.from(newString).reverse().join('') //получаем перевернутую строчку
        

        if (newString == reversedStr){ //проверка на палиндром
            var rows = "<div id = result>"
            rows += "<ul class = 'list-group'><li class = 'list-group-item list-group-item-warning'>  " + string + " - палиндром</li></ul>"
            rows += "</div>"   
            var li = document.createElement("li");
            li.innerHTML = rows  //Создается элемент li и добавляется в него содержимое filmRow
            mainUl.appendChild(li)  
        }
        else{
            var rows = "<div id = result>"
            rows += "<ul class = 'list-group'><li class = 'list-group-item list-group-item-warning'>'  " + string + " '- не палиндром</li></ul>"
            rows += "</div>"   
            var li = document.createElement("li");
            li.innerHTML = rows  
            mainUl.appendChild(li)  

        }

}

const sq = document.getElementById("square")
//числа должны быть введены через пробел 
function square(){
    nums = document.getElementById("num").value
    nums = nums.split(" ")
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        el = parseInt(nums[i])
        console.log(nums[i])
        if( el < 0){
            nums[i] = el * el
        }
    }
    var rows = "<div id = result>"
    rows += "<ul class = 'list-group'><li class = 'list-group-item list-group-item-warning'> Массив после преобразований: [" + nums + "]</li></ul>"
    rows += "</div>"   
    var li = document.createElement("li");
    li.innerHTML = rows  
    sq.appendChild(li)  

}

class User {
    constructor(name) {
      this.name = name;
    }
    showName() {
      const element = document.createElement('div');
      element.textContent = ` ${this.name}`;
      document.body.appendChild(element);
    }
  }

function addUser(){
    const names = document.getElementById("name").value
    const user = new User(names)
    user.showName() 
}

class User2 {
    constructor(name) {
        this.name = name;
    }
        
    sayHello() {
    //   console.log(`Привет, ${this.name}!`)
      const element = document.createElement('div')
      element.textContent = `Привет, ${this.name}!`
      document.body.appendChild(element);
        }
  }

function rewrite(){
    const user = new User2('Вася')
    user.sayHello()
}

class Name {
    constructor(name) {
        this.name = name;
    }

    reverseName(){
        const element = document.createElement('div')
        const reversed = Array.from(this.name).reverse().join('')
        element.textContent = reversed
        document.body.appendChild(element);
    }
}

function reverse(){
    const name = document.getElementById("normalName").value
    const n = new Name(name)
    n.reverseName(n) 

}






  