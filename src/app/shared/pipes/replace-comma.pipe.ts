import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma',
    standalone: true
})
export class ReplaceCommaPipe implements PipeTransform{
    transform(value: string): string {
        if (!!value) {
            return value.replace(/,/g, '.');
        }else {
        return ' '; // Return an empty string if value is falsy
        }
    }
}