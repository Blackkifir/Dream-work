"use strict";

// Первые шаги навстречу ветру

//   ...Рабочий опрос
  let login = prompt('Какой ваш логин?', '');

   if (login == 'Админ') {

      alert('Хорошо, введите пароль');
      let password = prompt('Введите пароль', '');
            
          if (password == 'Мне можно') {
              alert('Принято!');
              let mission = prompt('Введите число больше 18 "создатель"', 18);
              let result = (mission > 18) ? 'Открыта ещё одна дверь' : 'Вы не пройшли';
              alert(result);
             
                 let animal = confirm('Кто громче рычит: (если тигр то истинна) (если олень то ложь)');

                 if (animal == true) {
                     alert('Вы умный!');
                
                  alert('Следуйщий вопрос на математику');
                  alert('Вы готовы?!');
                  let questionMathTrue = prompt('45 * 21 сколько будет?', '') ;
                  switch (questionMathTrue) {

                      case '945': 
                      alert('Я в шоке, у вас IQ Енштейна ?');
                      break;

                      case '4521': 
                      alert('Не правильно! :(');
                      break;

                      case '923': 
                      alert('Ну почти же былооо');
                      break;

                      case '943': 
                      alert('Вы почти умный, не в обиду');
                      break;
                    
                      default:
                      alert('Попробуйте ещё раз в другой раз');
                      break;
                  }
 

                } else {
                     alert('Здесь вы ошиблись');
                }

          } else {
              alert('Отмена действий');
          }

  } else {
      alert('Не правильно ввели логин');
  }



  const options = {
    name: "Тест",
    height: 600,
    widht: 1024,
    colors: {
        color: "black",
        bg: "Red"
    }
}

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} значение ${options[key]}`);
    }
}


const Newoptions = {
    arr: [1, 2, 7, 4, 2, 4, 7, 8, 10],
 
     read() {
         this.tru = +prompt("Сколько вам лет?", "");
     },
 
     ifElse () {
         if (this.tru > 18) {
            alert ("Хорошо, введите логин");
            this.tru = prompt("Ввод Логина:", "");
            } else {
            alert ("Я вас не знаю");
            }
         
            if (this.tru == "Твой Создатель") {
            alert ("Отлично, если вы мой создатель то введите секретный пароль"); 
            this.tru = prompt ("Ввод пароля:", "");
            } else {
            alert ("Пароль не верный!");
            } 
             
            if (this.tru == 2465676) {
              alert ("Рад вас видеть создатель!");
            } else {
              alert ("Вы обманщик");
            }
     },
 };
 
 Newoptions.read();
 Newoptions.ifElse();
 