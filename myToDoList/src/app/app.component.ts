import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ToDoList: any = [];


  postTask(taskFromChild){
    const toDoObj = {
      newToDo: taskFromChild,
      completed:false
    };
    this.ToDoList.push(toDoObj);

  }

  deleteTask(i) {
    this.ToDoList.splice(i, 1)
  }
}
