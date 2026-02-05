const ReserveSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Let's Talk</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-coffee-dark">
              Want to Reserve a Table?
            </h2>
          </div>
          <button 
            onClick={scrollToContact}
            className="coffee-btn text-base px-8 py-4 whitespace-nowrap"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
