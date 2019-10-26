import { Component, OnInit, Input } from '@angular/core';
import { FakeToDoService } from '../material-playground/services/fake-todo.service';
import { TodoSubjectService } from '../material-playground/services/todo-subject.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-to-do-item-alt',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class AltToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  hide: boolean;

  constructor(private fakeTdServ: FakeToDoService,
    // private todoSubjectService: TodoSubjectService
    ) { }

  ngOnInit() {
  }
  completeThis(){
    //optionally, you can remove the todo from the array.
    this.removeThis(this.todo);
    
    //hide the todo.
    this.hide = true;
    
    //push the completed todo to the completeTodos array in the service
    this.todo.completedAt = new Date(); // set the competedAt date.
    this.fakeTdServ.completeTodos.push(this.todo);

    //Ignore ************************************************************************************************* 
    
    //same idea but using a subject
    // this.todoSubjectService.completeTodosSubj.next(this.fakeTdServ.completeTodos);
    
  }
  
  // (Optional) this method removes the item from the todos array.  
  removeThis(todo){
    let index = this.fakeTdServ.todos.indexOf(todo);
    if (index > -1){
      this.fakeTdServ.todos.splice(index,1)
      
      
    //Ignore ************************************************************************************************* 

      //if you want to notify the parent from the child of the changing status of
      // the todo list,you can use a subject to send the changing array around the app. 
      // this.todoSubjectService.todosSubj.next(this.fakeTdServ.todos)

    } 
  }
}
