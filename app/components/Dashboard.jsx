const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 px-4 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Dashboard</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Total Meals</h3>
          <p className="text-4xl font-bold text-blue-400">120</p>
        </div>
        <div className="bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Total Deposits</h3>
          <p className="text-4xl font-bold text-green-400">$450</p>
        </div>
        <div className="bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Meal Rate</h3>
          <p className="text-4xl font-bold text-purple-400">$3.75</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
