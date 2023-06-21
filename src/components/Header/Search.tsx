import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  // Add other properties as needed
}

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [matchingProducts, setMatchingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchMatchingProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const products: Product[] = response.data;
        const matchingProducts: Product[] = products.filter((product) =>
          product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setMatchingProducts(matchingProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch matching products only when inputValue is not empty
    if (inputValue.trim() !== '') {
      fetchMatchingProducts();
    } else {
      setMatchingProducts([]);
    }
  }, [inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="검색"
        className="input w-full max-w-xs"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue.trim() !== '' && matchingProducts.length > 0 && (
        <div
          className="matching-products"
          style={{ width: '100%', overflowY: 'auto', maxHeight: '200px' }}
        >
          {matchingProducts.map((product) => (
            <div
              key={product.id}
              style={{ width: '100%', padding: '8px', borderBottom: '1px solid #ccc' }}
            >
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;