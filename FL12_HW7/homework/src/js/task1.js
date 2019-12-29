let email = prompt('Enter your email', '');
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let lengthOfMail = 5;
let lengthOfNewMail = 6;

if(email === '' || email === null){
    alert('Canceled');
}else if(email.length < lengthOfMail){
    alert(`I don't know any emails having name length less than 5 symbols`);
}else if(email === userEmail || email === adminEmail){
    let password = prompt('Enter password. please', '');

    if(password !== '' || password !== null){
        let welcomeUser = email === userEmail && password === userPassword;
        let welcomeAdmin = email === adminEmail && password === adminPassword;

        if(welcomeUser){
            let changeUserPass = confirm('Do you want to change your password?');

            if(changeUserPass){
                let passwordUserConfirm = prompt('Enter your old password. please', '');

                if(password === passwordUserConfirm){
                    let newUserPass = prompt('Enter new password, please', '');

                    if(newUserPass.length > lengthOfNewMail){
                        let confirmNewPass = prompt('Confirm new password');

                        if(newUserPass === confirmNewPass){
                            alert('You have successfully changed your password.');
                        }else{
                            alert('You wrote the wrong password');
                        }
                    }else{
                        alert('It’s too short password. Sorry.');
                    }
                }
            }else{
                alert('You have failed the change');
            }
        }else if(welcomeAdmin){
            let changeAdminPass = confirm('Do you want to change your password?');

            if(changeAdminPass){
                let passwordAdminConfirm = prompt('Enter your old password. please', '');

                if(password === passwordAdminConfirm){
                    let newAdminPass = prompt('Enter new password, please', '');

                    if(newAdminPass.length > lengthOfNewMail){
                        let confirmNewPass = prompt('Confirm new password');
                        
                        if(newAdminPass === confirmNewPass){
                            alert('You have successfully changed your password.');
                        }else{
                            alert('You wrote the wrong password');
                        }
                    }else{
                        alert('It’s too short password. Sorry.');
                    }
                }
            }else{
                alert('You have failed the change');
            }
        }else{
            alert('Wrong password');
        }
    }else{
        alert('Canceled');
    }
}else{
    alert('I don’t know you');
}