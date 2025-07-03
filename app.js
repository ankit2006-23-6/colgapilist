let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener('click', async function(){
    let country = document.querySelector("input").value;
    let ans = await getcolname(country);
    console.log(ans);
    showname(ans);

})

function showname(ans){
    let list = document.querySelector('#list');
    list.innerText = "";
    for(col of ans){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
        
    }
}



async function getcolname(country){
    try{
        let res = await axios.get(url+country);
        return res.data;

    }
    catch(e){
        console.log("error", e);
        return "no colleges found"
    }
}