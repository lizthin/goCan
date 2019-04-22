import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public nameEnterprise = 'Go Can';
  public arrayForm: any[] = [];
  public formGoCan: any;

  constructor(private fb: FormBuilder) {

    this.formGoCan = new FormGroup({});
    this.formGoCan = this.fb.group({
      name: '',
      tel: '',
      reason:'',
    });
  }

  ngOnInit() {
  }

  newDemo(form){

  }
}
