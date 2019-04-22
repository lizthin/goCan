import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public scrollbar: number;
  public flag_scroll: boolean = false;
  constructor() {
  }
  ngOnInit() {
  }
  debugger
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollbar = window.scrollY
    if (window.screen.width > 800) {
      if (this.scrollbar >= 700) {
        this.flag_scroll = true;
      } else {
        if (this.flag_scroll) {
          this.flag_scroll = false;
        }
      }
    }
  }

  srolling() {
    window.scrollTo(0, document.getElementById('footer').getBoundingClientRect().top);
  }

}
