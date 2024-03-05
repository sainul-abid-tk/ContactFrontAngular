import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactSchema } from 'src/app/Models/contactSchema';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  contact:contactSchema={}
  constructor(private router:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
      this.router.params.subscribe((res:any)=>{
        const {id}=res
        this.getAContact(id)
      })
      
  }

  getAContact(id:any){
    this.api.viewOneContact(id).subscribe({
      next:(res:any)=>{
        this.contact=res
        console.log(this.contact);
        
      },
      error:(reason:any)=>{
        console.log(reason.message);
      }
    })
  }
  onEditResponse(event:any){
    this.getAContact(event)
  }

  delete(id:any){
    this.api.deleteContact(id).subscribe((res:any)=>{
      alert("Contact Deleted Successfully!!")
      this.route.navigateByUrl("/")
    }) 
  }

}
