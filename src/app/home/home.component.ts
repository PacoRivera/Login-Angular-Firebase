//AuthService
import { AuthService } from '../auth.service';

//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Router
import { Router } from "@angular/router";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private firebaseAuth: AngularFireAuth
  ) {
    firebaseAuth.authState.subscribe(res => {
      if (res == null) {
        console.log('user is logged in', res);
        this.router.navigate(['login']);
      } else {
        console.log('user not logged in', res);
      }
    });
  }

  ngOnInit() {
  }

}
