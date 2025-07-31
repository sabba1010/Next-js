"use client";
import { useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState({ amount: "", date: "" });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense added: $${expense.amount} on ${expense.date}`);
  };

  return (
    <section id="addexpense" className="py-16 px-4 bg-black text-white text-center max-w-xl mx-auto rounded shadow my-12">
      <h2 className="text-3xl font-bold mb-8">Add Expense</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          name="amount"
          min="0"
          value={expense.amount}
          onChange={handleChange}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Amount"
          required
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          required
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 py-2 rounded text-white font-semibold">
          Submit Expense
        </button>
      </form>
    </section>
  );
};

export default AddExpense;
