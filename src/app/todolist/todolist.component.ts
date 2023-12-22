import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray = [{taskName:"Brush Teeth",isCompleted:false}];

  //function to handle the submit button
  onSubmit(form:NgForm){
    console.log(form);
    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted:false
    })
    form.reset();
  }


  //function to handle delete task button
  onDelete(index:number){
    console.log(index);
    this.taskArray.splice(index,1);
  }

  //function to handle the checkbox
  onCheck(index:number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
    console.log(this.taskArray);
  }
}
