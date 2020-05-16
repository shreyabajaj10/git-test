import { Injectable } from '@angular/core';
import { Med } from '../shared/med';
import { MEDICINES } from '../shared/medicines';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor() { }

  getMedicines(): Med[] {
    return MEDICINES;
  }

  getMed(id: string): Med {
    return MEDICINES.filter((med) => (med.id === id))[0];
  }

  getFeaturedMed(): Med {
    return MEDICINES.filter((med) => med.featured)[0];
  }

}
