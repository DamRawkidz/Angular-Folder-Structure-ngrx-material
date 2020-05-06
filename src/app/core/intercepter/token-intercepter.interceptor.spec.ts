import { TestBed } from '@angular/core/testing';

import { TokenIntercepterInterceptor } from './token-intercepter.interceptor';

describe('TokenIntercepterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenIntercepterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenIntercepterInterceptor = TestBed.inject(TokenIntercepterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
