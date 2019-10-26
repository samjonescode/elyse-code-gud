import { Component, OnInit, Input } from '@angular/core';
import { FakeToDoService } from './services/fake-todo.service';
import { TodoSubjectService } from './services/todo-subject.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-material-playground',
  templateUrl: './material-playground.component.html',
  styleUrls: ['./material-playground.component.css']
})
export class MaterialPlaygroundComponent implements OnInit {
  todos: Todo[];
  completeTodos: Todo[];
  
  constructor(
    private fakeTdServ: FakeToDoService,
    // private todoSubjectService: TodoSubjectService
    ) { }

  ngOnInit() {
     //for working without an internet connection, i use the fake todo service.
    
     this.todos = this.fakeTdServ.todos;
     
     this.completeTodos = this.fakeTdServ.completeTodos;
     


// below code is if using a behavior subject and the todo-subject service.
//Ignore ************************************************************************************************* 

    //  this.todoSubjectService.todosSubj.subscribe(todos => {
    //    this.todos = todos;
    //  })
    //  this.todoSubjectService.todosSubj.subscribe(todos => {
    //    this.completeTodos = todos;
    //  })
  }

 

  
}
