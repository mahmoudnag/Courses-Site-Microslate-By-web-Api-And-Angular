import { Pipe, PipeTransform } from '@angular/core';
import { CourseVM } from 'src/app/ViewModels/course-vm';
// import { courseViewModel } from 'src/app/models/course';

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    transform(courses:CourseVM[], searchInput: string): any[]{


       searchInput = searchInput.toLowerCase();
       return courses.filter(
           x =>x.crsTitle.toLowerCase().includes(searchInput)
       )

     }
}
