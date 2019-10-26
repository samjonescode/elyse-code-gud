import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class FakeToDoService {
    todos: Todo[] = 
    [
        new Todo("Find apartment", 1, false, new Date()),
        new Todo("Make tempeh", 2, false, new Date()),
        new Todo("Workout and stay fit", 3, false, new Date())
    ]

    completeTodos: Todo[]=[];

    // getTodos(){
    //     return this.todos;
    // }

    // getCompleteTodos(){
    //     return this.completeTodos;
    // }


}