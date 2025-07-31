"use client";
import { useState } from "react";

const AddMeal = () => {
  const [mealData, setMealData] = useState({ breakfast: 0, lunch: 0, dinner: 0 });

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Meal added: Breakfast-${mealData.breakfast}, Lunch-${mealData.lunch}, Dinner-${mealData.dinner}`);
  };

  return (
    <section id="addmeal" className="py-16 px-4 bg-black text-white text-center max-w-xl mx-auto rounded shadow my-12">
      <h2 className="text-3xl font-bold mb-8">Add Meal</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          name="breakfast"
          min="0"
          value={mealData.breakfast}
          onChange={handleChange}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Breakfast"
        />
        <input
          type="number"
          name="lunch"
          min="0"
          value={mealData.lunch}
          onChange={handleChange}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Lunch"
        />
        <input
          type="number"
          name="dinner"
          min="0"
          value={mealData.dinner}
          onChange={handleChange}
          className="p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Dinner"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold">
          Submit Meal
        </button>
      </form>
    </section>
  );
};

export default AddMeal;
