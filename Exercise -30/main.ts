let userNames = ["bushra", "asad", "sadia", "admin", "wasif"]                //creating an array

//using ForEach loop on array

userNames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`);
        
    }else{
        console.log(`Hello ${oneuser}, thankyou for logging in agian`);
        
    }
})

