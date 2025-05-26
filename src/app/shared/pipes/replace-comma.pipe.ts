import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma',
    standalone: true
})
export class ReplaceCommaPipe implements PipeTransform{
    transform(value: string | null, replacement: string = ''):string {
        if (!value) return '';
        return value.replace(/,/g, replacement)
    }
}