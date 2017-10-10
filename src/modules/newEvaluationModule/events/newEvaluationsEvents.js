interviewApp.newEvaluationEvents = function(){

    function addClickEventEvaluationMenu() {
        const evaluationsMenuBtn = document.querySelector("#evaluationsMenuBtn");
        evaluationsMenuBtn.addEventListener("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            app.innerHTML = interviewApp.evaluationPage();
            interviewApp.evaluationEvents(); 
        })
    }
    
    function addClickEventLogoutBtn(){
        const logoutButton = document.querySelector("#logoutButton");
        logoutButton.addEventListener("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            app.innerHTML = interviewApp.loginPage();
            interviewApp.addClickEventLoginBtn();
            sessionStorage.clear();
        })
    }
    
    function newEvalBtnSubm(){
        function pushInLocalStorage(savedObject) {
            
            function setItemLocalStorage(key, object){
                localStorage.setItem(key, JSON.stringify(object));
            }
            function getItemFromLocalStorage(key) {
                return JSON.parse(localStorage.getItem(key));
            }
    
            const evaluations = getItemFromLocalStorage('evaluationsCollection') || [];
        
            evaluations.push(savedObject);
        
            setItemLocalStorage('evaluationsCollection', evaluations);
        }
    
        const EvalBtn = document.querySelector('#newEvalSubmitBtn');
        const selectCandidateValues = document.querySelectorAll('.candidData');
        const selectRadioValues = document.querySelectorAll('.radioData');
        const selectTextareaValues = document.querySelectorAll('.textareaData');    
        const selectDropdownValue = document.querySelectorAll('.dropdownData');
        const app = document.querySelector('#app');  
        const radioValues = {};
        const textareaValues = [];
        const dropdownValues = [];
        const candidateValues = {};
        // .textContent
        EvalBtn.addEventListener("click", function(e){        
    
            selectCandidateValues.forEach(function(el){
                candidateValues[el.name] = el.value
            })
    
            selectRadioValues.forEach(function(a){
            if (a.checked){
                radioValues.name=a.name;
                radioValues.value=a.value;
                }            
            })
        
    
            selectTextareaValues.forEach(function(b){
                textareaValues.push({
                    name: b.name,
                    value: b.value
                });
                
            })
    
            selectDropdownValue.forEach(function(c){
                dropdownValues.push({
                    name: c.name,
                    values: c.value
                });
            })
    
            const savedObject = {
                candidate: candidateValues,
                radio: radioValues,
                textarea: textareaValues,
                dropDown: dropdownValues
            }   
            pushInLocalStorage(savedObject);
    
          
            app.innerHTML = interviewApp.evaluationPage();  
            interviewApp.evaluationEvents();
            e.preventDefault();
        })
    }

    addClickEventEvaluationMenu();
    addClickEventLogoutBtn();
    newEvalBtnSubm();
    // interviewApp.setLocation('newEvalPage');
}

