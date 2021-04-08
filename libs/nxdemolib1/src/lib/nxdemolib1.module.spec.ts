import { async, TestBed } from '@angular/core/testing';
import { Nxdemolib1Module } from './nxdemolib1.module';

describe('Nxdemolib1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Nxdemolib1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Nxdemolib1Module).toBeDefined();
  });
});
