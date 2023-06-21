import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const CardList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const fetchedProducts: Product[] = response.data;
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [hoveredImg, setHoveredImg] = useState<string | null>(null);

  const handleImgBoxHover = (imageUrl: string) => {
    setHoveredImg(imageUrl);
  };

  const resetHoveredImg = () => {
    setHoveredImg(null);
  };

  return (
    <div className="item-container">
      <h2>패션</h2>
      <div className="fashion">
        {products
          .filter(
            (product) =>
              product.category === "men's clothing" ||
              product.category === "women's clothing"
          )
          .slice(0, 4)
          .map((product) => (
            <Card
              key={product.id}
              onMouseEnter={() => handleImgBoxHover(product.image)}
              onMouseLeave={resetHoveredImg}
            >
              <ImgBox className={hoveredImg === product.image ? "hovered" : ""}>
                <img src={product.image} alt={product.title} />
              </ImgBox>
              <div className="description">
                <p className="d-title">{product.title}</p>
                <p className="d-price">${Math.round(product.price)}</p>
              </div>
            </Card>
          ))}
      </div>
      <h2>악세서리</h2>
      <div className="accessory">
        {products
          .filter((product) => product.category === "jewelery")
          .slice(0, 4)
          .map((product) => (
            <Card
              key={product.id}
              onMouseEnter={() => handleImgBoxHover(product.image)}
              onMouseLeave={resetHoveredImg}
            >
              <ImgBox className={hoveredImg === product.image ? "hovered" : ""}>
                <img src={product.image} alt={product.title} />
              </ImgBox>
              <div className="description">
                <p className="d-title">{product.title}</p>
                <p className="d-price">${Math.round(product.price)}</p>
              </div>
            </Card>
          ))}
      </div>
      <h2>디지털</h2>
      <div className="digital">
        {products
          .filter((product) => product.category === "electronics")
          .slice(0, 4)
          .map((product) => (
            <Card
              key={product.id}
              onMouseEnter={() => handleImgBoxHover(product.image)}
              onMouseLeave={resetHoveredImg}
            >
              <ImgBox className={hoveredImg === product.image ? "hovered" : ""}>
                <img src={product.image} alt={product.title} />
              </ImgBox>
              <div className="description">
                <p className="d-title">{product.title}</p>
                <p className="d-price">${Math.round(product.price)}</p>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

const Card = styled.div`
  /* Add your card styles here */
  background-color: inherit;
`;

const ImgBox = styled.div`
width: 316px;
height: 320px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-left: 25px;
border-radius: 16px 16px 0 0;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

&.hovered img {
  transform: scale(1.2);
  /* Add any other styles for the hovered state */
}

img {
  max-width: 50%;
  max-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default CardList;
