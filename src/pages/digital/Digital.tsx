import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderNav from "../../components/Header/HeaderNav";

interface Product {
  id: number;
  title: string;
  image: string;
  gender: "men" | "women";
  category: string;
  price: number;
  // 추가 필드들을 여기에 정의하세요
}

const Digital: React.FC = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : true;
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(initialDarkMode);

  const handleModeToggle = (): void => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(updatedDarkMode));
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const filteredProducts = data.filter(
          (product: Product) =>
            product.category === "electronics"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const ImgCon = styled.div`
    margin-top: 80px;
    width: 1366px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
  `;

  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ImgBox = styled.div`
    margin-top: 20px;
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

    img {
      max-width: 50%;
      max-height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover img {
      transform: scale(1.2);
      /* Add any other styles for the hovered state */
    }
  `;

  return (
    <>
      <HeaderNav isDarkMode={isDarkMode} onModeToggle={handleModeToggle} />
      <ImgCon>
        <p className="ic-title">디지털</p>
        {products.map((product) => (
          <Flex>
            <Link to={`/digital/${product.id}`}>
              <ImgBox key={product.id}>
                <img src={product.image} alt={product.title} />
              </ImgBox>
            </Link>
            <div className="description">
              <p className="d-title">{product.title}</p>
              <p className="d-price">${Math.round(product.price)}</p>
            </div>
          </Flex>
        ))}
      </ImgCon>
    </>
  );
};

export default Digital;
