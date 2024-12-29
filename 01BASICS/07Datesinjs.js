// Dates

let myDate = new Date()
// console.log(myDate.toString());//Sun Dec 29 2024 13:30:12 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Dec 29 2024
// console.log(myDate.toLocaleString());//12/29/2024, 1:30:12 PM
// console.log(typeof myDate);//object
// console.log(myDate.toISOString());//2024-12-29T13:32:55.321Z
// console.log(myDate.toJSON());//2024-12-29T13:34:24.837Z
// console.log(myDate.toUTCString());//Sun, 29 Dec 2024 13:34:24 GMT

let myCreatedDate = new Date(2024 , 11 , 29)
 let myCreatedDate2 = new Date(2023, 11, 29, 5, 3)
 let myCreatedDate3 = new Date("2024-11-29")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})