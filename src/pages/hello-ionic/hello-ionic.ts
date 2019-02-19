import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public nfc:NFC,public ndef:Ndef) {
  
  }

  getDetails(){
    this.nfc.addNdefListener(() => {
      alert('successfully attached ndef listener');
    }, (err) => {
      alert('error attaching ndef listener'+JSON.stringify(err));
    }).subscribe((event) => {
      alert('received ndef message. the tag contains: '+event.tag);
      alert('decoded tag id'+this.nfc.bytesToHexString(event.tag.id));
    
      //let message = this.ndef.textRecord('Hello world');
      //this.nfc.share([message]).then(onSuccess).catch(onError);
    });
  }
}
