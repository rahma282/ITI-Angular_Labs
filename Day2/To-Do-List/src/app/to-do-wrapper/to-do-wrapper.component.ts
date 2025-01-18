import { Component ,Input} from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrls: ['./to-do-wrapper.component.css']
})
export class ToDoWrapperComponent {
  @Input() toDos: string[] = [];

  recieveFromChild(event: string) {
    if(event){
      console.log('from parent',event);
      this.toDos.push(event);
    } else {
      console.error('Received undefined or empty value from child.');
    }
    }
    DeleteTask(task: string){
      console.log('deleted',task);
      this.toDos = this.toDos.filter(t => t !== task);
    }
}


