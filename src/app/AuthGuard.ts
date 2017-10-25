// import { Injectable } from '@angular/core';
// import {
//     CanActivate, Router,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot,
//     Route
// }                           from '@angular/router';
// import { FbLoginService } from './fb-login.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private service: FbLoginService, private router: Router) {}

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         return this.checkLogin();
//     }

//     checkLogin(): Promise<boolean> {
//         return new Promise((resolve, reject) => {
//             this.service.isLoggedIn().then(() => {
//                 resolve(true);
//             }).catch(() => {
//                 this.router.navigate(['']);
//                 reject(false);
//             });
//         });
//     }
// }