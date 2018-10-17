	var show = setInterval(function(){
	//	var myyears = document.getElementById('years');
	//	var mytimes = document.getElementById('times');
	//	var myweeks = document.getElementById('weeks');
		var topTime = document.getElementById('topTime');
		var week = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
		var myDate = new Date();
		var _year = myDate.getFullYear();
		var _month = myDate.getMonth()+1;
		var _date = myDate.getDate();
		var _day = myDate.getDay();
		var _hours = myDate.getHours();
		var _minutes = myDate.getMinutes();
		var _seconds = myDate.getSeconds();
		
		if( _hours<10 ){
			_hours = "0"+_hours;
		}
		if( _minutes<10 ){
			_minutes = "0"+_minutes;
		}
		if( _seconds<10 ){
			_seconds = "0"+_seconds;
		}
	//	myyears.innerHTML = _year+"-"+_month+"-"+_date
	//	mytimes.innerHTML = _hours+":"+_minutes+":"+_seconds
	//	myweeks.innerHTML = week[_day];
	
	topTime.innerHTML ="今天是:"+ _year+"年"+_month+"月"+_date+'日&nbsp;&nbsp;'+week[_day];
	
	},1000);