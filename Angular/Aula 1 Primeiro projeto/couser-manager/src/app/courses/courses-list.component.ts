import { Component } from "@angular/core";
import {Course} from './course'
@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];
    ngOnInit(): void {
    this.courses = [
        {
            id: 1,
            name: 'Angular: Froms',
            imageUrl: '',
            price: 99.99,
            code: 'XPS-8796',
            duration: 120,
            rating: 5.4, 
            releaseDate: 'Janeiro, 2 , 2021'
        }
        {
            id: 2,
            name: 'Angular: HTTP',
            imageUrl: '',
            price: 54.99,
            code: 'XPS-8796',
            duration: 90,
            rating: 6,
            releaseDate: 'Março, 9, 2022'
        }
    ]     
    }
}