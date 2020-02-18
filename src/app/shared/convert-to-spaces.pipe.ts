import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSPacesPipe implements PipeTransform {
    // transform is method from PipeTransform which is incuded from
    // angular framework

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}