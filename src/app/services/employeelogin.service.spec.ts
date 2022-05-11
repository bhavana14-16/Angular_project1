import { TestBed } from '@angular/core/testing';

import { EmployeeloginService } from './employeelogin.service';

describe('EmployeeloginService', () => {
  let service: EmployeeloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
