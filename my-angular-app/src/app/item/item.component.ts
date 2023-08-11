import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../todo-app/todo-app.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { API_URL } from '../app.constrants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  id: number = 1;
  todo: Todo = new Todo(1, '', '', new Date(2011 /11  / 11 ) , false);
  constructor(
    private router: Router,
    private routerActive: ActivatedRoute,
    private service: TodoDataService
  ) {}

  ngOnInit(): void {
    this.id = this.routerActive.snapshot.params[`id`];
    if(this.id != -1){
      this.service.getTodoById(this.id).subscribe((data) => {
        this.todo =  data

       });
    }
  }

  updateTodoById(){
    if(this.id != -1){
      this.service.updateTodoById("Thang",this.id,this.todo).subscribe(res=>{
        this.router.navigate(["todoApp"])
       })
    }else{
      this.service.addTodo(this.todo).subscribe(res=>{
        this.router.navigate(["todoApp"])
      })
    }



}

}
