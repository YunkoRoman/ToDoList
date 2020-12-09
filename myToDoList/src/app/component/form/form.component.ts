import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // message: IMessage;
  @Output()
  postTaskEvent = new EventEmitter();
  inputValue:string ='';
  constructor() {
  }

  ngOnInit() {
  }

  handleClick(taskForm: NgForm) {

    this.postTaskEvent.emit(taskForm.value.task)

    this.inputValue = ''
  }
}
