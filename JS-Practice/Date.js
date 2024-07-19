let now=new Date();
console.log(now); // Shows the current date and time.

// Creating a Date object with time equal to number of miliseconds
    let Jan01_1970=new Date(0);
    console.log(Jan01_1970); // 0 means 01.01.1970

// Adding 24 hrs : 
let Jan02_1970=new Date(24*3600*1000);
console.log(Jan02_1970);

/*In above example the integer number represents the number of miliseconds that has been passed 
    since beginning of 1970 and it is called TIMESTAMP
*/

// Date before 01.01.1970 has negative timestamp : 
    let Dec31_1969=new Date(-24*3600*1000);
    console.log(Dec31_1969);

// Setting Up the new date : 
    let date=new Date('2023-11-19');
    console.log(date); // The time is not set so it takes according to the time zones(Here it will be IST)

// newDate(year,month,date,hours,minnutes,seconds,ms) : 
    // Year should be in 4 digits
    // Month : 0=Jan and 11=Dec
    // Date : It is day of the month if absent 1 is assumed 
    console.log(new Date(2023,2,24,0,0,0,0));
    console.log(new Date(2023,2,24)); // same as above as the time is 0 .

// Accesing the Date components : 
    let newDate= new Date("July 20, 69 10:20:18");

    // 1. getFullYear() : Gives year in 4 digits 
        console.log(newDate.getFullYear()); // 1969
    
    // 2. getMonth() : Gives the month from 0 to 11
        console.log(newDate.getMonth()); // 6 : July
    
    // 3. getDate() : Gives the day of month from 1 to 31
        console.log(newDate.getDate()); // 20
    
    // 4. getHours() : Gives hours 
        console.log(newDate.getHours()); // 10
    
    // 5. getMinutes() : Gives minutes 
    console.log(newDate.getMinutes()); // 20
    
    // 6. getSeconds() : Gives seconds 
    console.log(newDate.getSeconds()); // 18

    // 7. getDay() : Gives day of week from 0 to 6 
    console.log(newDate.getDay()); // 0 : Sunday
    
    // 8. getTime() : Gives the timestamp number of milliseconds passed from 01.01.1970
    console.log(newDate.getTime()); 

// Setting Date Components : WE CAN SET THE DATE USING THE ABOVE METHODS
    let today=new Date();
    today.setHours(0);
    console.log(today); // The date is today's but the hours is set to 0

    today.setHours(0,0,0,0);
    console.log(today); // Date today but the whole time is now 00:00:00 sharp.

// Auto Correction : We can set-of-range values but it will auto-correct itself
    console.log(new Date(2022, 0,32)); // 01.Feb.2022
    // As the above statement says 32 Jan 2022 But it is not possible so it will auto-correct it.

    let date1 = new Date(2016, 0, 2); // 2 Jan 2016
    date1.setDate(1); // set day 1 of month
    console.log( date1);

    date1.setDate(0); // min day is 1, so the last day of the previous month is assumed
    console.log( date1 ); // 31 Dec 2015

// Task 1 : 
    let todayDate=new Date(2012,1,20,3,12,0,0);
    console.log(todayDate);

// Task 2 :
    function getWeekDay(date) {
        let day=date.getDay();
        switch (day) {
            case 0:
                return 'MO';
        
            case 1:
                return 'TU';
                
            case 2:
                return 'WE';

            case 3:
                return 'Th';

            case 4:
                return 'FR';

            case 5:
                return 'SA';

            case 6:
                return 'SU';
        
            default:
                break;
        }
    }

    let d1=new Date(2014,0,3)
    console.log(getWeekDay(d1));

    /*
        ALTERNATE SOLUTION : 
            function getWeekDay(date) {
                let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

                return days[date.getDay()];
            }

            let date = new Date(2014, 0, 3); // 3 Jan 2014
            alert( getWeekDay(date) ); // FR
    */

// Task 3 : 
    function getDateAgo(date,days) {
        let dateCopy=new Date(date);

        dateCopy.setDate(date.getDate()-days);
        return dateCopy.getDate();
    }
    // d1 : 2014-0-3
    console.log(getDateAgo(d1,1)); // 2

// Task 4 : Number of seconds passed in today : 
    function getSecondsToday() {
        let now=new Date(); // It will return the date and time of now.

        let today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
        
        let diff=now - today; // It will give difference in MILISECONDS 
        return Math.round(diff/1000); // it will make it in SECONDS
    }

    console.log(getSecondsToday());

// Task 5 : Number of seconds left for tomorrow :
    function getSecondsToTomorrow() {
        let now= new Date();

        let tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);

        let diff=tomorrow - now; // It will give difference in MILISECONDS 
        return Math.round(diff/1000); // it will make it in SECONDS
    }
    
    console.log(getSecondsToTomorrow());