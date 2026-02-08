import pool from "../db/database";
import { Product } from "../models/Product";

class ProductDAO {

  async findAll(): Promise<Product[]> {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows as Product[];
  }

  async findById(id: number): Promise<Product | null> {
    const [rows]: any = await pool.query(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );

    return rows.length ? rows[0] : null;
  }

  async create(product: Product): Promise<void> {
    const { name, description, price, quantity } = product;

    await pool.query(
      "INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)",
      [name, description, price, quantity]
    );
  }

  async update(id: number, product: Product): Promise<void> {
    const { name, description, price, quantity } = product;

    await pool.query(
      "UPDATE products SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?",
      [name, description, price, quantity, id]
    );
  }

  async delete(id: number): Promise<void> {
    await pool.query(
      "DELETE FROM products WHERE id = ?",
      [id]
    );
  }
}

export default new ProductDAO();
