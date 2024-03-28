import { Test, TestingModule } from '@nestjs/testing';
import { Carts101Controller } from '../../src/controller/carts101.controller';
import { Carts101Service } from '../../src/services/carts101.service';

describe('Carts101Controller', () => {
  let controller: Carts101Controller;
  let service: Carts101Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Carts101Controller],
      providers: [Carts101Service],
    }).compile();

    controller = module.get<Carts101Controller>(Carts101Controller);
    service = module.get<Carts101Service>(Carts101Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string from the service', () => {
      const mockResponse = 'Mock response from service';
      jest.spyOn(service, 'findAll').mockReturnValue(mockResponse);

      const result = controller.findAll();
      expect(result).toEqual(mockResponse);
    });
  });
});
