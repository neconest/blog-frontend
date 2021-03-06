import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogPostService {
  private _getUserReposEndPoint = 'http://localhost:8000/api/posts';
  constructor(private _http: Http) { }

  getPosts() {
      return this._http.get(this._getUserReposEndPoint)
          .map(res => res.json());
  }
}
