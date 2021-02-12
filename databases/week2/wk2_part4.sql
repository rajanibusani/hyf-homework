CREATE SCHEMA `WK2_PART4` ;

CREATE TABLE customer (
  customer_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(55) NOT NULL,
  lastname VARCHAR(55) NULL,
  street VARCHAR(55) NULL,
  city VARCHAR(55) NULL,
  postcode VARCHAR(10) NULL,
  phone VARCHAR(45) NULL,
  PRIMARY KEY (customer_id));


  CREATE TABLE product (
  product_id INT NOT NULL,
  quantity INT(10),
  product_type VARCHAR(45),
  PRIMARY KEY (product_id));

 CREATE TABLE `WK2_PART4`.`order` (
  order_id INT(10) UNSIGNED NOT NULL,
  customer_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (order_id),
 FOREIGN KEY (customer_id)
    REFERENCES customer (customer_id),
 FOREIGN KEY (product_id)
    REFERENCES product (product_id)
    ); 

  SET sql_mode = '';
  CREATE TABLE shipment (
  order_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,
  packingtime TIMESTAMP,
  shippingtime TIMESTAMP,
 PRIMARY KEY (order_id, product_id),  
 FOREIGN KEY (order_id)
    REFERENCES `order` (order_id),
 FOREIGN KEY (product_id)
    REFERENCES product (product_id)
    );

  