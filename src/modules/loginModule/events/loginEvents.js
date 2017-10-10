interviewApp.addClickEventLoginBtn = function(location){
    const loginForm = document.getElementById('login_form');
    const selectLoginUserDetails = document.querySelectorAll('.login-form-content-field');
    const loginUserDetails = {};

    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        selectLoginUserDetails.forEach(function(field){
            loginUserDetails[field.name] = field.value;
        });
                
        sessionStorage.setItem('user', JSON.stringify(loginUserDetails));    
        interviewApp.setLocation('evaluationPage');
        // app.innerHTML = interviewApp.evaluationPage(); 
        // interviewApp.evaluationEvents();
        // console.log(location);
    });
}