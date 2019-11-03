import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class UsersService{
	
  private users:User[] = [];
	
	apiURL = 'http://localhost/transporte-lctt/public';
	
	constructor(private http: HttpClient){
	}
	
	handleError(error) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
			errorMessage = error.error.message;
		} else {
			errorMessage = `Error Codes: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
	
	getUsers(): Observable<User> {
		return this.http.get<User>(this.apiURL + '/getUsers')
		.pipe(
			retry(1),
			catchError(this.handleError)
		)
	}

}

export interface User{
	id:string;
	username:string;
	name:string;
}