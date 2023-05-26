const task1 = document.getElementById("task1")
let user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    var rows = "<div id = sayHi>"
    rows += `Hello, ${user.name}`
    rows += "</div>"   
    var li = document.createElement("li");
    li.innerHTML = rows  
    task1.appendChild(li)  
};

function printHi() { // выведет сообщение по нажатию кнопки
    user.sayHi();
}


let customer = {
    lastName: "Konoreva",
    firstName: "Alina",
    timeOfBuyng: "12:00",
    dateOfBuyng: "26-05-2023",
    phone: "+7 (800) 555-35-35"
}

customer.showInformation = function() {
    const ul = document.getElementById("task2")

    const name = document.createElement("li")
    name.innerHTML = "Name: " + customer.firstName
    ul.appendChild(name)

    const lastName = document.createElement("li")
    lastName.innerHTML = "Lastname: " + customer.lastName
    ul.appendChild(lastName)

    const phone = document.createElement("li")
    phone.innerHTML = "Phone: " + customer.phone
    ul.appendChild(phone)
}

function showInfo() {
    customer.showInformation()
}


const users = [
    {
        id: 1,
        name: "Иван",
        email: "ivan@example.com",
        phone: "+7 (111) 111-11-11"
    },
    {
        id: 2,
        name: "Ольга",
        email: "olga@example.com",
        phone: "+7 (222) 222-22-22"
    },
    {
        id: 3,
        name: "Петр",
        email: "petr@example.com",
        phone: "+7 (333) 333-33-33"
    }
  ];
  
  const orders = [
    {
      id: 1,
      user_id: 1,
      restaurant: "McDonald's",
      items: ["Big Mac", "Fries", "Coke"],
      total: 421
    },
    {
      id: 2,
      user_id: 2,
      restaurant: "Burger King",
      items: ["Whopper", "Onion Rings", "Sprite"],
      total: 345
    },
    {
      id: 3,
      user_id: 3,
      restaurant: "KFC",
      items: ["Bucket of Chicken", "Mashed Potatoes", "Gravy"],
      total: 200
    }
  ]
  
  
  const restaurants = [
    {
      name: "McDonald's",
      adress: "Баррикадная,15"
    },
    {
      name: "Burger King",
      adress: "Стахановская, 32, дом 5"
    },
    {
      name: "KFC",
      adress: "Новый арбат, 15"
    }
  ];

const task3 = document.getElementById("task3")
function printInfo() {
    const user_id = document.getElementById("user_id").value
    console.log(user_id)
    for(let i = 0; i<orders.length;i++){
        if(orders[i].user_id == user_id){
            var row = "<div class='row'>"
            row += "<p><strong>Ресторан:</strong> " + orders[i].restaurant + "</p>"
            row += "<p><strong>Позиции::</strong> " + orders[i].items + "</p>"
            row += "</div>"
            var li = document.createElement("li");
            li.innerHTML = row  
            task3.appendChild(li)  
        }

    }

  }
  
  


const task4 = document.getElementById("task4")
function myGroup() {
    this.names = ["Андрей", "Арина", "Катя", "Максим"];
    this.showNames = function() {
        task4.innerHTML = "Студенты в моей группы: " + this.names.join(", ");
    };
  }
  
let group = new myGroup();
function showGroupNames() {
    group.showNames(); 
}

const task5 = document.getElementById("task5")
class Student {
    constructor(name) {
        this.name = name;
        this.showInfo = function () {
            task5.innerHTML = `Меня зовут ${this.name}`
        };
    }
}

function showStudentName() {
    const name = document.getElementById("name").value
    if(name == "") {
        text = "<div class='alert alert-danger' role='alert'>Name is not defind</div>"
        div.innerHTML = text
    } else {
        let student = new Student(name);
        student.showInfo();
    }
}

