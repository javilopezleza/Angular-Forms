

import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EmailValidator implements AsyncValidator {
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        
        const email = control.value;

        const httpsCallObservable = new Observable<ValidationErrors | null>( (subscriber) =>{

            console.log({email});

            if( email === 'javier@google.com'){
                subscriber.next({emialTaken:true});
                subscriber.complete();
                // return;
            }

            subscriber.next(null);
            subscriber.complete();

        }).pipe(
            delay(3000)
        );
        
        return httpsCallObservable;    

    }    






    
}

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
        
    //     const email = control.value;
    //     console.log({email})

    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     );
    // }    
    