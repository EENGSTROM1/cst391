import ProductDAO from "../dao/ProductDAO";
import { Product } from "../models/Product";

class ProductService {

  async getAllProducts(): Promise<Product[]> {
    return ProductDAO.findAll();
  }

  async getProductById(id: number): Promise<Product | null> {
    return ProductDAO.findById(id);
  }

  async createProduct(product: Product): Promise<void> {
    await ProductDAO.create(product);
  }

  async updateProduct(id: number, product: Product): Promise<void> {
    await ProductDAO.update(id, product);
  }

  async deleteProduct(id: number): Promise<void> {
    await ProductDAO.delete(id);
  }
}

export default new ProductService();
