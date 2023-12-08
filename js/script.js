

let time = document.querySelector('.time')
// console.log(time)

let startbtn = document.querySelector('.startbtn')
let stopbtn = document.querySelector('.stop')

let reset = document.querySelector('.reset')

// console.log(reset)
// console.log(stopbtn)



let [hours,minutes,seconds]= [0,0,0]

function startTimer(){
 
  seconds++;
  if(seconds==60){
    seconds=0
    minutes++;
    if(minutes==60){
        minutes=0
        hours++;
        if(hours==60){
            hours=0
            seconds++
        }
    }
  }

  let h = hours<10?'0'+hours:hours
  let s = seconds<10?'0'+seconds:seconds
  let m = minutes<10?'0'+minutes:minutes

  time.innerHTML=`${h}:${m}:${s}`;

  console.log(h)
  console.log(s)
  console.log(m)


}
let timer = false
startbtn.addEventListener('click', startInterval)

function startInterval(){
       
    if(timer!==false){

        clearInterval(timer)
    }
   timer =  setInterval( startTimer, 1000);
      
}


function stopInterval(){
   
    clearInterval(timer)
   

}



stopbtn.addEventListener('click',stopInterval);


function Resetvalue(){
  
    clearInterval(timer)

    startTimer()

    hours = minutes = seconds = 0;
// let     [hours,minutes,seconds]=[0,0,0]

    time.innerHTML = '00:00:00'


}

reset.addEventListener('click',Resetvalue)




