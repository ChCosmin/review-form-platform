interviewApp.evaluationEvents = function(){
     let data = getData().evaluationData();
    function addClickEventNewEvaluationMenu(){
        const newEvaluationMenuBtn = document.querySelector("#newEvaluationMenuBtn");
        newEvaluationMenuBtn.addEventListener("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            app.innerHTML = interviewApp.newEvaluationPage();
            interviewApp.newEvaluationEvents();  
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

    function buttonPlus(){    
         const nodeList = interviewApp.getStorageItems();
        const buttonPlus = document.querySelectorAll('.button-plus');
        const appendTable = document.querySelectorAll('.detail-table-container');
        buttonPlus.forEach(function(el, iter) {
            el.addEventListener("click", function(){
                if (this.classList.contains("button-plus")){
                    this.className = 'button-minus';             
                    const tableRow = this.closest('.eval-table-row');
                    tableRow.className = ('eval-table-row active-detail-row');            
                    let newRow = document.createElement("td");
                    newRow.setAttribute("colspan","4");                
                    newRow.className = 'table-col';
                    newRow.innerHTML = interviewApp.createTablePlus(nodeList[iter]);
                    tableRow.parentNode.insertBefore(newRow, tableRow.nextSibling);
                } else {
                    const detailsRow = this.closest('.eval-table-row').nextSibling;
                    detailsRow.remove();
                    this.className = 'button-plus';
            }})
        })
    }

    addClickEventNewEvaluationMenu();
    addClickEventLogoutBtn();
    buttonPlus();
    //interviewApp.setLocation('evaluationPage');
}




