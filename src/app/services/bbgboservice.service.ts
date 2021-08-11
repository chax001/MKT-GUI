import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BbgboserviceService {

  constructor(private http: HttpClient) { }
getSpeakers(){
  return this.http.get('/server/conferenceapp/api/v1/speakers')
  .pipe(retry(1),catchError(this.handleError));
}
  getSpeaker() {
    return this.http.get('/server/conferenceapp/api/v1/speakers/1')
    .pipe(retry(1),catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred', error.error.message);
    } else {
      console.error('Backend returned code${error.status},' + 'body was:${error.error}');
    }
    return throwError('Something bad happened');
  }
}
