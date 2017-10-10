interviewApp.newEvaluationPage = function () {
    let data = getData().newEvaluationData();

    const newEvaluationsForm = function (options = {}) {
        return `
        <section>
            <div class="grid-menu">
                <div class="col-1-menu"></div>
                <div class="col-2-menu form-wrapper">
                    <form action="" method="GET">
                    ${candidateDetailsForm()}
                    ${technicalLevelPicker({ levelPicker: options.levelPicker })}
                    ${textArea({ textarea: options.textarea })}
                    ${dropdownSelector({ dropdownData: options.dropdown })}
                    ${submitBtn()}
                    </form>
                </div>
            </div>
        </section>
        `;
    };
    
    // ---------- CREDENTIALS ----------
    const candidateDetailsForm = function () {
        return `
        <section class='credentials'>
            <input class="credentials-input candidData" type="text" name="name" placeholder="Candidate">
            <input class="credentials-input candidData" type="text" name="interviewer" placeholder="Interviewer">
            <input class="credentials-input candidData" type="date" name="date">
        </section>
        `;
    };
    
    // ---------- TECHNICAL LEVEL ----------
    const technicalLevelPicker = function (options = {}) {
        return `
        <section class="sec1">
            <div class="sec-head">
                <h1 class="section-heading">Technical Level</h1> 
            </div>
            ${SkillList({ levelPicker: options.levelPicker })}
        </section>
        `;
    };
    
    function SkillList(options = {}) {
        const lis = [];
        for (let i = 0; i < options.levelPicker.length; i++) {
            lis.push(`${SkillListItem({ levelPickerItem: options.levelPicker[i] })}`);
        }
        return `
        <div class="skill-lvl">
            <ul class="skill-list">
                ${lis.join('')}
            </ul>
        </div>
        `;
    }
    
    function SkillListItem(options = {}) {
        return `
        <li class="skill-list-item">
            <label class="skill-list-item-label">${options.levelPickerItem.label}</label>
            <span class="skill-list-item-content">
                ${SkillListItemOptions({ levelPickerItem: options.levelPickerItem })}
            </span>
        </li >
        `;
    }
    
    function SkillListItemOptions(options = {}) {
        const input = [];
        for (let i = 0; i < options.levelPickerItem.numOptions; i++) {
            input.push(`<input class="skill-list-radio radioData" type="radio" name="TechnicalLevel" value="${options.levelPickerItem.values[i]}">`);
        }
        return input.join('');
    }
        
    // ---------- TEXT AREAS ----------
    const textArea = function (options) {
        const textSections = [];
        for (let i = 0; i < options.textarea.length; i++) {
            textSections.push(`${textareaSection({ section: options.textarea[i] })}`);
        }
        return textSections.join('');
    };
    
    function textareaSection(options = {}) {
        return `
        <section class="sec2">
            <div class="sec-head">
                <h1 class="section-heading">${options.section.titles}</h1>
            </div>
            <textarea name="${options.section.titles}" class="sec2-txt textareaData" rows="4" ${options.section.required || ''} cols="100" placeholder="${options.section.placeholder}"></textarea>
        </section>
        `;
    }
        
    // ---------- DROPDOWN SELECTORS ----------
    const dropdownSelector = function (options = {}) {
        const sectionList = options.dropdownData.data.map((p) => `${dropdownSection(p)}`);
        return sectionList.join('');
    };
    
    function dropdownSection(options = {}) {
        const liList = options.li.map((p) => `${dropdownLiItem(p)}`);
        return `
        <section class="sec3">
            <fieldset class="sec3-fields dropdownSection" name="${capsFirstLetterWord(options.legend)}">
                <legend class="lengedData">${options.legend}</legend>
                <ul class="fieldset-list" >
                    ${liList.join('')}          
                </ul>
            </fieldset>
        </section>
        `;
    }
    
    function dropdownLiItem(options = {}) {
        return `
        <li class="fieldset-list-item" >
            <label class="fieldset-list-item-label">${options.label}</label>
            <select class="fieldset-list-item-drop dropdownData" name="${capsFirstLetterWord(options.name)}">
                <option selected hidden>Evaluation</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </li>
        `;
    }
        
    // ---------- SUBMIT BUTTON ----------
    const submitBtn = function () {
        return `
        <section class="button">
            <button id="newEvalSubmitBtn" class="btn-type1" type="submit" value="Submit">Submit</button>
        </section>
        `;
    }; 
    
    // ---------- OTHER ----------     
    function capsFirstLetterWord(str){
        let words = str.split(' ');
        const s = words.map(function(e){
            return e.charAt(0).toUpperCase() + e.slice(1)
        })
        return s.join('');
    }
    
    return `
    ${interviewApp.NAV({ menuLinks: data.nav })}
    ${newEvaluationsForm({
        levelPicker: data.level,
        textarea: data.textarea,
        dropdown: data.dropdown,
    })}
    ${interviewApp.Footer()}
    `;
   
};
