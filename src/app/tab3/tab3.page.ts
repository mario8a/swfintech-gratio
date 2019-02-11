import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ViewChild, AfterViewInit } from '@angular/core';

import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {
  scannedCode = null;


  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) {}

  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;
  
  barcodeValue;
  
  ngAfterViewInit() {
      this.barecodeScanner.start();
  }

  onValueChanges(result){
      this.barcodeValue = result.codeResult.code;
      console.log(this.barcodeValue);
      
  }




  async scanCode() {
    const alert = await this.alertController.create({
      header: 'Pago realizado con exito',
      buttons: ['OK']
    });

    await setTimeout(() =>  alert.present(), 3000);
  }



  // scanCode() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     this.scannedCode = barcodeData.text;
  //   }, (err) => {
  //       console.log('Error: ', err);
  //   });
  // }

}
