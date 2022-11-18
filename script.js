const [hourSelect, minSelect, ampmSelect] = document.querySelectorAll(".alam-setting form select");

const nowTime = document.querySelector(".container .time");
const alarmSetBtn = document.getElementById("alarm-set-btn");
const alarmBox = document.querySelector(".alam-setting form");

let alarmTime, isAlarmSet = false;
let audioT = new Audio('https://raw.githubusercontent.com/Sukanto01899/javascript-Alarm/7a67d7b911a1892fd8c72fc67d4dbb3971ec87dd/ringtone.mp3');


for(let i = 12; i > 0; i--) {
  i = i < 10 ? '0' + i:i
  const option = `<option value="${i}">${i}</option>`;
  hourSelect.firstElementChild.insertAdjacentHTML('afterend', option)
}

for(let i = 59; i > 0; i-- ) {
  i = i < 10 ? '0' + i: i 
  const option = `<option value="${i}">${i}</option>`;
  minSelect.firstElementChild.insertAdjacentHTML('afterend', option)
}



setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let am_pm = 'AM';

  if(hour > 12) {
   hour = hour - 12
   am_pm = 'PM';
  }
  if(hour === 0) {
    hour = 12
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  nowTime.textContent = `${hour} : ${min} : ${sec} : ${am_pm}`

  if(alarmTime === `${hour} : ${min} : ${am_pm}`) {
    
    audioT.play()
    audioT.loop = true
}
},1000)

const getTime = () => {
  if(hourSelect.value === 'hour' || minSelect.value === 'minute') {
    alert('invalid')
    return;
  }
  if(isAlarmSet) {
    alarmTime = '';
    audioT.pause();
    alarmBox.classList.remove('disable');
    alarmSetBtn.value = 'Set Alarm'
    return isAlarmSet = false;

  }
  isAlarmSet = true;
  const time = `${hourSelect.value} : ${minSelect.value} : ${ampmSelect.value}`;
  alarmTime = time;
  alarmBox.classList.add('disable');
  alarmSetBtn.value = 'Clear Alarm';

};

alarmSetBtn.addEventListener('click', getTime);

