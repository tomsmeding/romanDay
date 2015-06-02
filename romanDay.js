var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],
    monthNames=["Ian","Feb","Mar","Apr","Mai","Iun","Qui","Sex","Sep","Oct","Nov","Dec"],
    nonaeDate=[5,5,7,5,7,5,7,5,5,7,5,5];

function romanDay(date){
	var res="",prefixdays=0,shiftMonth=false;
	var d=date.getDate(),m=date.getMonth(),y=date.getFullYear(),
	    nonae=nonaeDate[m],idus=nonae+8;
	if(d!=1&&d<=nonae){
		prefixdays=nonae-d+1;
		res="Non.";
	} else if(d!=1&&d<=idus){
		prefixdays=idus-d+1;
		res="Id.";
	} else {
		if(d==1)prefixdays=0;
		else {
			prefixdays=daysInMonth[m]+1-d+1;
			shiftMonth=true;
		}
		res="Kal.";
	}
	if(prefixdays==2)res="prid. "+res;
	else if(prefixdays>2)res=romanNumeral(prefixdays)+" "+res;
	if(prefixdays>1)res="a.d. "+res;
	if(shiftMonth){
		m++;
		if(m==12){
			m=0;
			y++;
		}
	}
	res+=" "+monthNames[m]+". an. "+Math.abs(y);
	return res;
}

var romanNumeralTenline=["","I","II","III","IV","V","VI","VII","VIII","IX"];
function romanNumeral(n){
	var res="";
	if(n>=1000){
		res+=new Array(~~(n/1000+1)).join("M");
		n%=1000;
	}
	res+=romanNumeralTenline[~~(n/100)].replace(/[IVX]/g,function(c){
		return "CDM"["IVX".indexOf(c)];
	});
	n%=100;
	res+=romanNumeralTenline[~~(n/10)].replace(/[IVX]/g,function(c){
		return "XLC"["IVX".indexOf(c)];
	});
	n%=10;
	res+=romanNumeralTenline[n];
	return res;
}
module.exports={"day":romanDay,"num":romanNumeral};
//R=require("./romanDay");
//for(i=0;i<=100;i++)console.log(i,R.num(i));
