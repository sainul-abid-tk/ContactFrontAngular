import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contactSchema } from 'src/app/Models/contactSchema';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  @Output() onEditResponse=new EventEmitter
  updateContact:contactSchema={}
  constructor(private api:ApiService,private router:ActivatedRoute){}
 
   ngOnInit(): void {
    this.router.params.subscribe((res:any)=>{
      const {id}=res
      this.getAContact(id)
    })
   }

   getAContact(id:any){
    this.api.viewOneContact(id).subscribe({
      next:(res:any)=>{
        this.updateContact=res
        console.log(this.updateContact);
      },
      error:(reason:any)=>{
        console.log(reason.message);
      }
    })
  }
  cancel(id:any){
    this.getAContact(id)
  }

  update(id:any){
    this.api.updateContact(id,this.updateContact).subscribe({
      next:(res:any)=>{
        alert("Updated Successfully!!");
        this.onEditResponse.emit(id)
        this.getAContact(id)
      },
      error:(reason:any)=>{
        console.log(reason.message);
      }
    })
  }
}
