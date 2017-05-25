import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' 
})
export class AppComponent  { 

  name = 'Angular'; 
	
	
	peopleData = [];
	
	loadPeopleData = function() {
		this.peopleData = [
	{id:1,name:'Bhanu',
	age:31,
	place:'hyderabad'},
	{id:2,name:'Bhanu2',
	age:31,
	place:'hyderabad'},
	{id:3,name:'Bhanu3',
	age:31,
	place:'hyderabad'},
	{id:4,name:'Bhanu4',
	age:31,
	place:'hyderabad'}];
	}
	
	isEdit = false;
	
	addPeopleData = function() {
		console.log("Name : "+this.name);
		console.log("Age : "+this.age);
		console.log("Place : "+this.place);
		var people = {};
		people['name'] = this.name;
		people['age'] = this.age;
		people['place'] = this.place;
		this.peopleData.push(people);
	}
	
	people1 = {};
	
	loadEdit = function(entityToEdit){
		this.isEdit = true;
		this.people1 = entityToEdit;
	}
	
	updatePeopleData = function(entity) {
		for(let i=0;i<this.peopleData.length;i++){
			if(this.peopleData[i].id === entity.id){
				this.peopleData[i] = entity;
				break;
			}
		}
		this.isEdit = false;
		this.people1 = {};
	}
	
	deletePeopleData = function(entity) {
		var indexToDelete = "null";
		for(let i=0;i<this.peopleData.length;i++){
			if(this.peopleData[i].id === entity.id){
				indexToDelete = i;
				break;
			}
		}
		this.peopleData.splice(indexToDelete,1);
	}
	
	addPeopleData1 = function(entity) {
		/*console.log("Name : "+this.name);
		console.log("Age : "+this.age);
		console.log("Place : "+this.place);
		var people = {};
		people['name'] = this.name;
		people['age'] = this.age;
		people['place'] = this.place;
		this.peopleData.push(people);*/
		console.log("Entity :"+JSON.stringify(entity));
		this.peopleData.push(entity);
	}
	
  constructor() {
	 console.log("In constructor");
	}
}
