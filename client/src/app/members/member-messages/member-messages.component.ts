import { Component, inject, input, output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from '../../_services/message.service';
import { Message } from '../../_models/message';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  imports: [ TimeagoModule, FormsModule],
  templateUrl: './member-messages.component.html',
  styleUrl: './member-messages.component.css'
})
export class MemberMessagesComponent {
  @ViewChild('messageForm') messageForm?: NgForm;
  messageService = inject(MessageService);
  username = input.required<string>();
  messageContent = '';
  
  sendMessage() {
    this.messageService.sendMessage(this.username(), this.messageContent).then(() => {
      this.messageForm?.reset();
    })
  }

}
