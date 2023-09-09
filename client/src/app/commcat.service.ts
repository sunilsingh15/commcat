import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommcatService {

  constructor(private http: HttpClient) { }

  postForm(form: FormGroup, picture: ElementRef): Observable<any> {

    const data = new FormData();

    data.set('name', form.value['name']);
    data.set('gender', form.value['gender']);
    data.set('community', form.value['community']);
    data.set('picture', picture.nativeElement.files[0]);
    data.set('likes', form.value['likes']);
    data.set('dislikes', form.value['dislikes']);
    data.set('personality', form.value['personality']);
    data.set('other', form.value['other']);

    return this.http.post('/api/submit', data);
  }


}
