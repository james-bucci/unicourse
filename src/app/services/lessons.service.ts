import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const path : string = '/lessons';

@Injectable()
export class LessonsService {

    constructor(private api: ApiService) { }

    createLesson(lesson) {
        return this.api.post(path, lesson);
    }

    getLessons() {
        return this.api.get(path);
    }

    deleteLesson(lesson) {
        return this.api.delete(`${path}/${lesson}`);
    }


}