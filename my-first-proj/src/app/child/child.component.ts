import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('message') messageFromParent: string;
  @Output() messageSent = new EventEmitter<string>();

  sendMessage() {
    const messageToParent = 'Message from the child component';
    this.messageSent.emit(messageToParent);
  }

 
}
