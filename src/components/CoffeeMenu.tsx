import { useState } from 'react';
import { toast } from 'sonner';
import CoffeeCard from './CoffeeCard';
import americanoImg from '@/assets/americano.png';
import cappuccinoImg from '@/assets/cappuccino.png';
import latteImg from '@/assets/latte.png';
import mochaImg from '@/assets/mocha.png';
import flatwhiteImg from '@/assets/flatwhite.png';
import espressoImg from '@/assets/espresso.png';

const categories = ['All', 'Espresso', 'Latte', 'Special'];

const coffeeItems = [
  {
    id: 1,
    name: 'Americano',
    description: '100% Natural Arabica or Robusta, 30 ml cup',
    price: '$2.50',
    image: americanoImg,
    category: 'Espresso',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Coffee 50%, milk 50%, 280 ml',
    price: '$2.50',
    image: cappuccinoImg,
    category: 'Latte',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Silky smooth espresso with steamed milk',
    price: '$3.00',
    image: latteImg,
    category: 'Latte',
  },
  {
    id: 4,
    name: 'Mocha',
    description: 'Rich espresso with chocolate and cream',
    price: '$3.50',
    image: mochaImg,
    category: 'Special',
  },
  {
    id: 5,
    name: 'Flat White',
    description: 'Double shot with velvety microfoam',
    price: '$3.00',
    image: flatwhiteImg,
    category: 'Latte',
  },
  {
    id: 6,
    name: 'Espresso',
    description: 'Pure Italian style, rich crema, 30 ml',
    price: '$2.00',
    image: espressoImg,
    category: 'Espresso',
  },
];

const CoffeeMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = activeCategory === 'All' 
    ? coffeeItems 
    : coffeeItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    toast.success(`${name} добавлен в корзину!`, {
      description: `В корзине: ${cartCount + 1} товаров`,
    });
  };

  return (
    <section id="menu" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            Our Coffee Menu
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover our carefully crafted selection of premium coffee drinks
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'coffee-btn'
                  : 'glass-card hover:bg-accent text-coffee-medium'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Coffee Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <CoffeeCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onAddToCart={() => handleAddToCart(item.name)}
            />
          ))}
        </div>

        {/* Cart Counter (floating) */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 coffee-btn flex items-center gap-2 z-40">
            <span>🛒</span>
            <span>{cartCount} items</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeMenu;
