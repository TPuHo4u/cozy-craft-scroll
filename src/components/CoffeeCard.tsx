import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface CoffeeCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  onAddToCart: () => void;
}

const CoffeeCard = ({ name, description, price, image, onAddToCart }: CoffeeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart();
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div className="group relative">
      {/* Card */}
      <div className="glass-card rounded-3xl p-5 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative mb-5 overflow-hidden rounded-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Like button - positioned on image */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked
                ? 'bg-red-500 text-white scale-110'
                : 'bg-white/80 backdrop-blur-sm text-coffee-medium hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-xl text-coffee-dark">{name}</h3>
            <span className="text-lg font-semibold text-caramel whitespace-nowrap">{price}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
        </div>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-border/40">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-secondary hover:bg-primary hover:text-primary-foreground text-coffee-medium'
            }`}
          >
            <ShoppingCart className={`w-4 h-4 transition-transform ${isAdding ? 'scale-125' : ''}`} />
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
