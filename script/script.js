const allBtn= document.getElementsByClassName("btn");
let count = 0;

for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        count +=1;
        const placeName =e.target.parentNode.parentNode.childNodes[1].innerText;
        const costTaka =e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
     
        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p =document.createElement('p');
        p.innerText = placeName;
        const p2 =document.createElement('p');
        p2.innerText =costTaka;
        
        li.appendChild(p);
        li.appendChild(p2);
      
    const budget= document.getElementById('budget');
    const convetBudget = parseInt(budget);

if(convetBudget-parseInt(costTaka)<0){
    alert("low budget");
    return;
}

    document.getElementById('budget').innerText= convetBudget-parseInt(costTaka);

        selectedContainer.appendChild(li);

        total("total-cos",parseInt(totalCost));

    
       setInnerText("count-satrt",count);

    });
}



function setInnerText(id,value){
    document.getElementById(id).innerText =value;
}

function total(id,value) {
    const totalCost =document.getElementById(id).innerText;
    const convertet =parseInt(totalCost);
    const sum =convertet + parseInt(value);
    setInnerText("total-cost",sum);

}


function granddTotal(category) {

const totalCost = document.getElementById('grandd-total').innerText;
const converttedGrand = parseInt(totalCost);
 
if(category=="bus"){
    setInnerText("grandd-total",converttedGrand+100);
}
else if(category=="train"){
    setInnerText("grandd-total",converttedGrand-200);
}
else if(category=="flight"){
    setInnerText("grandd-total",converttedGrand+700);
}
else{
    setInnerText("grandd-total",converttedGrand);
}

}


