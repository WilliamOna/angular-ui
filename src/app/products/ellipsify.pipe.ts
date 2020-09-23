import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsify',
})
export class EllipsifyPipe implements PipeTransform {
  transform(value: string, characters: string) {
    return value.replace(characters, '...');
  }
}
