import { Test, TestingModule } from '@nestjs/testing';
import { Carts101Service } from '../../src/services/carts101.service';

describe('Carts101Service', () => {
  let service: Carts101Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Carts101Service],
    }).compile();

    service = module.get<Carts101Service>(Carts101Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from carts101 service');
    });
  });
});
