import { Injectable } from '@angular/core';
import {TodoListData} from './dataTypes/TodoListData';
import {Observable, BehaviorSubject} from 'rxjs';
import {TodoItemData} from './dataTypes/TodoItemData';

@Injectable()
export class TodoService {

  private todoListSubject = new BehaviorSubject<TodoListData>( {label: 'TodoList', items: []} );

  private listUndo: TodoListData[] = [];
  private listRedo: TodoListData[] = [];

  constructor() { 
    //Récupération de la todo list stocké dans la mémoire de l'ordinateur
    if(typeof localStorage!='undefined' && localStorage.getItem('todoList')!==null) {
      // Récupération de la valeur dans web storage (JSON donc à parser)
      const tdl = JSON.parse(localStorage.getItem('todoList'));
      this.todoListSubject.next( {
        label: tdl.label,
        items: tdl.items
      });


    }
  }

  getTodoListDataObserver(): Observable<TodoListData> {
    return this.todoListSubject.asObservable();
  }

  // Changement du label d'un item
  setItemsLabel(label: string, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label, isDone: I.isDone}) )
    });
    //Sauvegarde l'action qui vient d'être réalisée
    this.saveAction(tdl);
  }

  // Check un item
  setItemsDone(isDone: boolean, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label: I.label, isDone}) )
    });
    //Sauvegarde l'action qui vient d'être réalisée
    this.saveAction(tdl);
  }

  // Ajout d'un item
  appendItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: [...tdl.items, ...items]
    });
    //Sauvegarde l'action qui vient d'être réalisée
    this.saveAction(tdl);
  }

  // suppression d'un item
  removeItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items.filter( I => items.indexOf(I) === -1 )
    });
    //Sauvegarde l'action qui vient d'être réalisée
    this.saveAction(tdl);
  }

  // undo
  undo(){
    // Si la liste des undo n'est pas vide 
    if(this.listUndo.length !== 0) {
      //On met l'action annulé dans le redo
      this.listRedo.push(this.todoListSubject.getValue()); 
      //On retire l'action annulé du undo
      const action = this.listUndo.pop(); 
      //La liste précédente devient la liste actuelle
      this.todoListSubject.next( { 
        label: action.label,
        items: action.items
      });
    }
  }

  // redo
  redo(){
    // Si la liste des redo n'est pas vide 
    if(this.listRedo.length !== 0) {
      //On met l'action restitué dans le undo
      this.listUndo.push(this.todoListSubject.getValue()) 
      //On retire l'action restitué du redo
      const action = this.listRedo.pop(); 
      //La liste suivante devient la liste actuelle
      this.todoListSubject.next( { 
        label: action.label,
        items: action.items
      });
    }
  }
  // On sauvegarde les actions réalisées (ajout, suppression, check ... d'un item) 
  // Appel à a la fonction qui permet le local storage
  saveAction(before:TodoListData) {
    // On place l'action qui vient d'être réalisé dans la listUndo pour pouvoir undo/redo
    this.listUndo.push(before);
    // On vide la liste des redo
    this.listRedo = [];
    // On sauvegarde dans le local storage
    this.saveLocalStorage();
   }

  // On sauvegarde dans le local storage
  saveLocalStorage(){
    // Ajout de l'objet todoList dans la mémoire de l'ordinateur
    localStorage.setItem( 'todoList', JSON.stringify(this.todoListSubject.getValue()) );
  }

}
