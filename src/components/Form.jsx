import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Each field is persisted in localStorage under its own key,
  // so the values survive a page refresh.
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="serviceNumber">Service Number:</label>
        <input
          type="text"
          id="serviceNumber"
          data-testid="serviceNumber"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;