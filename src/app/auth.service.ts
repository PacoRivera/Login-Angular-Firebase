//firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//Router
import { Router } from "@angular/router";

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['login']);
        console.log('Usuario Creado', value);
      })
      .catch(err => {
        console.log('Hubo un error',err.message);
      });
  }



login(email: string, password: string) {
  this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      this.router.navigate(['home']);
      console.log('Logueado');
    })
    .catch(err => {
      console.log('Hubo un error',err.message);
    });
}

logout() {
  this.firebaseAuth.auth.signOut();
  this.router.navigate(['login']);
}

}
