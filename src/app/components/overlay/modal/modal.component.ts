import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { categories, storedAs } from './modal.model';
import { ModalNetService } from './modal-net.service';
import { Http } from '@angular/http';
import { CoreOverlayService } from '../../../core/core-overlay.service';

@Component({
  selector: 'psn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  overrideForm:FormGroup;
  categories = ['SAFE1', 'UNSAFE4', 'LEVEL5'];
  storedAs = ['BASE', 'ASIS'];
  constructor(public http:Http, private fb:FormBuilder, public modalNetService:ModalNetService, public coreOverlayService:CoreOverlayService) { 
    this.createOverrideForm();
  }

  ngOnInit() {}

  createOverrideForm() {
    this.overrideForm = this.fb.group({
      uName:[''],
      category:[''],
      storedas:['']
    })
  }

  overrideUrl() {
    this.modalNetService.setOverride(this.overrideForm.value)
      .subscribe( res => {
        console.log(res);
        this.coreOverlayService.activate({state:'CLOSE'});
      });
  }

 closeModal() {
   this.coreOverlayService.activate({state:'CLOSE'});
  }

}
