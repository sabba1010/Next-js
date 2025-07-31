"use client";
import { useState } from "react";

const Deposit = () => {
  const [deposit, setDeposit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Deposit added: $${deposit}`);
    setDeposit("");
  };

  return (
    <section id="deposit" className="py-16 px-4 bg-black text-white text-center max-w-xl mx-auto rounded shadow my-12">
      <h2 className="text-3xl font-bold mb-8">Add Deposit</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          min="0"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Deposit Amount"
          required
        />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 py-2 rounded text-white font-semibold">
          Submit Deposit
        </button>
      </form>
    </section>
  );
};

export default Deposit;
