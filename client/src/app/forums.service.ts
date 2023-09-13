import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  constructor(private http: HttpClient) { }

  getThreads(): Observable<any[]> {
    return this.http.get<any[]>('/api/forums/threads');
  }

  postNewThread(threadInfo: FormGroup): Observable<any> {

    const data = {
      id: '',
      username: StorageService.getUser().name,
      title: threadInfo.value['title'],
      text: threadInfo.value['text'],
      timestamp: '',
      comments: []
    }

    return this.http.post('/api/forums/thread', data);
  }
}
