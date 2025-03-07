let list =[
    {task:'Morning Break Fast',time:'08:00',status:false},
    {task:'java Class',time:'09:00',status:false},
    {task:'Practice Session',time:'10:30',status:false},

];
document.getElementById('editBtn').style.display='none'
let filterr = "all";
const setFilter = (f) => {
    filterr = f;
    display();
};
const display=()=>{
    if (filterr === "completed") {
        filteredList = list.filter((task) => {
            return task.status
        }); console.log(filteredList)
    } else if (filterr === "pending") {
        filteredList = list.filter((task) => {
           return !task.status
        }); console.log(filteredList)
    } else {
        filteredList = list; // Show all tasks
    }
   
    let total;
    let value = ""
   
    if(filteredList.length===0){
        // value = 'list is empty'
        total=`<tr>List is empty</tr>`
        document.getElementById('display').innerHTML=total
    }else{
     value = filteredList.reduce((acc,val,ind)=>{ 
        let rowColor = (ind%2==0)?'background-color: black':"background-color:green"
            let tr = `
             <tr class="tr">
                <td>${ind+1}</td>
                <td>${val.task}</td>
                <td>${val.time}</td>
                 <td><input type="checkbox" id='check' ${val.status ? "checked" : ""} onclick="toggleCheck(${ind})"></td>
                <td><button onclick="deleteItem(${ind})" class="text-danger"><i class="fa-solid fa-trash"></i><span> Delete</span></button></td>
                <td><button onclick="editItem(${ind})" class="text-primary"><i class="fa-solid fa-pen-to-square"></i><span> Edit</span></button></td>
             </tr> 
            `
            acc+=tr
            return acc;
       },'')
       total = `
         <tr>
            <th>No</th>
            <th>Task</th>
            <th>Time</th>
            <th>Status</th>
            <th colspan="2">Action</th>
        </tr>
    ${value}
        `
        document.getElementById('display').innerHTML=total
        document.getElementById('editBtn').style.display='none'
    }
   
}
const clearInputs=()=>{
    document.getElementById('task').value=''
    document.getElementById('time').value=''
}
display();
const Add = ()=>{
    
    let taskV = document.getElementById('task').value
    let timeV = document.getElementById('time').value
    if(taskV==""||timeV==""){
        alert('Fields are empty')
    }else{
    let obj = {
        task:taskV,
        time:timeV
    }
    list.push(obj)
    display()
    clearInputs();
}
}
const clearAll=()=>{
    list=[];
    display()
}
const deleteItem=(ind)=>{
    list.splice(ind,1)
    display()
}
const editItem=(id)=>{
    document.getElementById('add').style.display='none'
    document.getElementById('editBtn').style.display='block'
   let taskEle = document.getElementById('task')
   let timeEle = document.getElementById('time')
   let task = list.find((val,ind)=>{
        if(ind==id){
            return val
        }
   })
   console.log(task)
   if(task){
    taskEle.value=task.task
    timeEle.value = task.time
   }
   document.getElementById('editBtn').onclick=(()=>edit(id))
}
const edit = (id)=>{
    let taskV = document.getElementById('task').value
   let timeV = document.getElementById('time').value
    let task = list.find((val,ind)=>{
        if(ind==id){
            return val
        }
    })
   
    if(task){
        task.task=taskV
        task.time=timeV
        console.log(task.task,task.time)
    }
    display()
    
    clearInputs()
    alert("Updated Successfully")
    document.getElementById('add').style.display='block'  
}
const toggleCheck = (index) => {
    console.log(index)
    console.log(list[index].status)
    list[index].status = !list[index].status;
    display();
};