import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { ProductsService } from './products.service';
  import { ProductEntity } from './products.entity';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
  
  
    @Get()
    findAll(): Promise<ProductEntity[]> {
      return this.productsService.findAll();
    }
    
  
  
  @Post('/create')
  create(   
      @Body() product: ProductEntity): Promise<ProductEntity> {
      return this.productsService.create(product);
    }
  }
  