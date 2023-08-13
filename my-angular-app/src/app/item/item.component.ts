import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../todo-app/todo-app.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { API_URL } from '../app.constrants';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  id: number = 1;
  todo: Todo = new Todo(1, 'Thang', 'Dz ', new Date(2011 /11  / 11 ) , false);
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private routerActive: ActivatedRoute,
    private service: TodoDataService
  ) {}
  username : string= "";
  description:string = "";

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
