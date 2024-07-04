let userNames = ["bushra" ,"asad" ,"sadia", "admin" , "wasif"]

userNames = []

if (userNames.length === 0){
    console.log(" your array is empty we need to find some users!");
}else{
     //using for each loop on array
     userNames.forEach(oneuser =>{
        if(oneuser === "admin"){
            console.log(`Hello ${oneuser}, would you like to see a status report?`);
            
        }else{
            console.log(`Hello ${oneuser}, thankyou for logging in agian`);
            
        }
    })
}
