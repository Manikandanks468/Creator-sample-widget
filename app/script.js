// function myfunction(){

//         var Namee= document.getElementById("EnterName").value;
//         var Emaill= document.getElementById("EnterEmail").value;
//         var Agee= document.getElementById("EnterAge").value;
//         var Mobilee= document.getElementById("EnterMobile").value;

//         formData = {
//   "data" : {"Name":Namee,"Age":Agee,"Email":Emaill,"Phone":Mobilee}
//   }

//   var conf = {
//     "appName":"mani-zappy",
//     "formName":"testing",
//     "data": formData
//   }


// ZOHO.CREATOR.init()
//         .then(function(data) {
//           //Code goes here
//                 ZOHO.CREATOR.API.addRecord(conf)
//           .then(function(response)
//           { 
//     if(response.code == 3000){
//      console.log("Record added successfully");
//     }
    
//   });
//         })
//         document.getElementById("action").reset();
//       }

function clickfun(){
  ZOHO.embeddedApp.init()
.then(function(){
var funa=ZOHO.CRM.CONFIG.getCurrentUser()
console.log(funa)
})
}








