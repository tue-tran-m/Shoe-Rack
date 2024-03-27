import Input from "../../component/input";

function Colors(props) {
  return (
    <div className="color-container">
      <h2 className="sidebar-title">Colors</h2>

      <label className="sidebar-label-container">
        <input
          onChange={props.handleChange}
          type="radio"
          value=""
          name="test1"
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={props.handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />

      <Input
        handleChange={props.handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

      <Input
        handleChange={props.handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

      <Input
        handleChange={props.handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={props.handleChange}
          type="radio"
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;
