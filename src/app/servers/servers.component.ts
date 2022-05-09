import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allownew=true;
  messages='no sv create';
  updateInput="";

  allownewtest=false;
  updateInputTest;


  constructor() { 

    if(this.updateInputTest!=''){
      this.allownewtest=true;
    }


    setTimeout(() => {
      this.allownew=false;
    }, 2000);
  }

  cleardata(){
    this.updateInputTest='';
  }

  changeMessages(){
    this.messages='Create 1 sv'+this.updateInput
  }
  onUpdateInput(e:Event){
    this.updateInput=(<HTMLInputElement>e.target).value;
  }
  ngOnInit(): void {
  }

}
