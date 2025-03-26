import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(()=>{
    //configure testbed then gt service from testbed
    TestBed.configureTestingModule({})

    // get instnace of user service via testbed
    userService = TestBed.inject(UserService)

  })

  //unit  test for service created
  it("should be created", ()=>{
expect(userService).toBeTruthy()
  })
  
  //service injected, call method
  //expect data length to be greater than 0 
  it("should return Users", ()=>{
    userService.getUsers().subscribe((users)=>{
      expect(users.length).toBeGreaterThan(0)
    })
  }) 

});
