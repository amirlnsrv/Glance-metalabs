import { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import searchIcon from "assets/icons/search.svg";
import axios from "axios";
import { BASE_URL } from "constants/baseUrl";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductsForSearch = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/products`);
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsForSearch();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length > 0) {
        const results = allProducts.filter((product) =>
          product?.title?.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(results);
        setIsDropdownOpen(results.length > 0);
      } else {
        setFilteredProducts([]);
        setIsDropdownOpen(false);
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [query, allProducts]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredProducts.length > 0) {
      navigate(`/product/${filteredProducts[0].id}`); // Переход на страницу первого товара
      setIsDropdownOpen(false);
    }
  };

  const handleSearchClick = () => {
    if (filteredProducts.length > 0) {
      navigate(`/product/${filteredProducts[0].id}`);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInpBlock}>
        <img src={searchIcon} alt="search-icon" onClick={handleSearchClick} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(filteredProducts.length > 0)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
        />
      </div>

      {isDropdownOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            border: "1px solid gray",
            borderRadius: "8px",
            marginTop: "4px",
            listStyle: "none",
            padding: "0",
            maxHeight: "200px",
            overflowY: "auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {filteredProducts.slice(0, 5).map((product) => (
            <li
              key={product.id}
              onMouseDown={() => setQuery(product.title)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
