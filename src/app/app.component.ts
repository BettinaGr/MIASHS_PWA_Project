import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoListData} from './dataTypes/TodoListData';
import {TodoItemData} from './dataTypes/TodoItemData';
import { SpeechRecognitionService } from './speechRecognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string;

  constructor(private speechRecognitionService: SpeechRecognitionService) {
      this.showSearchButton = true;
      this.speechData = "";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
      this.showSearchButton = false;

      this.speechRecognitionService.record()
          .subscribe(
          //listener
          (value) => {
              this.speechData = value;
              console.log(value);
          },
          //errror
          (err) => {
              console.log(err);
              if (err.error == "no-speech") {
                  console.log("--restatring service--");
                  this.activateSpeechSearchMovie();
              }
          },
          //completion
          () => {
              this.showSearchButton = true;
              console.log("--complete--");
              this.activateSpeechSearchMovie();
          });
  }

}