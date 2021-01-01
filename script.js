// Завдання

// У Вас є форма. Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку. 

// 	Ім’я та прізвище: може бути слово англійською з великої або маленької букви і 
// не більше 20. Цифр і інші символи не допускаються.
// 	Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги
//  наступні(будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com.  і т.д.)).
// 	Телефон: повинен пройти тільки такий формат: +38(093)-880-20-13. 
// Розділові знаки в номері повинні ставитись автоматично після заповнення певної 
// кількості цифр. Можна використати готову маску для телефона.
// 	Пароль: Від 8 до 15 символів можуть бути букви та цифри.


let regExp1 = /^[a-z]{1,20}$/i;
let regExp2 = /^[a-z]{1,20}$/i;
let regExp3 = /^[a-z0-9-.]+@((gmail\.com)|(net\.ua)|(org\.ua))$/;
let regExp4 = /^\+38\(0[9765][367905]\)-\d{3}-\d{2}-\d{2}$/;
let regExp5 = /^\w{8,15}$/;
let regs = [regExp1, regExp2, regExp3, regExp4, regExp5];
let inps = document.querySelectorAll('input');
let messages = document.querySelectorAll('.message');
let cross = document.querySelectorAll('.cross');
let good = document.querySelectorAll('.good');
function checkText() {
    for (let i = 0; i < inps.length; i++) {
        if (regs[i].test(inps[i].value)) {
            inps[i].style.border = '1px solid green';
            inps[i].style.marginBottom = '30px';
            inps[i].style.boxShadow = '0 0 3px green';
            messages[i].style.display = "none";
            good[i].style.display = 'block';
            cross[i].style.display = 'none';
        }
        else {
            inps[i].style.border = '1px solid red';
            inps[i].style.boxShadow = '0 0 3px red';
            inps[i].style.marginBottom = '0';
            messages[i].style.display = "flex";
            cross[i].style.display = 'block';
            good[i].style.display = 'none';

        }
    }
    event.preventDefault();
}
 
for (let i = 0; i < inps.length; i++) {
    inps[i].onfocus = function(){
   event.target.style.border = '1px solid rgb(144, 187, 236)';
   event.target.style.boxShadow = '0 0 3px rgb(160, 196, 243)';
}
}

let element = inps[3];
let maskOptions = {
  mask: '+{38}(000)-000-00-00',
  lazy:false
};
let mask = new IMask(element, maskOptions);


