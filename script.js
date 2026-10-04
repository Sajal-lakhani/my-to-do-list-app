let tasks = JSON.parse(localStorage.getItem('myTasks')) || [
 {text:"Practice DOM", done:true},
 {text:"Build A Small Project", done:true}
];

function render(){
 let list = document.getElementById('taskList');
 list.innerHTML = "";
 let remaining = 0;
 tasks.forEach((t,i)=>{
   if(!t.done) remaining++;
   list.innerHTML += `<div class="task ${t.done?'completed':''}">
   <label><input type="checkbox" ${t.done?'checked':''} onchange="toggle(${i})"> <span>${t.text}</span></label>
   <button onclick="remove(${i})">x</button></div>`;
 });
 document.getElementById('count').innerText = remaining + " tasks remaining";
 localStorage.setItem('myTasks', JSON.stringify(tasks));
}
function addTask(){
 let input = document.getElementById('taskInput');
 if(input.value.trim()=="") return;
 tasks.push({text:input.value, done:false});
 input.value=""; render();
}
function toggle(i){ tasks[i].done =!tasks[i].done; render(); }
function remove(i){ tasks.splice(i,1); render(); }
function clearCompleted(){ tasks = tasks.filter(t=>!t.done); render(); }
render();