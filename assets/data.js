function getData(){   
     
//LOGIN DATA
//EVALUATION DATA
    const evaluationData = function(){
        const nav = [
            { 
                label: 'Evaluations', 
                isActive: 'active-link' 
            },
            { 
                label: 'New Evaluation', 
                id:"newEvaluationMenuBtn"
            }
        ];
        const heading = ['Name', 'Tehnologie', 'Nivel', ''];
        let rows = interviewApp.getStorageItems(); 
        
        return {nav, heading, rows}
    }

//NEW EVALUATION DATA
    const newEvaluationData = function(){
        const nav = [
            { label: 'Evaluations', id:"evaluationsMenuBtn"},
            { label: 'New Evaluation', isActive: 'active-link'},
        ];
        
        const level = [
            { label: 'Trainee', numOptions: 1, values: ['trainee'] },
            { label: 'Junior', numOptions: 3, values: ['low-jun', 'mid-jun', 'high-jun'] },
            { label: 'Middle', numOptions: 3, values: ['low-mid', 'mid-mid', 'high-mid'] },
            { label: 'Senior', numOptions: 3, values: ['low-sen', 'mid-sen', 'high-sen'] },
        ];
        
        const textarea = [
            { titles: 'Should the candidate be hired?', placeholder: 'The type of project that is suitable for the candidate &#13;&#10;Is guidance required for the candidate' },
            { titles: 'General Impression', placeholder: '*required', required: 'required' },
            { titles: 'Workflow, Leadership & Soft Skills', placeholder: 'Describe the environment in which the candidate works. &#13;&#10;Describe any guidance or management experience.' },
        ];
        
        const dropdown = {
            data: [{
                legend: 'OOP, Design Patterns',
                li: [{
                    label: 'Classes',
                    name: 'classes',
                },
                {
                    label: 'Exception handling',
                    name: 'exceptionHandling',
                },
                {
                    label: 'Version Control',
                    name: 'versionControl',
                },
                {
                    label: 'Access Modifiers',
                    name: 'accessModifier',
                },
                {
                    label: 'Design Patterns',
                    name: 'designPatterns',
                },
                {
                    label: 'Issue Tracking',
                    name: 'issueTracking',
                },
                {
                    label: 'Polymorphism',
                    name: 'polymorphism',
                },
                {
                    label: 'RegEx',
                    name: 'regEx',
                }],
            }, {
                legend: 'HTTP',
                li: [{
                    label: 'Protocol',
                    name: 'protocol',
                },
                {
                    label: 'Response Codes',
                    name: 'responseCodes',
                },
                {
                    label: 'REST',
                    name: 'rest',
                },
                {
                    label: 'Headers',
                    name: 'headers',
                },
                {
                    label: 'Request Methods',
                    name: 'requestMethods',
                },
                {
                    label: 'Sessions &amp; Cookies',
                    name: 'sessions',
                }],
            }, {
                legend: 'HTML',
                li: [{
                    label: 'Doctype',
                    name: 'doctype',
                },
                {
                    label: 'Tags',
                    name: 'tags',
                },
                {
                    label: 'Basic SEO',
                    name: 'basicSeo',
                },
                {
                    label: 'Syntax rules',
                    name: 'syntaxRules',
                },
                {
                    label: 'Attributes',
                    name: 'attributes',
                }],
            }, {
                legend: 'CSS',
                li: [{
                    label: 'Usage',
                    name: 'usage',
                },
                {
                    label: 'Box Modeling',
                    name: 'boxModeling',
                },
                {
                    label: 'CSS 3.0',
                    name: 'css',
                },
                {
                    label: 'Selectors',
                    name: 'selectors',
                },
                {
                    label: 'Styling',
                    name: 'styling',
                }, {
                    label: 'Dynamic stylesheet',
                    name: 'dynamicStylesheet',
                }],
            }, {
                legend: 'Javascript',
                li: [{
                    label: 'Data types &amp; variables',
                    name: 'dataTypesAndVariables',
                },
                {
                    label: 'Object Manipulation',
                    name: 'objectManipulation',
                },
                {
                    label: 'DOM Manipulation',
                    name: 'domManipulation',
                },
                {
                    label: 'Functions',
                    name: 'functions',
                },
                {
                    label: 'Templating',
                    name: 'templating',
                }, {
                    label: 'Event Handling',
                    name: 'eventHandling',
                }, {
                    label: 'Prototype &amp; OOP',
                    name: 'prototype',
                }, {
                    label: 'Testing(unit, E2E)',
                    name: 'testing',
                }, {
                    label: 'AJAX',
                    name: 'ajax',
                }, {
                    label: 'Debugging',
                    name: 'debugging',
                }, {
                    label: 'Websockets',
                    name: 'websockets',
                }, {
                    label: 'Tooling',
                    name: 'tooling',
                }, {
                    label: 'Libraries',
                    name: 'libraries',
                }, {
                    label: 'Promises',
                    name: 'promises',
                }, {
                    label: 'Browser Engines',
                    name: 'browserEngines',
                }, {
                    label: 'Frameworks',
                    name: 'frameworks',
                }],
            }, {
                legend: 'NodeJs',
                li: [{
                    label: 'Backend frameworks',
                    name: 'backendFrameworks',
                },
                {
                    label: 'Templating',
                    name: 'templating',
                },
                {
                    label: 'DOM Manipulation',
                    name: 'domM',
                },
                {
                    label: 'Unit Testing',
                    name: 'unitTesting',
                }],
            }],
        };  
        
        return {nav, level, textarea, dropdown}
    }
    
//RETURN
    return {evaluationData, newEvaluationData}
}

interviewApp.getStorageItems = function(){
    return JSON.parse(localStorage.getItem('evaluationsCollection'));    
}

// {
//     "Evaluation":{
//         "nav":[
//             {"label":"Evaluations", "isActive":"active-link"},
//             {"label":"New Evaluation", "id":"newEvaluationMenuBtn"}
//         ],
//         "heading":[
//             "Name",
//             "Tehnologie",
//             "Nivel",
//             ""
//         ],
//         "rows": 
//     },
//     "newEvaluation":{

//     }
    
// }

