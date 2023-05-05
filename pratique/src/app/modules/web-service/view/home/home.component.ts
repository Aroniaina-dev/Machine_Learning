import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../../../../services/web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private monService: WebServiceService) { }

  ngOnInit() {
    const dataToSend = { arg1: 'valeur1', arg2: 'valeur2' };
    this.monService.sendData(dataToSend).subscribe(response => {
      this.data = response;
    });
  }
}
