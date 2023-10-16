# HighPrep-Assignment
# News Forum
I have created this website using multiple components combined in single index.html file.
For the Homepage, the animation part is done using `shery.js` library which is recently launced on Sheryians Coding School Youtube channel.
The code for animation is as follow,It is inside server.js.
To implement this you just have to wrap multiple images in a div with a suitable Id.For me the Id is `#back`

```
Shery.imageEffect("#back",{style:5,config:
    {"a":{"value":1.49,"range":[0,30]},
     "b":{"value":-0.95,"range":[-1,1]},
     "aspect":{"value":1.9359756097560976},
      "gooey":{"value":true},
      "infiniteGooey":{"value":true},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},
        "masker":{"value":true},
        "maskVal":{"value":1.33,"range":[1,5]},
        "scrollType":{"value":0},
        "geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":false},
        "onMouse":{"value":1},
        "noise_speed":{"value":0.5,"range":[0,10]},
        "metaball":{"value":0.2,"range":[0,2]},
        "discard_threshold":{"value":0.5,"range":[0,1]},
        "antialias_threshold":{"value":0,"range":[0,0.1]},
        "noise_height":{"value":0.5,"range":[0,2]},"
        noise_scale":{"value":10,"range":[0,100]}},
        gooey:true});
```
The Animation in which the text goes upwards `onClick` has code as follows
It will get hide due to `overflow:hidden` property while going upward
```
var elems=document.querySelectorAll("#elem");
elems.forEach(function(elem){
    var h1s=elem.querySelectorAll("h1");
    var index=0;
    var animation=false;
    document.querySelector("#main").addEventListener("click",function(){
        if(!animation){
            animation=true;
            gsap.to(h1s[index],{
                top:'-=100%',
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animation=false;
                }
            })
            index===h1s.length-1 ? (index=0):index++;
            gsap.to(h1s[index],{
                top:'-=100%',
                ease:Expo.easeInOut,
                duration:1
            })
        }
    });
});
```
#For Searching the keywords i have created an input area in which if user enters some keywords it will recommend some words
#The code for it is as follows:
```
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
```





