let current_users = ["sana" , "mehrish" ,"meerab" , "wasif" , "zehrish"]              //creating current user Array

let new_users = ["bushra" , "mehrish" , "meerab" , "asad" , "sadia"]                  //creating new user Array

new_users.forEach(new_one_user => {               // loop through new users to chcek for user names availability
    let our_conditon = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())          // making a condition for user name already exist and save in our condition variable

    if(our_conditon){                      //print different messages using IF ELSE statement
        console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This username ${new_one_user} is Available`);
        
    }
})
