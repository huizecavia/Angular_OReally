import { Component , Input} from '@angular/core';

interface TaskInterface {
      id: string;
      userId: string;
      title: string;
      summary: string;
      dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class Task {
  @Input({required: true}) task!: TaskInterface;
}


