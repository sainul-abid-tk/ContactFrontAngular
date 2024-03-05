import { Component, OnInit } from '@angular/core';
import { contactSchema } from '../Models/contactSchema';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    allContacts:any=[]
    contact:contactSchema={}
    constructor(private api:ApiService){}
    ngOnInit(): void {
        this.getAllContacts()
    }
    addContact(){
      this.api.addContactAPI(this.contact).subscribe({
        next:(res:any)=>{
          alert("Contact List Added Successfully!!");
          this.contact={}
          this.getAllContacts()
        },
        error:(reason:any)=>{
          console.log(reason);
        }
      })
    }
    getAllContacts(){
      this.api.getAllContactAPI().subscribe({
        next:(res:any)=>{
          this.allContacts=res
        }
      })
    }
}
