import react from "react";
import NavigationBar from "./navigationbar";

export default function Form(props) {
  return (
    <div>
      <NavigationBar />
      <h2>Form Page</h2>
      <form id="pizza-form">
        <label>
          <b>Name : </b> <input id="name-input" name="name" type="text" />
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
        <label>
          {" "}
          <b>Size : </b>
          <select id="size-dropdown" name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
        <label>
          <b>Cheese</b>
          <input type="checkbox" name="topping_cheese" />
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
        <label>
          <b>Pie</b>
          <input type="checkbox" name="topping_pie" />
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
        <label>
          <b>Vegetable</b>
          <input type="checkbox" name="topping_vegetable" />
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
        <label>
          <b>Chili</b>
          <input type="checkbox" name="topping_chili" />
        </label>
        <p>(validation text)</p>
        {/* ------------------------------------------ */}
      </form>
    </div>
  );
}
