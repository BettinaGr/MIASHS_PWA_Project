import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { TodoItemData } from '../dataTypes/TodoItemData';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input()
  private data: TodoItemData;
  
  constructor(private todoService: TodoService) {
    
   }

  ngOnInit() {

  }

  get label(): string {
    return this.data.label;
  }
  
  removeItem(item: TodoItemData){
    this.todoService.removeItems(item);
  }

  itemDone(item: TodoItemData, done: boolean){
    this.todoService.setItemsDone(done, item);
  }

}
