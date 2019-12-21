import {ChangeDetectionStrategy, Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import {TodoListData} from '../dataTypes/TodoListData';
import {TodoItemData} from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';
import {SpeechRecognitionService} from '../speechRecognition.service';

//Importation des boutons undo/redo
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

// Importation du bouton pour la reconnaissance vocale
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

type FCT_FILTER_ITEMS = (item: TodoItemData) => boolean;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  // Filtres pour l'affichages des éléments de la todo list (Tous, Actifs, Complétés)
  filterAll: FCT_FILTER_ITEMS = () => true;
  filterDone:  FCT_FILTER_ITEMS = (item) => item.isDone;
  filterUnDone: FCT_FILTER_ITEMS = (item) => !item.isDone;
  currentFilter = this.filterAll;  

  // Récupération des items en fonction du filtre
  getFilteredItems():TodoItemData[]{
    return this.data ? this.data.items.filter(this.currentFilter) : [];
  }

  @Input() 

  @ViewChild("newTodoInput", {static:false}) private inputTodo:ElementRef;
  
  private data: TodoListData;
  private titre: string;
  public showEditTitre: boolean;

  // Boutons undo/redo
  faUndo = faUndo;
  faRedo = faRedo;

  // Bouton microphone
  faMicro = faMicrophone;

  constructor(private todoService: TodoService, private speechRecognitionService: SpeechRecognitionService) { 
   todoService.getTodoListDataObserver().subscribe(tdl => this.data = tdl);
   this.titre = this.data.label;
  }

  ngOnInit() {
  }

  // retourne les labels des items de la todo list
  get label(): string {
    return this.data ? this.data.label : '';
  }

  // retourne les items de la todo list
  get items(): TodoItemData[] {
    return this.data ? this.data.items : [];
  }

  // Ajoute un item à la todo list
  appendItem(label: string){
    this.todoService.appendItems(
      {label, isDone: false}
    )
  }

  // Check un item, une tâche
  itemDone(item: TodoItemData, done: boolean){
    this.todoService.setItemsDone(done, item);
  }
  
  // Changement du label d'un item
  itemLabel(item: TodoItemData, label: string){
    this.todoService.setItemsLabel(label, item);
  }

  // Supprime l'item
  removeItem(item: TodoItemData){
    this.todoService.removeItems(item);
  }

  // Retourne true si toutes les tâches sont cochées et false sinon
  isAllDone():boolean{
    return this.items.every(it=>it.isDone);
  }

  // Permet de cocher toutes les tâches de la todo list
  toggleAllDone(){
    const done= !this.isAllDone();
    this.todoService.setItemsDone(done, ...this.items);
  }

  // Supprime toutes les tâches cochées 
  removeCheckedItems(){
    this.data.items.forEach(item=>{
      if(item.isDone){
        this.todoService.removeItems(item);
      }
    });
  }

  // Nombre de tâches non côchées dans la todo list
  nbItems():number{
    return (this.data.items.length - this.data.items.filter(item=>item.isDone).length);
  }

  // Supprimer toutes les tâches
  removeAllItems(){
    this.data.items.forEach(item=>{
      this.todoService.removeItems(item);
    });
  }

  //undo 
  undo(){
    this.todoService.undo();
  }

  //redo 
  redo(){
    this.todoService.redo();
  }

  // reconnaissance vocale
  startReco(): void {
    this.speechRecognitionService.record()
        .subscribe(
        //listener
        (value) => {
            this.speechRecognitionService.DestroySpeechObject();
            this.inputTodo.nativeElement.value = value;
        },
        //error
        (err) => {
            if (err.error == "no-speech") {
                alert("Entrée micro non détectée");
            }
        },
        //completion
        () => {
            this.speechRecognitionService.DestroySpeechObject();
        });
}
}
