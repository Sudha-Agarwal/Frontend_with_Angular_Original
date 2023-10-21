import { TestBed, async, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DataService
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should fetch posts as an Observable`, waitForAsync(inject([HttpTestingController, DataService],
    (httpClient: HttpTestingController, service: DataService) => {
      const postItem = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
      ];

      service.getData()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });
      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
    })));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should make a POST request', waitForAsync(inject([HttpTestingController, DataService],
    (httpClient: HttpTestingController, service: DataService) => {
      
      const newProduct = { id: 18, name: 'Product 18', description: 'Description 18',category: 'laptop' };
    
      // Use the service to make the POST request
    service.addProduct(newProduct).subscribe((response) => {
        expect(response).toEqual(newProduct); // Check if the response matches the expected new product
    });
  
    // Set up an expectation for the POST request
    const req = httpMock.expectOne('http://localhost:3000/products'); // Replace with your API endpoint
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newProduct); // Verify the request data
  
    // Respond to the request with a mock response
   // Respond to the request with the new product
  req.flush(newProduct, { status: 201, statusText: 'Created'});
  })));

  it('should handle errors gracefully', () => {
    const testData = { key: 'value' }; // Replace with your request data
  
    service.getData().subscribe(
      () => {
        fail('The request should have failed');
      },
      (error) => {
        expect(error.status).toEqual(500); // Replace with your expected error status code
      }
    );
  
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush(null, { status: 500, statusText: 'Internal Server Error' });
  });
  
});


