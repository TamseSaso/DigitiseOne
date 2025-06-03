
const StatsSection = () => {
  const stats = [
    { number: 500, label: 'Active Clients', suffix: '+' },
    { number: 95, label: 'Customer Satisfaction', suffix: '%' },
    { number: 2, label: 'Years of Excellence', suffix: '+' },
    { number: 1000000, label: 'Transactions Processed', suffix: '+' }
  ];

  return (
    <section className="stats-section py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Join the growing number of businesses that trust TechFlow Solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
