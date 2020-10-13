import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl:'/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8754',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl:'/assets/images/http.png',
                price: 95.36,
                code: 'SER-3456',
                duration: 80,
                rating: 4,
                releaseDate: 'January, 12, 2020'
            }
        ]
    }



}