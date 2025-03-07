let list =[
    {task:'hkbasck',time:'08:09'},
    {task:'avinash',time:'16:09'},
    {task:'jn',time:'09:09'},

];
const display=()=>{
    let total;
    let value = ""
    let id =0
    if(list.length==0){
        // value = 'list is empty'
        total=`<h1>List is empty</h1>`
        document.getElementById('display').innerHTML=total
    }else{
     value = list.reduce((acc,val,ind)=>{ 
            let tr = `
             <tr>
                <td>${++id}</td>
                <td>${val.task}</td>
                <td>${val.time}</td>
                <td><button onclick="deleteItem(${ind})">delete</button></td>
                <td><button onclick="editItem(${ind})">edit</button></td>
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
   if(task){
    taskEle.value=task.task
    timeEle.value = task.time
   }
   let Edit= document.getElementById('editBtn').addEventListener('click',()=>{
        edit(id)
   })
}
const edit = (id)=>{
    
    let taskV = document.getElementById('task').value
   let timeV = document.getElementById('time').value
   console.log(taskV,timeV)
    let task = list.find((val,ind)=>{
        if(ind==id){
            return ind
        }
    })
    if(task){
        task.task=taskV
        task.time=timeV
    }
    display()
    alert("Updated Successfully")
    clearInputs()
    document.getElementById('add').style.display='block'
   
}