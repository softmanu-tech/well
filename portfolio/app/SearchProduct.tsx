import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface Product {
  id: number;
  name: string;
  inStock: boolean;
  imageUrl: string;
  type: string;
  description: string;
  price: number;
}

// Mock function to simulate fetching data from a database
const fetchProducts = async (): Promise<Product[]> => {
  // Replace this with your actual data fetching logic
  return [
    {
      id: 1,
      name: 'Laptop',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Electronics',
      description: 'A high-performance laptop suitable for gaming and work.',
      price: 999.99,
    },
    {
      id: 2,
      name: 'Smartphone',
      inStock: false,
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Electronics',
      description: 'A smartphone with the latest features and high resolution.',
      price: 599.99,
    },
    {
      id: 3,
      name: 'Headphones',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Accessories',
      description: 'Noise-cancelling headphones for an immersive audio experience.',
      price: 199.99,
    },
    {
      id: 4,
      name: 'Keyboard',
      inStock: false,
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Accessories',
      description: 'A mechanical keyboard with customizable backlighting.',
      price: 89.99,
    },
    {
      id: 5,
      name: 'Monitor',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150',
      type: 'Electronics',
      description: 'A 24-inch monitor with full HD resolution and adjustable stand.',
      price: 299.99,
    },
  ];
};

const SearchProduct: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Product | null>(null);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  React.useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  const handleSearch = (): void => {
    const product = products.find(p => p.name.toLowerCase() === searchTerm.toLowerCase());
    if (product) {
      setSearchResult(product);
      setShowSuggestions(false);
    } else {
      setSearchResult(null);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (product: Product, e: MouseEvent<HTMLLIElement>): void => {
    e.preventDefault();
    setSearchTerm(product.name);
    setSearchResult(product);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleBuyNow = (product: Product): void => {
    alert(`Redirecting to purchase ${product.name} for $${product.price.toFixed(2)}`);
    // Implement actual purchase redirection here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md bg-white shadow rounded p-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className="flex-grow px-2 py-1 border border-gray-300 rounded-l"
            style={{ borderColor: '#6A0DAD' }}
          />
          <button
            onClick={handleSearch}
            className="px-3 py-1 bg-purple-600 text-white rounded-r hover:bg-purple-700 ml-2"
            style={{ backgroundColor: '#6A0DAD' }}
          >
            Search
          </button>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow z-10">
              {suggestions.map(product => (
                <li
                  key={product.id}
                  onClick={(e) => handleSuggestionClick(product, e)}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchResult ? (
          <div className="mt-4 text-center">
            <img src={searchResult.imageUrl} alt={searchResult.name} className="w-24 h-24 mx-auto mb-2" />
            <h2 className="text-lg font-semibold" style={{ color: '#6A0DAD' }}>{searchResult.name}</h2>
            <p className="text-sm mb-1" style={{ color: '#6A0DAD' }}><strong>Type:</strong> {searchResult.type}</p>
            <p className="text-sm mb-1" style={{ color: '#6A0DAD' }}><strong>Description:</strong> {searchResult.description}</p>
            <p className="text-sm mb-2" style={{ color: '#6A0DAD' }}><strong>Price:</strong> ${searchResult.price.toFixed(2)}</p>
            <button
              onClick={() => handleBuyNow(searchResult)}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              style={{ backgroundColor: '#6A0DAD' }}
            >
              Buy Now
            </button>
          </div>
        ) : (
          searchTerm && (
            <p className="mt-4 text-center text-sm" style={{ color: '#6A0DAD' }}>
              The product is currently not available.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
