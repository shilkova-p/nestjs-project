import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './products.entity';



@Injectable()
export class ProductsService {
  constructor(

    
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find();
  }





 


  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }
   
}
