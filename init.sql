CREATE TABLE catalog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00
);

INSERT INTO catalog (name, description, price) VALUES
('iPhone 13', 'Celular Apple 128 GB | Midnight | iOS', 799.00),
('Samsung Galaxy S23', 'Smartphone Android 256 GB | 8 GB RAM', 699.00),
('Xiaomi Redmi Note 12', 'Smartphone Android 128 GB | 6 GB RAM', 299.00),
('Dell XPS 13', 'Laptop premium Intel Core 5/7 | 16 GB RAM', 1199.00),
('MacBook Air M2', 'Laptop Apple chip M2 | 8 GB RAM | 256 GB SSD', 1099.00),
('HP Spectre x360', 'Laptop 2 en 1 Intel i5 | 8 GB RAM | 512 GB SSD', 999.00),
('Lenovo ThinkPad T14', 'Laptop empresarial AMD Ryzen 7 | 16 GB RAM | 1 TB SSD', 1299.00),
('iPad Pro 12.9', 'Tablet Apple M2 | 256 GB | pantalla Liquid Retina XDR', 1099.00),
('Samsung Galaxy Tab S9', 'Tablet Android AMOLED 11" | 128 GB', 899.00),
('Xiaomi Pad 6', 'Tablet Android 11" | 8 GB RAM | 256 GB', 399.00);