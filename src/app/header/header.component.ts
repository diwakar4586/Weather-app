

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTime: string;
  currentDate: string;

  constructor() {
    this.currentTime = this.getCurrentTime();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
      this.currentDate = this.getCurrentDate();
    }, 1000);
  }
  // getCurrentDate(): string{
  //   const now = new Date();
  //   return now.toLocaleDateString();
  // }
  getCurrentDate(): string {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' } as const;
    return now.toLocaleDateString('en-US', options);
  }  

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }
}
