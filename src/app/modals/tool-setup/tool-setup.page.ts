import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tool-setup',
  templateUrl: './tool-setup.page.html',
  styleUrls: ['./tool-setup.page.scss'],
})
export class ToolSetupPage implements OnInit {

  constructor(private modalController: ModalController) { }
  title;
  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }
}