import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(@Body('title') prodTitle: string): any {
    const respId = this.productService.insertProduct(prodTitle);
    return respId;
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') prodId: string) {
    return this.productService.getProductById(prodId);
  }
}
