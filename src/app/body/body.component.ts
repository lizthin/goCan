import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import * as AOS from 'aos'
import { Subject } from "rxjs";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('blackState', [
      state('open', style({
        backgroundColor: '{{background}}',
        color: '{{color}}'
      }), { params: { background: 'yellow', color: 'yellow' } }),
      state('closed', style({
        backgroundColor: '#fff',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class BodyComponent implements OnInit {

  public arrayIcon: any[] = [];
  public hoverState = '';
  public arrayCompetition: any[] = [];
  public backgroundCard: string;
  public modalOpenHotel: boolean;
  public openModal: Subject<any> = new Subject<any>();
  public styleText: object;
  public percentaje: number;
  public commentaries: any[] = [];
  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    this.commentaries.push(
      {
        id: 1,
        name: 'Los Chimuelos',
        imgClient: 'assets/images/comentary1.jpg',
        commentary: `Excelente servicio, mis mascotas llegan felices,
     llegan con buen olor y quieren mucho a leidy y uriel`,
      },
      {
        id: 2,
        name: 'Gavy',
        imgClient: 'assets/images/comentary2.jpg',
        commentary: `Excelente servicio, mis mascotas llegan felices,
       llegan con buen olor y quieren mucho a leidy y uriel`,
      }
    )


    this.arrayIcon.push(
      {
        id: 1,
        img: 'assets/images/shower.jpg',
        description: 'HOTEL CANINO',
        background: '#488fb8',
        colorFont: '#fff',
        paragraph: `Contamos con instalaciones acordes para el entretenimiento y confort de tu mascota.
         Nuestro equipo esta siempre atento a las necesidades de nuestros clientes`,
        properties: {
          tittle: 'Hotel Canino',
          images: {
            imageOne: 'assets/images/chimu.jpeg',
            imageTwo: 'assets/images/jack.jpeg',
            imageThree: 'assets/images/gunter.jpeg'
          },
          decriptionOne: `Go Can te ofrece
     servicio de hospedaje por dias, semanas o meses.`,
          decriptionTwo: `Estaremos realizando actividades de:
        Instrucción canina
        Diversión y aventura
        Baño y alimentacion`,
          decriptionThree: ` Tu mascota experimentara el mejor Happy Time`
        },
        iconArray: {
          one: 'gocan-dog-biscuit',
          two: 'gocan-dog-bowl',
          three: 'gocan-dog-4',
        }
      },
      {
        id: 2,
        img: 'assets/images/school.jpg',
        description: 'ESCUELA',
        background: '#a4ad82',
        colorFont: '#fff',
        paragraph: `Contamos con instalaciones acordes para el entretenimiento y confort de tu mascota.
        Nuestro equipo esta siempre atento a las necesidades de nuestros clientes`,
        properties: {
          tittle: 'Escuela de entrenamiento',
          images: {
            imageOne: 'assets/images/shower.jpg',
            imageTwo: 'assets/images/shower.jpg',
            imageThree: 'assets/images/shower.jpg'
          },
          decriptionOne: `Go Can te ofrece
     servicio de hospedaje por dias, semanas o meses.`,
          decriptionTwo: `  Estaremos realizando actividades de:
        Instrucción canina
        Diversión y aventura
        Baño y alimentacion`,
          decriptionThree: ` Tu mascota experimentara el mejor Happy Time`
        },
        iconArray: {
          one: '',

        }
      },
      {
        id: 3,
        img: 'assets/images/adventure.jpg',
        description: 'AVENTURA',
        background: '#aa7e5b',
        colorFont: '#fff',
        paragraph: `Caminatas y paseos en zonas ecologicas  y confort de tu mascota.
        Nuestro equipo esta siempre atento a las necesidades de nuestros clientes`,
        properties: {
          tittle: 'Aventura y diversión',
          images: {
            imageOne: 'assets/images/shower.jpg',
            imageTwo: 'assets/images/shower.jpg',
            imageThree: 'assets/images/shower.jpg'
          },
          decriptionOne: `Go Can te ofrece
     servicio de hospedaje por dias, semanas o meses.`,
          decriptionTwo: `  Estaremos realizando actividades de:
        Instrucción canina
        Diversión y aventura
        Baño y alimentacion`,
          decriptionThree: ` Tu mascota experimentara el mejor Happy Time`
        },
        iconArray: {
          one: '',

        }
      }
    )
    this.arrayCompetition.push(
      {
        id: 1,
        img: '../../assets/images/icon1.png',
        tittle: 'Flexible',
        description: 'Adaptable a su modelo de competencias'
      },
      {
        id: 2,
        img: '../../assets/images/icon2.png',
        tittle: 'Multi-Nível',
        description: 'Evaluación de 90º, 180º o 360º'
      },
      {
        id: 3,
        img: '../../assets/images/icon3.png',
        tittle: 'Competencias Especíﬁcas',
        description: 'Competencias de nivel de cargo, departamento, organizacionales y de liderazgo'
      },
      {
        id: 4,
        img: '../../assets/images/icon4.png',
        tittle: 'Resultados Web & Reportes Detallados',
        description: 'Visualice la información fácilmente e interprete los resultados rápidamente'
      },
    )
  }

  ngOnInit() {
    AOS.init();
    this.rotateText();
    /*
 * Noel Delgado | @pixelia_me
 */

    var items = []
      , point = document.querySelector('svg').createSVGPoint();

    function getCoordinates(e, svg) {
      point.x = e.clientX;
      point.y = e.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    }

    function changeColor(e) {
      document.body.className = e.currentTarget.className;
    }

    function Item(config) {
      Object.keys(config).forEach(function (item) {
        this[item] = config[item];
      }, this);
      this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
      this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
    }

    Item.prototype = {
      update: function update(c) {
        this.clip.setAttribute('cx', c.x);
        this.clip.setAttribute('cy', c.y);
      },
      mouseMoveHandler: function mouseMoveHandler(e) {
        this.update(getCoordinates(e, this.svg));
      },
      touchMoveHandler: function touchMoveHandler(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) return this.update(getCoordinates(touch, this.svg));
      }
    };

    [].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
      items.push(new Item({
        el: item,
        svg: item.querySelector('svg'),
        clip: document.querySelector('#clip-' + index + ' circle'),
      }));
    });

    [].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
      button.addEventListener('click', changeColor);
    });






  }
  clickDetailServices(card) {
    this.openModal.next({ accion: true, param: card.properties, object: card.iconArray })
  }

  colorCard(background) {
    this.hoverState = background

  }
  leaveCard() {
    this.hoverState = ''

  }
  rotateText() {
    let index = 0
    setInterval(() => {
      if (index >= 100) {
        index = 0
      }
      this.styleText = { transform: 'translate(-' + (index++) + '%, 0%) translate3d(0px, 0px, 0px)' }
    }, 200);
  }
}
