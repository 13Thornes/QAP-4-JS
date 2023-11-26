const MotelCust = {
    Name: "John Doe",
    DateOfBirth: {
        Year: 1975,
        Month: 11,
        Day: 27,
    },
    Gender: "Male",
    RoomPref: ["Single", " King", " Non-Smoking"," Pet Friendly"],
    PayMethod: "Credit",
    MailingAdd: {
        StAdd: "123 Main St",
        City: "Corner Brook",
        Province: "NL",
        PostCode: "A2H 3N4"
    },
    PhoneNum: "709-634-8979",
    CheckInDate: {
        Year: 2023,
        Month: "05", 
        Day: 20,
    },
    CheckOutDate: {
        Year: 2023,
        Month: "05", 
        Day: 27,
    },
    RoomNo: 201,
    NumOfAdults: 2,
    NumOfChildren: 0,

    getAge: function(){
        const today = new Date();
        return today.getFullYear() - MotelCust.DateOfBirth.Year;
      },

    getStayDur: function(){
        return MotelCust.CheckOutDate.Day - MotelCust.CheckInDate.Day
    }
}

let Age;
Age = MotelCust.getAge();
console.log (Age);
StayDur = MotelCust.getStayDur();
console.log (StayDur);

html = `
  <p>${MotelCust.Name} is ${Age} years old. 
  <br> He is booking a ${MotelCust.RoomPref} room for ${StayDur} days. 
  <br> He will be staying from ${MotelCust.CheckInDate.Year}-${MotelCust.CheckInDate.Month}-${MotelCust.CheckInDate.Day} to ${MotelCust.CheckOutDate.Year}-${MotelCust.CheckOutDate.Month}-${MotelCust.CheckOutDate.Day}. 
  <br> He will be paying using ${MotelCust.PayMethod}.
  Please forward his reciept to:
  <br> 
  <br> ${MotelCust.MailingAdd.StAdd}
  <br> ${MotelCust.MailingAdd.City}, ${MotelCust.MailingAdd.Province}
  <br> ${MotelCust.MailingAdd.PostCode}
  <p>
`;

console.log(html);
document.body.innerHTML = html;
