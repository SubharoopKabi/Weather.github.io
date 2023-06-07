console.log(data.sys.sunrise);

var unixstamp1 = data.sys.sunrise;
var unixstamp2 = data.sys.sunset;

var date1= new Date(unixstamp1*1000);
var date2 = new Date(unixstamp2*1000);

var formattedtime1 = date1.toLocaleDateString("en-US");
var formattedtime2 = date2.toLocaleDateString("en-US");