import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {

  async getAll(req: Request, res: Response) {
    const products = await ProductService.getAllProducts();
    res.json(products);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await ProductService.getProductById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  }

  async create(req: Request, res: Response) {
    await ProductService.createProduct(req.body);
    res.status(201).json({ message: "Product created" });
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    await ProductService.updateProduct(id, req.body);
    res.json({ message: "Product updated" });
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await ProductService.deleteProduct(id);
    res.json({ message: "Product deleted" });
  }
}

export default new ProductController();
