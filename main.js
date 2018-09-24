
function mul (num1) {
  return function (num2) { 
    return function (num3) { 
      return num1 * num2 * num3;
    };
  };
}

console.log(mul(2)(4)(5));


function countDown(){
	var now = new Date();
	var targetDate = new Date(2018, 8, 26);
	
	var currentTime = now.getTime();
	var targetTime = targetDate.getTime();
	
	var timeRemain = targetTime - currentTime;
	
	var s = Math.floor(timeRemain / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);
	
	prop(d, h, m, s)
	
	setTimeout(countDown, 1000);
}

function prop(d, h, m, s){
	h %= 24;
	m %= 60;
	s %= 60;
	
	if(h<10){
		h = "0" + h;
	}
	if(m<10){
		m = "0" + m;
	}
	if(s<10){
		s = "0" + s;
	}
	
	document.getElementById("days").innerText = d;
	document.getElementById("hours").innerText = h;
	document.getElementById("minutes").innerText = m;
	document.getElementById("seconds").innerText = s;
}

countDown();