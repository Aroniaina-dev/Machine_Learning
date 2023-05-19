import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../../../../services/webService/web-service.service';
import { ImageService } from 'src/app/services/image/image.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  dataProduct: any;

  constructor(private imageService: ImageService, private monService: WebServiceService) { }

  ngOnInit() {
    const dataToSend = { arg1: 'valeur1', arg2: 'valeur2' };
    this.monService.sendData(dataToSend).subscribe(response => {
      this.data = response;
    });

    this.monService.getData().subscribe(response =>{
      this.dataProduct = response;
    })
  }

  selectedFile!: ImageSnippet;
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
}
