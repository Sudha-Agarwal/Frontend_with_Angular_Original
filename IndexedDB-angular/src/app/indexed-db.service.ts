import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {private dbName = 'exampleDB';
private storeName = 'exampleStore';
private dbPromise!: Promise<IDBPDatabase>;

constructor() {
  this.initDB();
}

private async initDB() {
  this.dbPromise = openDB(this.dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('exampleStore')) {
        db.createObjectStore('exampleStore', { keyPath: 'id', autoIncrement: true });
      }
    }
  });
}

async addItem(item: any): Promise<void> {
  const db = await this.dbPromise;
  const tx = db.transaction(this.storeName, 'readwrite');
  const store = tx.objectStore(this.storeName);
  await store.add(item);
  await tx.done;
}

async updateItem(item: any): Promise<void> {
  const db = await this.dbPromise;
  const tx = db.transaction(this.storeName, 'readwrite');
  const store = tx.objectStore(this.storeName);
  await store.put(item);
  await tx.done;
}

async deleteItem(id: number): Promise<void> {
  const db = await this.dbPromise;
  const tx = db.transaction(this.storeName, 'readwrite');
  const store = tx.objectStore(this.storeName);
  await store.delete(id);
  await tx.done;
}

async getAllItems(): Promise<any[]> {
  const db = await this.dbPromise;
  const tx = db.transaction(this.storeName, 'readonly');
  const store = tx.objectStore(this.storeName);
  return store.getAll();
}
}
