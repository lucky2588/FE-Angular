import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public time : Date,
    public isDone : boolean
  ){
  }
}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  public message:string="";
  public todos :Todo[]=[];

  constructor(private service:TodoDataService,
    private router: Router
    ){

  }
  refreshTodo(){
    this.service.retrieveAllTodos("thang").subscribe(
    response => {
      this.todos = response;
    }
   )
  }

  ngOnInit(): void {
    this.refreshTodo();
  }


  deleteById(todoId:number){
    this.service.deleteById(todoId).subscribe(
      response=> {
        this.message = `Delete Seccess Todo with ID ${todoId} `
        this.refreshTodo();
      }
    )
  }

  updateTodoById(todoId : number){
    this.router.navigate(["item",todoId])
  }

  addTodo(){
    this.router.navigate(["item",-1])
  }



}
