/* DaysInMonth : Given the number of the month and year as input 
(1 for January, 12 for December), return the number of days in it. 
IP:1,2019 op:31, IP:2,2020 op:29*/

function daysInMonth(month, year){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
            return 31;
        case 2:
            return year%4==0 ? 29:28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
}

console.log(daysInMonth(2,1988));