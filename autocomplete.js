let availablekeywords=[
    'Government',
'Elections',
'Political Parties',
'Legislation',
'Political Leaders',
'Athletes',
'Tournaments',
'Teams',
'Championships',
'Sports Events',
'Innovation',
'Artificial Intelligence',
'Cybersecurity',
'Social Media',
'Gadgets',
'Pandemics',
'Vaccines',
'Healthcare',
'Medical Research',
'Public Health'
];
const resultsBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultsBox.innerHTML="<ul>"+content.join('')+"</ul>";
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
}
