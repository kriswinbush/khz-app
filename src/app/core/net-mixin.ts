import { NetReqService } from './net-req.service';
export class NetMixin {
    constructor(public netReq:NetReqService) {
        this.netReq = netReq;
    }
}
