var toggle =document.querySelector('.toggle');
var menue =document.querySelector('.menue');

function toggleMenue() {
  if (menue.classList.contains("active")) {
    menue.classList.remove("active");
     
    // adds the menu (hamburger) icon  
   toggle.innerHTML = `<img id="icon" src="menue.png" class="icon" >`;
} else {
    menue.classList.add("active");
     
    // adds the close (x) icon
   toggle.innerHTML =  `<img id="icon" src="close.png" class="icon" >`;
}
}




//Filter part


var val = document.getElementById("list1").value;
var list2 = document.getElementById("list2");
let arrayList= [];

/*let arrayListOb = [{name:"HTML" , isDone:false},
                     {name:"JavaScript" , isDone:false},
                     {name:"CSS" , isDone:false}];
                             console.log(arrayListOb[2].name);        */
 let arrayListOb=[];    
    let HTMLOb = {name:"HTML" , isDone:false};
    let CSSOb ={name:"JavaScript" , isDone:false};
    let JavaScriptOb= {name:"CSS" , isDone:false};
 

//arrayListOb.unshift(JavaScriptOb); localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));
//arrayListOb.unshift(CSSOb); localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));
//arrayListOb.unshift(HTMLOb); localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));
arrayListOb = JSON.parse(localStorage.getItem('arrayListOb'));


arrayList = JSON.parse(localStorage.getItem('arrayList1'));

doneStyle= JSON.parse(localStorage.getItem('doneStyle1'));
//window.localStorage.clear();
//arrayList.unshift("JavaScript"); localStorage.setItem("arrayList1", JSON.stringify(arrayList));
//arrayList.unshift("CSS"); localStorage.setItem("arrayList1", JSON.stringify(arrayList));
//arrayList.unshift("HTML"); localStorage.setItem("arrayList1", JSON.stringify(arrayList));

let filterDiv= document.getElementById("allItems");



for(let i=0;i< arrayListOb.length; i++){
    filterDiv.innerHTML +=` <div class="FilterItem" id="${arrayListOb[i].name}Id">
    <span>${arrayListOb[i].name}</span>
    <span>
    <img class="checkIcon"src="check.png" onclick="doneItem(document.getElementById('${arrayListOb[i].name}Id').id)" >
    <img src="delete.png" onclick="deleteItem(document.getElementById('${arrayListOb[i].name}Id').id)">
  </span>

</div>`;
if(arrayListOb[i].isDone){
  document.getElementById(`${arrayListOb[i].name}Id`).style.backgroundColor="thistle";
  document.getElementById(`${arrayListOb[i].name}Id`).style.textDecoration =" line-through";
  document.getElementById(`${arrayListOb[i].name}Id`).style.pointerEvents="none";
  document.getElementById(`${arrayListOb[i].name}Id`).style.marginLeft="50px";
  
     document.getElementById(`${arrayListOb[i].name}Id`).style.width ="50%";


}
}

console.log(arrayListOb[2].isDone);

function addItem() {
    //let mainDiv= document.getElementById("mainFilter");
   let x = document.getElementById("textInput").value;
   let newOb={name:x, isDone:false};
   arrayListOb.unshift(newOb);

  localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));

  filterDiv.innerHTML =` <div class="FilterItem" id="${arrayListOb[0].name}Id">
    <span>${arrayListOb[0].name}</span>
    <span>
    <img class="checkIcon"src="check.png" onclick="doneItem(document.getElementById('${arrayListOb[0].name}Id').id)" >
    <img src="delete.png" onclick="deleteItem(document.getElementById('${arrayListOb[0].name}Id').id)">
  </span>

</div>`+ filterDiv.innerHTML;

}


function doneItem(itemId) {
let strID="";
strID += itemId;
strID = strID.slice(0,-2);
console.log(strID);
for(let i1=0;i1< arrayListOb.length; i1++){
  if(arrayListOb[i1].name == strID){
  arrayListOb[i1].isDone = true;
  console.log(arrayListOb[i1].isDone);
  localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));}
}


    document.getElementById(itemId).style.backgroundColor="thistle";
    document.getElementById(itemId).style.textDecoration =" line-through";
    document.getElementById(itemId).style.pointerEvents="none";
    document.getElementById(itemId).style.marginLeft="10px";
    document.getElementById(itemId).style.width ="50%";

  //rola

}

function deleteItem(itemId) {
    document.getElementById(itemId).style.display="none";
      
    for(let k=0;k<arrayListOb.length;k++){
         var toDeleteID ="";
         toDeleteID+=arrayListOb[k].name;
         toDeleteID+="Id";
         if(toDeleteID== itemId){
            var removed = arrayListOb.splice(k,1); 
            localStorage.setItem("arrayListOb", JSON.stringify(arrayListOb));
            console.log(localStorage);

         
         }

    }
}

function filtering() {
  input = document.getElementById("textInput");
  filter = input.value.toUpperCase();
  
for(let ii=0; ii<arrayListOb.length; ii++){
  //if(filter == arrayList[ii])
  let str="";
    str+= arrayListOb[ii].name;
    str+="Id";
  if (arrayListOb[ii].name.toUpperCase().indexOf(filter) > -1){
    
 //document.getElementById(str).style.backgroundColor="red";
 document.getElementById(str).style.display ="";
  }
  else {

    document.getElementById(str).style.display = "none";
}
  
}
}

