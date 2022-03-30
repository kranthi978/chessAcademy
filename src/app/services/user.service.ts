import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      constructor(
            private http: HttpClient,
            public router: Router,
      ) { }
      BaseUrl = "https://localhost:5001/";
      // Parse the CurrentUser From URL
      CurrentUser!: string;
      CurrentUserEmail!: string;

}
