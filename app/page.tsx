import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import AddMeal from "./components/AddMeal";
import AddExpense from "./components/AddExpense";
import Deposit from "./components/Deposit";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <Dashboard />
      <AddMeal />
      <AddExpense />
      <Deposit />
      <Footer/>
    </>
  );
}
