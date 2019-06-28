import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";

// All the RxJS stuff we need
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HotelInterface} from "src/interfaces/hotel.interface";
import {query} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private host = 'http://localhost:8000';

  constructor(
    private http: HttpClient
  ) {
  }

  request(path: string, method: any = 'GET', bodyParams?: Object, queryParams?: HttpParams): Observable<HotelInterface> {
    const url = this.host + '/' + path;
    console.log(url);

    let req = null;
    switch (method) {
      case 'GET':
      case 'HEAD':
      case 'DELETE':
      case 'OPTIONS':
        req = new HttpRequest(method, url, {
          params: queryParams,
        });
        break;
      default:
        req = new HttpRequest(method, url, bodyParams, {
          params: queryParams,
        });
    }
    return this.http.request(req).pipe(
      map(this.parseData),
      catchError(this.handleError)
    ) as unknown as Observable<HotelInterface>;
  }

  private parseData(res: HttpResponse<any>) {
    const body = res.body;
    if (body === undefined) {
      return [];
    }
    return body;
  }

  // Displays the error message
  private handleError(error: Response | any) {
    let errorMessage: string;

    errorMessage = error.message ? error.message : error.toString();

    console.error(errorMessage);
    // In real world application, call to log error to remote server
    // logError(error);

    // This returns another Observable for the observer to subscribe to
    return throwError(errorMessage);
  }
}
