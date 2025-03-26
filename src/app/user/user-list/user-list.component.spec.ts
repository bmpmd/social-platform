import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component : UserListComponent;
  let fixture : ComponentFixture<UserListComponent>;

  let userService:UserService;
  let userServiceSpy : jasmine.Spy
  beforeEach( async ()=>{

    //configure test bed odule 
    //declare component 
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();

    //fixture wrapper that creates a component 
    //then assign an instance of the component to the component
    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance;


    //inject user service 
    userService = TestBed.inject(UserService)
    //spy on getuser method 
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: "john"},
      {id: 2, name: "jane"}
    ]))

  })

  //expect component to be init
  it("should create", ()=>{
    expect(component).toBeTruthy()
  })


  //detecting ngonint method call
  it("should have called method after init", ()=>{
    //detect change hook 
    fixture.detectChanges()

    //expect method to be called via spy 
    expect(userServiceSpy).toHaveBeenCalled()
  })

  //detecting html input call 
  //if btn clicked, does usermthod get called?
  it("should call getUsers after getting clicked", ()=>{

    //lifecycle change hook 
    fixture.detectChanges()

    //refersh spy cos onint was called once 
    //via calls reset 
    userServiceSpy.calls.reset

    //get btn 
    //fixutre's debug elemnt.query method 
    const btn = fixture.debugElement.query(By.css("button"))
  
    //invoke click
    btn.triggerEventHandler("click", null)

    //finally expect something 
    //expect spy to have been called 
    expect(userServiceSpy).toHaveBeenCalled()
  })



  








});
