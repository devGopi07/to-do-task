import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private todoItems = new BehaviorSubject<any[]>( [
    {
      "id": 1,
      "title": "Complete Angular tutorial",
      "description": "Finish the remaining sections of the Angular standalone components tutorial.",
      "dueDate": "2025-01-20",
      "status": "In Progress",
      "priority": "High",
      "tags": ["learning", "Angular"]
    },
    {
      "id": 2,
      "title": "Grocery shopping",
      "description": "Buy fruits, vegetables, and other essentials.",
      "dueDate": "2025-01-19",
      "status": "Pending",
      "priority": "Medium",
      "tags": ["personal", "shopping"]
    },
    {
      "id": 3,
      "title": "Team meeting",
      "description": "Attend the weekly sync-up with the development team.",
      "dueDate": "2025-01-21",
      "status": "Scheduled",
      "priority": "High",
      "tags": ["work", "meeting"]
    },
    {
      "id": 4,
      "title": "Stock market research",
      "description": "Analyze stock trends for potential investments.",
      "dueDate": "2025-01-23",
      "status": "Not Started",
      "priority": "Low",
      "tags": ["learning", "finance"]
    },
    {
      "id": 5,
      "title": "Photography session",
      "description": "Plan a photoshoot at the nearby park.",
      "dueDate": "2025-01-24",
      "status": "Pending",
      "priority": "Medium",
      "tags": ["hobby", "photography"]
    },
    {
      "id": 6,
      "title": "Cricket practice",
      "description": "Practice batting and bowling for the upcoming match.",
      "dueDate": "2025-01-22",
      "status": "In Progress",
      "priority": "High",
      "tags": ["sports", "cricket"]
    },
    {
      "id": 7,
      "title": "Backend API optimization",
      "description": "Improve API performance for faster response times.",
      "dueDate": "2025-01-20",
      "status": "Not Started",
      "priority": "High",
      "tags": ["work", "development"]
    },
    {
      "id": 8,
      "title": "Book tickets for movie",
      "description": "Reserve seats for the weekend movie plan.",
      "dueDate": "2025-01-19",
      "status": "Pending",
      "priority": "Low",
      "tags": ["personal", "entertainment"]
    },
    {
      "id": 9,
      "title": "Walk 4000 steps",
      "description": "Complete daily step count for fitness.",
      "dueDate": "2025-01-19",
      "status": "In Progress",
      "priority": "Medium",
      "tags": ["health", "fitness"]
    },
    {
      "id": 10,
      "title": "Study .NET development",
      "description": "Learn the basics of .NET framework and set up the environment.",
      "dueDate": "2025-01-25",
      "status": "Not Started",
      "priority": "High",
      "tags": ["learning", "development"]
    }
  ]) 

  constructor() { }


  async getService(url: any) {
    const res = await fetch(url)
    const result = await res.json()
    console.log("result is ", result)
    return result
  }

  async postData(url: string, payload: string) {
    try {
      const response = await fetch(url, {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Convert data to JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  getToDoItems() {
    return this.todoItems

  }

  deleteItem(item: any) {
    console.log("itemm",item) 
    console.log("Bef Deleted",this.todoItems) 
    const UpdatedItems = this.todoItems?.value?.filter((d,idx)=>(item != d?.id ))
    this.todoItems.next(UpdatedItems)
    console.log("After Deleted",this.todoItems) 
  }
}
