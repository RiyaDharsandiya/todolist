document.querySelector('#push').onclick=function(){
  if(document.querySelector('.newtask input').value.length==0){
    alert('please enter a task')
  }
  else{
    document.querySelector('.task').innerHTML
    +=`
    <div class="tasks">
    <span id='taskname'>
        ${document.querySelector(".newtask input").value}
   </span> 
   <button class="del">
   <i class="fa fa-times"></i>
   </button>
    </div>
    `;
  }

var current_task=document.querySelectorAll('.del');
for (var i=0;i<current_task.length;i++)
{
    current_task[i].onclick=function(){
        this.parentNode.remove();
    }
}
var tasks=document.querySelectorAll('.tasks');
for(var i=0;i<tasks.length;i++)
{
    tasks[i].onclick=function(){
        this.classList.toggle('completed');
    }
}
document.querySelector('.newtask input').value='';
}