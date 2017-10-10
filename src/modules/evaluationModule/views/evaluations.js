interviewApp.evaluationPage = function() {
    let data = getData().evaluationData();     
    function EvaluationsTable(options = {}) {
        return `
        <section>
            <div class="grid-menu">
                <div class="col-1-menu"></div>
                <div class="col-2-menu">
                    <table class="eval-table">
                    ${EvaluationsTableHeader({headings: options.rowHeadings})}        
                    ${EvaluationsTableBody({rows: options.rows})}  
                    </table>
                </div>
            </div>
        </section>
        `;
    }
    
    function EvaluationsTableHeader(options = {}) {
        const headings = options.headings.map((el) => `<th class="eval-table-head">${el}</th>`);
        const headingsEl = headings.join('');

        return `
        <tr class="eval-table-row">
        ${headingsEl} 
        </tr>
        `;
    }
    

    function EvaluationsTableBody(options = {}) {
        if(options.rows) {
            const rowsElements = options.rows.map((colObj) => EvaluationTableRow(colObj));
            return rowsElements.join('');
        }
        return "";
    }
    
    function EvaluationTableRow(options = {}) {
        return `
        <tr class="eval-table-row">
            <td class="eval-table-col">${options.candidate.name}</td>
            <td class="eval-table-col">Javascript</td>
            <td class="eval-table-col">${options.radio.value}</td>
            <td class="eval-table-col">Detalii <button class="button-plus"></button></td>      
        </tr>
        `
    }

    
        
    return `
    ${interviewApp.NAV({menuLinks: data.nav})}
    ${EvaluationsTable(
        {
        rowHeadings: data.heading,
        rows: data.rows})
        }
    ${interviewApp.Footer()}
    `
}


interviewApp.createTablePlus = function(options={}){
    function tableplusTextareaRow(options={}){
        const textareaRows = [];
        options.forEach(function(e){
            textareaRows.push(`
            <tr class="eval-table-row textarea-row">

                <td class="eval-table-col detail-col">${e.name}</td>
                <td class="eval-table-col detail-col" colspan="2">${e.value}</td>
            </tr>
            `)
        }) 
        return textareaRows.join('');
    }

    function tableplusDropdownRow(options={}){
        const dropdownValues = [];
        options.forEach(function(e){
            dropdownValues.push(`<li class="dropdownItem"> ${e.name}: ${e.values} </li>`)
        }) 
        return `
        <tr class="eval-table-row dropdown-row">
        <td class="eval-table-col detail-col">Skill Levels</td>
            <td class="eval-table-col detail-col" colspan="2">
                <ul class="details-dropdown">
                    ${dropdownValues.join('\n')}
                </ul>
            </td>
        </tr>
        `
    }
    
    return `
    <table class="detail-table">
        ${tableplusTextareaRow(options.textarea)}
        ${tableplusDropdownRow(options.dropDown)}
    <table>
    `
}


