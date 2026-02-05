import { useState } from 'react';
import { toast } from 'sonner';
import { ShoppingBag } from 'lucide-react';
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
    toast.success(`${name} added to cart`, {
      description: `Cart total: ${cartCount + 1} items`,
    });
  };

  return (
    <section id="menu" className="py-24 section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-sm font-medium text-coffee-medium uppercase tracking-widest">
              Our Selection
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="heading-section mb-4">
            Coffee Menu
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Discover our carefully crafted selection of premium coffee drinks,
            made with love and the finest beans.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 p-2 rounded-full glass-card">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-coffee-medium hover:text-coffee-dark hover:bg-accent/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Coffee Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CoffeeCard
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onAddToCart={() => handleAddToCart(item.name)}
              />
            </div>
          ))}
        </div>

        {/* Cart Counter (floating) */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
            <button className="coffee-btn flex items-center gap-3 px-6 py-4 shadow-xl hover-glow">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-semibold">{cartCount} items</span>
              <span className="w-px h-5 bg-primary-foreground/30" />
              <span>View Cart</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeMenu;
