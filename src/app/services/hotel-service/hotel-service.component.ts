import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable } from "rxjs";

@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.component.html',
  styleUrls: ['./hotel-service.component.css'],
  providers: [NgbCarouselConfig]
})
export class HotelServiceComponent implements OnInit {
  @Input() openModal: Observable<any>;
  @ViewChild("content")
  public modalTemplate;
  public typeService: any[] = [];
  public isOpen: boolean;
  public generalObject: any[] = [];
  public photos: any[] = [];
  public showNavigationArrows = false;
  public showNavigationIndicators = false;
  public iconArray: any[] = [];

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.openModal.subscribe((data: any) => {
      if (data.accion) {
        this.openHotel()
        this.generalObject = data.param,
          this.photos = data.param.images,
          this.iconArray = data.object
      }
    })
  }

  openHotel() {
    this.modalService.open(this.modalTemplate, { windowClass: 'xlModal' });
    this.isOpen = true;
  }


}

