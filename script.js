let addBtn=document.querySelector("#addBtn");
addBtn.addEventListener("click",addList);
let ul=document.querySelector("ul");

function addList(){
    let inp=document.querySelector("#input");
   if(inp.value!=""){
    let li=document.createElement("li");
    li.innerText=inp.value;
    inp.value="";
    ul.appendChild(li);

    let delBtn=document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerText="delete";
    li.appendChild(delBtn);
   }
}


// for(delBtn of delBtns){
//     delBtn.addEventListener("click",()=>{
//         console.log("del btn clicked");
//     })
// }
ul.addEventListener("click",function(event){
    let listItem=event.target.parentElement;
    if(event.target.nodeName=='BUTTON'){
        listItem.remove();
    }
    
});
