import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILeaderBoard } from 'src/app/models/modelsApi/ileader-board';
import { Observable } from 'rxjs';
import { IClickRequest } from 'src/app/models/modelsApi/iclick-request';
import { IClick } from 'src/app/models/modelsApi/iclick';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionsService {
  private urlLeaderBoard: string = 'leaderboard';
  private urlClick: string = 'klik';

  constructor(private _httpClient: HttpClient) { }

  /**
   * @param {string} target
   */
  private createAddress = (target: string): string => `${environment.apiUrl}/${target}?timestamp=${~~(Date.now() / 1000)}`;

  getLeaderBoard(): Observable<ILeaderBoard[]> {
    let url = this.createAddress(this.urlLeaderBoard);
    return this.processRequest('get', url);
  }

  /**
   * @param {Object} model
   * @param {string} model.session
   * @param {string} model.team
   */
  postClick(model: IClickRequest): Observable<IClick> {
    let url = this.createAddress(this.urlClick);
    
    let params = new HttpParams();
    params = params.append("session", model.session);
    params = params.append("team", model.team);

    return this.processRequestWithParams('post', url, params);
  }

  /**
   * @param {string} method
   * @param {string} url
   */
  private processRequest(method: string, url: string): Observable<any> {
    return new Observable<any>(observer => {
      this._httpClient[method](url).subscribe((item: any) => {
        observer.next(item);
      }, (error: any) => {
        observer.error(error);
      });
    });
  }

  private processRequestWithParams(method: string, url: string, parameters: any): Observable<any> {
    return new Observable<any>(observer => {
      this._httpClient[method](url, parameters).subscribe((item: any) => {
        observer.next(item);
      }, (error: any) => {
        observer.error(error);
      });
    });
  }
}
