import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedIndexChangedEventData } from '@nativescript-community/ui-material-bottom-navigation';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  selectedIndex = 0;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  changed(event: SelectedIndexChangedEventData): void {
    this.selectedIndex = event.newIndex;
  }
}
