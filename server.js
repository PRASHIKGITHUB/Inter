Shery.imageEffect("#back",{style:5,config:
    {"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"aspect":{"value":1.9359756097560976},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.33,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true});

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



// Sample headlines and keywords data
const data = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Headline with keyword: Technology",
    "A keyword-rich article",
];

const searchInput = document.getElementById("search-bar");
const resultsList = document.getElementById("results-list");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    displayResults(query);
});

function displayResults(query) {
    resultsList.innerHTML = '';

    if (query.trim() === '') {
        return;
    }

    const matchingItems = data.filter(item => item.toLowerCase().includes(query));
    if (matchingItems.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
        return;
    }

    matchingItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultsList.appendChild(li);
    });
}


//for cards
const Testimonials = () => {
    let box=document.querySelector('#innerT');
    const btnpressprev=()=>{
     let width=box.clientWidth;
     box.scrollLeft=box.scrollLeft+418;
    }
    const btnpressnext=()=>{
      let width=box.clientWidth;
     box.scrollLeft=box.scrollLeft-418;
    }
}





