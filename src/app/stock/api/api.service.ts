import { Injectable } from '@angular/core';
import { API_ROUTES } from './api-routes.enum';
import { BackendResponse } from '../../common/core/types/backend-response';
import { Stock } from './stock';
import { AppHttpClient } from '../../common/core/http/app-http-client.service';

@Injectable({
    providedIn: 'root'
})
export class ApiStockService {
    constructor(private http: AppHttpClient) {}


    public create(params: Stock): BackendResponse<{ data: any }> {
        return this.http.post(API_ROUTES.STOCK, params);
    }


    public get(): BackendResponse<{ data: any }> {
      return this.http.get(API_ROUTES.STOCK);
  }
    public getStockByBranch(branch_id:number,status:number): BackendResponse<{ data: any }> {
      // here we can get stock available when status = 1 , damage(like expired by date(by stytem task) or branch mananger (can update the stock item damaged)) status= 3 and soldout  status=2
      return this.http.get(API_ROUTES.BRANCH_STOCK+'/'+branch_id+'/'+status);
    }

}