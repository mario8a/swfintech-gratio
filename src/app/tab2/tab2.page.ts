import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  qrData = "0"; //Para integrar al createdCode
  createdCode = null; //Crea el QR

  //Variables JSON QR
  jsonQRot = "0001";
  jsonQRalias = "Alias";
  jsonQRcl = "012180004585820842";
  jsonQRtype = "CL";
  jsonQRrefn = "0";
  jsonQRrefa = "MARIO";
  jsonQRamount = "0";
  jsonQRbank = "00012";
  jsonQRcountry = "MX";
  jsonQRcurrency = "MXN";
  //Fin de Variable JSON QR


  //JSON QR
  obj = {
    "ot": this.jsonQRot,
    "dOp":[
      {"alias": this.jsonQRalias},
      {"cl": this.jsonQRcl},
      {"type": this.jsonQRtype},
      {"refn": this.jsonQRrefn},
      {"refa": this.jsonQRrefa},
      {"amount": this.qrData},
      {"bank": this.jsonQRbank},
      {"country": this.jsonQRcountry},
      {"currency": this.jsonQRcurrency}
    ]
  };
  qrDataJson = JSON.stringify(this.obj);
  //Fin de JSON QR


  qrURL = this.qrDataJson;
  User = "000001/";

  qrCode = this.qrURL.concat(this.User);

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) {}

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.createdCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

    //Control de Págo
    oneButton()
    {
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode)//Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "1"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "1"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    twoButton()
    {
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "2"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "2"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    threeButton()
    {
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "3"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "3"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    fourButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "4"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "4"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    fiveButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "5"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "5"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    sixButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "6"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "6"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    sevenButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "7"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "7"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
    }

    eightButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "8"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "8"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
      }
    
      nineButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "9"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "9"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
      }
    
      zeroButton(){
      if (this.qrData.length > 4){
        this.createdCode = this.qrData.slice(0,5);
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        if (this.qrData == "0"){
          this.qrData = "0"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
        else{
          this.qrData = this.qrData + "0"
          this.createdCode = this.qrData;
          this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
        }
      }
      }
    
      cleanButton(){
        this.qrData = "0"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
}
