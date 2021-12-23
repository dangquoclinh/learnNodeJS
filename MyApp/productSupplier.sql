CREATE DATABASE SupplierProductDatabase;
USE SupplierProductDatabase;
--Nha cung cap: Supplier
--VARCHAR = variable characters
CREATE TABLE Supplier(
	supplierId INT PRIMARY KEY AUTO_INCREMENT,
	supplierName VARCHAR(100),
	address VARCHAR(200)
);
--transations(tx), rollback
INSERT INTO Supplier(supplierName, address) VALUES
('Dell', 'Dell ben My'),
('Apple', 'Cung cap iphone'),
('Xiaomi', 'cung cap ban phim');
--insert bundles
--migrations 
CREATE TABLE Product(
	productId INT PRIMARY KEY AUTO_INCREMENT,
	productName VARCHAR(100),
	color VARCHAR(20),
	tl VARCHAR(20),
	address VARCHAR(200)
);
INSERT INTO Product(productName, color, tl, address) VALUES
('iphone 13','red', 'xxxx', '123 Thai Ha'),
('ban phim co','green', 'xxxx', '100 mai huong'),
('pen','yellow', 'xxxx', '12 cho Hom'),
('may tinh laptop','red', 'xxxx', '55 HJoang Cau'),

--Accociation Table 
CREATE TABLE ProductSupplier(
	supplierId INT,--forein key
	productId INT,--forein key
	count INT, 
	createdDate DATETIME,
	price FLOAT
);
INSERT INTO ProductSupplier(productId, supplierId, count, createdDate, price) VALUES
(1, 2, 10, '2020/12/25', 121.3),
(2, 3, 11, '2021/06/23', 122.3),
(3, 3, 10, '2019/08/13', 2223.3),
(4, 1, 22, '2017/09/16', 5748.3);

SELECT * FROM Supplier WHERE Supplier.supplierId=2;


CREATE VIEW view_Supplier_SupplierProduct AS
SELECT 
    Supplier.supplierId, 
    Supplier.supplierName, 
    Supplier.address, 
	ProductSupplier.productId,
	ProductSupplier.price,
	ProductSupplier.count,
	ProductSupplier.createdDate	
FROM Supplier
INNER JOIN ProductSupplier
ON Supplier.supplierId = ProductSupplier.supplierId;

CREATE VIEW view_Supplier_SupplierProduct_Product AS
SELECT 
   view_Supplier_SupplierProduct.supplierId,
   view_Supplier_SupplierProduct.supplierName,
   Product.productName,
   view_Supplier_SupplierProduct.address as supplierAddress,
   view_Supplier_SupplierProduct.productId,     
   Product.color,
   Product.tl,
   Product.address as productAddress
FROM view_Supplier_SupplierProduct
INNER JOIN Product
ON view_Supplier_SupplierProduct.productId = Product.productId;










