import { Component, EventEmitter ,Output,Input} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input() tasks: string[] = [];
  @Output() handleDeleteTask = new EventEmitter<string>();
  completedTasks: string[] = [];

  handleTasks(){  //display
    console.log('Handling tasks', this.tasks);
  }
  deleteTask(task: string){
    this.handleDeleteTask.emit(task);
  }
  complete(task: string) {
    if (!this.completedTasks.includes(task)) {
      this.completedTasks.push(task);
    }
  }
}
