import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Categories.css'; // Import your CSS file for custom styling
import Title from '../../components/title/Title';
import useAxiosAllProductsEkshop from '../../customHooks/useAxiosAllProductsEkshop';
import { all_product } from '../../request';
import { useEffect } from "react";

const categories = [
  { id: 1, name: 'Electronics', imageUrl: "https://i.ibb.co/KwB0t8H/img12.jpg" },
  { id: 2, name: 'Clothing', imageUrl: "https://i.ibb.co/s6VZ80M/img11.jpg" },
  { id: 3, name: 'Home Decor', imageUrl: "https://i.ibb.co/X2K1mST/img10.jpg" },
  { id: 4, name: 'Home Decor', imageUrl: "https://i.ibb.co/Wg4Xf9H/img7.jpg" },
  // Add more categories as needed
];

const Categories = () => {


  const product = async () => {
    // alert(1)
    const allProducts = await all_product("product/list?store_id=63fa3f88b6638aa9975cb087&panel=store&limit=10&offset=1")
    console.log("AllProducts -----------", allProducts);

  }




  useEffect(() => {
    product()
  }, []);

  return (
    <>
      <Title title={"Shop by Category"} />
      {/* <Container>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} xs={12} md={4} lg={3} className="mb-4">
              <Card className="category-card">
                <div className="category-image" style={{ backgroundImage: `url(${category.imageUrl})` }} >
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>

  );
};

export default Categories;