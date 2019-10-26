import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoSubjectService {
    //this class is for making the same exact functionality of the app
    // but using a behavior subject. 
    // it's /slightly/ more advanced so ignore it if you want to.
    todosSubj = new BehaviorSubject<Todo[]>([
        new Todo("Find apartment", 1, false, new Date()),
        new Todo("Make tempeh", 2, false, new Date()),
        new Todo("Workout and stay fit", 3, false, new Date())
    ]);

    completeTodosSubj = new BehaviorSubject<Todo[]>([]);
  
}