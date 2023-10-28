import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Home Component'`, waitForAsync(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Home Component');
  }));

  const mySpy = jasmine.createSpy('myFunction');

// Using the spy in a test or setup
it('should call a function', () => {
  // Using the spy as a function
  mySpy();
  
  // Verifying the spy's call
  expect(mySpy).toHaveBeenCalled();
});

// Example function that returns a Promise
function doSomethingAsync(input: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (input >= 0) {
      setTimeout(() => resolve(input * 2), 1000);
    } else {
      reject('Input must be a non-negative number');
    }
  });
}

describe('Async function test', () => {
  it('should resolve the promise with the correct value', async () => {
    const result = await doSomethingAsync(5); // Assuming 5 is a valid input

    expect(result).toEqual(10); // Test if the resolved value is as expected
  });

  it('should reject the promise with an error', async () => {
    try {
      await doSomethingAsync(-1); // Assuming -1 is an invalid input
      fail('The promise should have been rejected'); // Fail the test if the promise doesn't reject
    } catch (error) {
      expect(error).toEqual('Input must be a non-negative number'); // Test if the rejection reason is as expected
    }
  });
});


const customMatcherSpy = jasmine.createSpy('toBeDivisibleBy').and.callFake(function(actual: number, expected: number) {
  const pass = actual % expected === 0;
  if (pass) {
    console.log(`Expected ${actual} not to be divisible by ${expected}.`);
  } else {
    console.log(`Expected ${actual} to be divisible by ${expected}.`);
  }
  return {
    pass: pass,
    message: pass ? `Expected ${actual} not to be divisible by ${expected}.` : `Expected ${actual} to be divisible by ${expected}.`
  };
});

it('should check if a number is divisible', () => {
  const result = customMatcherSpy(10, 5); // Using the custom "matcher" spy

  expect(result.pass).toBeTrue(); // Check if the spy result's pass property is true
});



  
});
