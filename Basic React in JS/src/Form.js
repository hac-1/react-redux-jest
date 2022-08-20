import { useState } from "react";

export const Form = () => {
  var [values, setValues] = useState({
    name: "",
    password: "",
    phno: ""
  });

  var [not_object, setNotObject] = useState(0);

  function setName(event) {
    setValues({ ...values, name: event.target.value });
  }

  const defaultOnChangeFunction = (event) => {
    var name_of_input = event.target.name;
    var value_of_input = event.target.value;
    //NOTE THE SQUARE BRACKET HERE TO REFERENCE KEY
    setValues({ ...values, [name_of_input]: value_of_input });
  };

  const display = (event) => {
    event.preventDefault(); //TO PREVENT PAGE REFRESH ON SUBMIT
    alert(
      "the values are \nName:" +
        values.name +
        "\nPWD:" +
        values.password +
        "\nPhno:" +
        values.phno +
        "\rname:" +
        values.rname +
        "\notobject:" +
        not_object
    );
  };

  return (
    // IF WE DONT USE onChange then input changes wont be reflected
    // HERE SINCE USING OBJECT WE ARE DOING LIKE THIS USING A FUNCTION
    // ELSE WE CAN DO DIRECTLY setValue Function of UseState
    <div>
      <form onSubmit={display}>
        <label>
          USERNAME:
          <input
            type="text"
            name="uname"
            value={values.name}
            onChange={(event) => setName(event)}
          ></input>
        </label>

        <br></br>

        <label>
          PASSWORD:
          <input
            type="password"
            name="pwd"
            value={values.password}
            onChange={(event) =>
              setValues({ ...values, password: event.target.value })
            }
          ></input>
        </label>

        <br></br>

        <label>
          PHONE NUMBER:
          <input
            type="text"
            name="phno"
            value={values.phno}
            onChange={defaultOnChangeFunction}
          ></input>
        </label>

        <br></br>

        {/* by default random name is not there in 
        object but we still use values.rname */}
        <label>
          RANDOM NAME:
          <input
            type="text"
            name="rname"
            value={values.rname}
            onChange={defaultOnChangeFunction}
          ></input>
        </label>

        <br></br>

        {/* A SAMPLE EXAMPLE OF NORMAL OBJECT */}
        <label>
          NOT OBJECT
          <input
            type="number"
            name="not_object"
            value={not_object}
            onChange={(event) => setNotObject(event.target.value)}
          ></input>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
