//trying out stuff, ignore
(function(){

    var location = '';
    const app = document.getElementById('app');
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    interviewApp.nav = function(){
        //render + addEventlsiteners
        if (location === ''){
            interviewApp.setLocation('loginPage');
        } else {            
            interviewApp.destroy();
            interviewApp.init();
        }
    }

    interviewApp.init = function(){
        if(location === 'loginPage'){
            app.innerHTML = interviewApp.loginPage();
            interviewApp.addClickEventLoginBtn();
        } else
        if(location === 'evaluationPage'){
            app.innerHTML = interviewApp.evaluationPage();
            interviewApp.evaluationEvents();
        } else
        if(location === 'newEvalPage'){
            app.innerHTML = interviewApp.newEvaluationPage();
            interviewApp.newEvaluationEvents();
        }
    }

    interviewApp.setLocation = function(link){
        location = link;
        interviewApp.init();
    }

    // interviewApp.destroy = function(){
        
    // }

    interviewApp.nav();
}())
