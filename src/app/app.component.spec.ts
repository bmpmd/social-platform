import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    it("should have a defined title", ()=>{
      let component = new AppComponent();
      expect(component.title).toBeDefined();
    })
});
