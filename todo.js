let todolist = [
  {
  item:"bilal",
  dudate: "2/3/2024"
}
];
displayitem();

function todo(){
  let todobtn = document.querySelector('#todoinput');
  let tododate = document.querySelector('#inputdate');
  let eleemnetitem =todobtn.value;
  let eleemnetdate=tododate.value;
  // console.log(eleemnet);
  todolist.push({item: eleemnetitem, dudate: eleemnetdate});

  todobtn.value = '';
  tododate.value = '';

  displayitem();


}

function displayitem(){
  let displatpa = document.querySelector('#tododiv');
  let newhtml = "";

  
  for(i=0; i<todolist.length; i++) {
    // let item=todolist[i].item;
    // let date=todolist[i].dudate;

    let {item, dudate} = todolist[i];

    newhtml += `
    
    <span>${item}</span>
    <span>${dudate}</span>
    <button class="btndelet" onclick="todolist.splice(${i}, 1);
    displayitem();
    ">delete</button>
   
    `
    
  }  
  displatpa.innerHTML = newhtml;
}


