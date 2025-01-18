import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  imports: [],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {
  @Output() sendToParent = new EventEmitter<string>();

  addNewTask(value: string) {
    if(value.trim()){
      this.sendToParent.emit(value);
    }else {
      console.error('Empty task value, not emitted.');
    }
  }
}
