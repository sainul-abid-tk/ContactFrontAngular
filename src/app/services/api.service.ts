import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from '../Models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL:string="https://contactbackangular.onrender.com"
  constructor(private http:HttpClient) { }

  addContactAPI(contactList:contactSchema){
    return this.http.post(`${this.SERVER_URL}/ContactList`,contactList)
  }

  getAllContactAPI(){
    return this.http.get(`${this.SERVER_URL}/ContactList`)
  }

  viewOneContact(id:any){
    return this.http.get(`${this.SERVER_URL}/ContactList/${id}`)
  }

  updateContact(id:any,contact:any){
   return this.http.put(`${this.SERVER_URL}/ContactList/${id}`,contact)
  }

  deleteContact(id:any){
    return this.http.delete(`${this.SERVER_URL}/ContactList/${id}`)
  }

}
