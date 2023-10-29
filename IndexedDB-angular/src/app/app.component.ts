import { Component } from '@angular/core';
import { IndexedDbService } from './indexed-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private indexedDbService: IndexedDbService) {}
  items!: any[];
  newItemName: string = '';

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.indexedDbService.getAllItems().then(items => {
      this.items = items;
      console.log(this.items);
    });
  }

  addItem(item: any) {
    this.indexedDbService.addItem(item).then(() => {
      this.loadItems();
    });
  }
  editItem(item: any) {
    item.editing = true;
  }
  updateItem(item: any) {
    this.indexedDbService.updateItem(item).then(() => {
      item.editing = false;
      this.loadItems();
    });
  }

  deleteItem(id: number) {
    this.indexedDbService.deleteItem(id).then(() => {
      this.loadItems();
    });
  }
}
