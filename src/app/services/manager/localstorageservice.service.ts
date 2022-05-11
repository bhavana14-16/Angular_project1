import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageserviceService {

constructor() { }
  setData(key: string, data: string) {
    return localStorage.setItem(key, JSON.stringify(data));
}

getData(key: string) {
    let data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
}

deleteData(key: string) {
    return localStorage.removeItem(key);
}
}
