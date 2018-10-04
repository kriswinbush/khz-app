import { Injectable } from '@angular/core';
import { environment as ENV } from '../../../../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ISetCfg, IHealthCheck } from '../../../../core/core.interface';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalNetService {
    private _modalSubject = new Subject<any>();
    modalState = this._modalSubject.asObservable();
    constructor(public http:Http) { }

    setOverride(config:ISetCfg) {
        //POST /v1/override/add?url="<url_string>"&category="<category>"&storedas="<hint>"
        let body = `url=${config.url}&category=${config.category}&storedas=${config.storeas}`;
        let myHeaders = new Headers({'X-Operator': config.user, 'Content-Type': 'application/x-www-form-urlencoded'})
        let opts = new RequestOptions({headers: myHeaders})
        console.log(config);
        return this.http
            .post(`${ENV.urleasy}/v1/override/add`, body, opts)
            .map(res => res.json())
        /* return Observable.of([{}])
            .map(res => res[0]) */
    }
    sendCloseModal(msg) {
        this._modalSubject.next(msg);
    }
}
