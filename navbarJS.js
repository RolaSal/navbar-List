let toggle = document.querySelector('.toggle');
let menuButton = document.querySelector('.menue');

function toggleMenu() 
{
    if (menuButton.classList.contains("active"))
     {  
        menuButton.classList.remove("active");
        toggle.innerHTML = `<img id="icon" src="menue.png" class="icon" >`;
      } 
    else {
             menuButton.classList.add("active");
            toggle.innerHTML = `<img id="icon" src="close.png" class="icon" >`;
          }
}


let arrayList_toDoItems=[];    
let HTMLOb = {name:"HTML" , isDone:false};
let CSSOb ={name:"JavaScript" , isDone:false};
let JavaScriptOb= {name:"CSS" , isDone:false};
 
arrayList_toDoItems = JSON.parse(localStorage.getItem('arrayListOb'));

let filterDiv = document.getElementById("allItems");


arrayList_toDoItems.forEach(element => {
   filterDiv.innerHTML +=` <div class="FilterItem" id="${element.name}Id">
                              <span>${element.name}</span>
                              <span>
                                <img class="checkIcon"src="check.png" onclick="doneItem(document.getElementById('${element.name}Id').id)" >
                                <img src="delete.png" onclick="deleteItem(document.getElementById('${element.name}Id').id)">
                              </span>

                           </div>`;

  if(element.isDone){
      document.getElementById(`${element.name}Id`).className = "doneItem";
    }
});


function addItem() {
   let inputElementName = document.getElementById("textInput").value;
   let newElement = {name:inputElementName, isDone:false};
   arrayList_toDoItems.unshift(newElement);

  localStorage.setItem("arrayListOb", JSON.stringify(arrayList_toDoItems));

  filterDiv.innerHTML =` <div class="FilterItem" id="${arrayList_toDoItems[0].name}Id">
    <span>${arrayList_toDoItems[0].name}</span>
    <span>
    <img class="checkIcon"src="check.png" onclick="doneItem(document.getElementById('${arrayList_toDoItems[0].name}Id').id)" >
    <img src="delete.png" onclick="deleteItem(document.getElementById('${arrayList_toDoItems[0].name}Id').id)">
  </span>

</div>`+ filterDiv.innerHTML;

}


function doneItem(itemId) {
let strID = "";
strID += itemId;
strID = strID.slice(0,-2);
console.log(strID);
arrayList_toDoItems.forEach(element => {
                                          if(element.name == strID)
                                            {
                                              element.isDone = true;
                                              console.log(element.isDone);
                                              localStorage.setItem("arrayListOb", JSON.stringify(arrayList_toDoItems));
                                             }
                                         }
                            ); 
document.getElementById(itemId).className ="doneItem";  
}

function deleteItem(itemId) {
    document.getElementById(itemId).className = "deleteItem";
    let counter = 0;
    arrayList_toDoItems.forEach(element => {
                                              let toDeleteID ="";
                                               toDeleteID+=element.name;
                                               toDeleteID+="Id";
                                               if(toDeleteID== itemId)
                                               {    let removed = arrayList_toDoItems.splice(counter,1); 
                                                    localStorage.setItem("arrayListOb", JSON.stringify(arrayList_toDoItems));
                                                  }   
                                                counter++;
                                              }
                                  );
    
}

function filtering() {
  input = document.getElementById("textInput");
  filter = input.value.toUpperCase();
  arrayList_toDoItems.forEach(element => {
                                            let elementId="";
                                            elementId+= element.name;
                                            elementId+="Id";
                                            if(element.name.toUpperCase().indexOf(filter) > -1)
                                                {
                                                  document.getElementById(elementId).style.display ="";
                                                 }
                                            else {
  
                                                    document.getElementById(elementId).style.display = "none";
                                                   }
    
                                           });

}

