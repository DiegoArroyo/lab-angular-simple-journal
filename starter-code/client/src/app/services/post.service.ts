import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
  return this.http.get(`${this.BASE_URL}/journalEntries`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/journalEntries/${id}`)
    .map((res) => res.json());
  }
}
