import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private _usersService:UsersService = inject(UsersService);
  
  public userId       = signal<number>(1);
  public currentUser  = signal<User|undefined>(undefined);
  public userWasFound = signal<boolean>(true);

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  loadUser( id:number ):void {
    if (id <= 0 ) return;

    this.currentUser.set(undefined);

    this.userId.set(id);

    this._usersService.getById(id)
      .subscribe( ({ data }) => {
        this.currentUser.set( data );
      });
  }

}
