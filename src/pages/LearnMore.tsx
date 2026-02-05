import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Award, Users, Leaf, MapPin, Clock, Phone } from 'lucide-react';
import heroCoffee from '@/assets/hero-coffee.png';
import coffeeBeansImg from '@/assets/coffee-beans.png';
import cappuccinoImg from '@/assets/cappuccino.png';
import latteImg from '@/assets/latte.png';

const stats = [
  { value: '15+', label: 'Лет опыта', icon: Award },
  { value: '50K+', label: 'Довольных клиентов', icon: Users },
  { value: '100%', label: 'Органический кофе', icon: Leaf },
  { value: '20+', label: 'Видов напитков', icon: Coffee },
];

const team = [
  { name: 'Алексей Иванов', role: 'Главный бариста', image: cappuccinoImg },
  { name: 'Мария Петрова', role: 'Кофе-сомелье', image: latteImg },
  { name: 'Дмитрий Сидоров', role: 'Управляющий', image: heroCoffee },
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card py-4 section-padding sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-coffee-dark hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Назад</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Coffee className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg text-coffee-dark">Flavored</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">О нас</span>
                <h1 className="heading-display">
                  История нашей <span className="text-primary">кофейни</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Flavored Coffee — это не просто кофейня, это место, где каждая чашка кофе рассказывает свою историю. 
                  Мы начали свой путь в 2009 году с маленькой кофейной точки и большой мечты — дарить людям настоящий, 
                  качественный кофе.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Сегодня мы гордимся тем, что стали любимым местом для тысяч ценителей кофе. 
                  Наши бариста — настоящие мастера своего дела, которые знают всё о кофейных зёрнах и умеют превращать 
                  обычную чашку кофе в произведение искусства.
                </p>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cream to-accent/30 -z-10" />
                  <img
                    src={heroCoffee}
                    alt="Coffee cup"
                    className="w-72 md:w-96 animate-float drop-shadow-2xl"
                  />
                  <img 
                    src={coffeeBeansImg} 
                    alt="" 
                    className="absolute -bottom-4 -left-8 w-24 opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 section-padding bg-gradient-to-b from-cream/30 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark">{stat.value}</p>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-3xl p-4">
                  <img src={cappuccinoImg} alt="Cappuccino" className="w-full rounded-2xl" />
                </div>
                <div className="glass-card rounded-3xl p-4 mt-8">
                  <img src={latteImg} alt="Latte" className="w-full rounded-2xl" />
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Наша философия</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark leading-tight">
                  Качество в каждой детали
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы тщательно отбираем кофейные зёрна с лучших плантаций мира. Наш кофе — это 100% арабика 
                  высшего сорта, обжаренная по авторским рецептам наших мастеров.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Прямые поставки</p>
                      <p className="text-sm text-muted-foreground">Работаем напрямую с фермерами из Эфиопии, Колумбии и Бразилии</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Свежая обжарка</p>
                      <p className="text-sm text-muted-foreground">Обжариваем зёрна каждую неделю для максимального аромата</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Экологичность</p>
                      <p className="text-sm text-muted-foreground">Используем биоразлагаемую упаковку и перерабатываемые стаканы</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 section-padding bg-gradient-to-b from-transparent via-cream/30 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Наша команда</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mt-4">
                Мастера своего дела
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Наши бариста — это профессионалы с многолетним опытом и настоящей страстью к кофе
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-cream to-accent/40 p-1">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-coffee-dark">{member.name}</h3>
                  <p className="text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark">
                  Приходите к нам
                </h2>
                <p className="text-muted-foreground mt-4">
                  Мы всегда рады видеть вас в нашей кофейне
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-coffee-dark">Адрес</p>
                    <p className="text-muted-foreground mt-1">ул. Кофейная, 15<br />Москва, 123456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-coffee-dark">Время работы</p>
                    <p className="text-muted-foreground mt-1">Пн-Пт: 7:00 - 22:00<br />Сб-Вс: 8:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-coffee-dark">Контакты</p>
                    <p className="text-muted-foreground mt-1">+7 (999) 123-45-67<br />info@flavored.coffee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-padding">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-coffee-dark mb-6">
              Готовы попробовать лучший кофе в городе?
            </h2>
            <Link to="/" className="coffee-btn inline-block text-base px-8 py-4">
              Посмотреть меню
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Flavored Coffee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
