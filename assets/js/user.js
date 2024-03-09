let usercard = document.getElementById("name"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем