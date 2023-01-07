import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotleName : string = "hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms : Room = {
    totalRooms : 10,
    availableRooms : 10,
    bookedRooms : 5,
  }

  roomlist : RoomList[] = [
{
  RoomType : 'deluxre Room',
  amenities : 'free wifi , tv , bath',
  price : 500,
  photos : 'https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  checkinTime : new Date('11-Nov-2022'),
  checkoutTime :new Date('11-Nov-2022'),
},
{
  RoomType : 'Private Room',
  amenities : 'free wifi , tv , bath',
  price : 5000,
  photos : 'https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  checkinTime : new Date('11-Nov-2022'),
  checkoutTime :new Date('11-Nov-2022'),
},
{
  RoomType : 'simple Room',
  amenities : 'free wifi , tv , bath',
  price : 300,
  photos : 'https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  checkinTime : new Date('11-Nov-2022'),
  checkoutTime :new Date('11-Nov-2022'),
}
  ]


  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }
  toggle(){
 this.hideRooms = !this.hideRooms;

}

}
