import { ShoppingCart, Heart } from 'lucide-react';

interface CoffeeCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  onAddToCart: () => void;
}

const CoffeeCard = ({ name, description, price, image, onAddToCart }: CoffeeCardProps) => {
  return (
    <div className="glass-card rounded-3xl p-5 hover:shadow-lg transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative mb-4">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cream/50 to-transparent" />
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold text-lg text-coffee-dark">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div className="flex gap-2">
          <button 
            onClick={onAddToCart}
            className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center hover:bg-destructive/10 hover:text-destructive transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="coffee-btn text-xs px-4 py-2">
          {price}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
