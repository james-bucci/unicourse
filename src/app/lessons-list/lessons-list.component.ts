import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessons: string[] = [];

  constructor(private lessonService : LessonsService) { }

  onDelete(lesson) {
    this.lessonService.deleteLesson(lesson)
      .subscribe( () => {}, error => console.error(error) );
  }

  ngOnInit() {
    this.lessonService.getLessons()
      .subscribe( lessons => this.lessons = lessons);
  }

}
