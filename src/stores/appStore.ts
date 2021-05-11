import { makeAutoObservable } from 'mobx';

export default class AppStore {
  isSidebarOpen = true;

  constructor() {
    makeAutoObservable(this);
  }

  trigger() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
