import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL_TODO } from 'src/app/app.constrants';
import { Todo } from 'src/app/todo-app/todo-app.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  createBasicAuthenticationHttpHeader() {
    let username = 'thang'
    let password = '123'
    // dGhhbmc6MTIz
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }

  public retrieveAllTodos(username: any): Observable<any> {
    return this.http.get<Todo[]>(
      `${API_URL_TODO}/todos`
    );
  }

  public deleteById(todoId: number){
   return this.http.delete(`${API_URL_TODO}/todos/${todoId}`)

  }

  public getTodoById(todoId: number){

    return this.http.get<Todo>(`${API_URL_TODO}/todos/${todoId}`)

   }


   public updateTodoById(username:string ,todoId: number,todo:Todo){
    return this.http.put(`${API_URL_TODO}/todos/${todoId}`,todo)
   }

   public addTodo(todo:Todo){
    return this.http.post(`${API_URL_TODO}/todos/`,todo)
   }




}
