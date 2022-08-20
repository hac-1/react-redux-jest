import axios_object from "./axios_base.js";
import axios from "axios"; //FOR GET EXAMPLE
import { useState } from "react";

//GET USING BUTTON CLICK AND FUNCTION ALSO USED MAIN AXIOS HERE
export const AxiosGetExampleThen = () => {
  var [values, updateValues] = useState([]);
  const getValue = () => {
    axios
      // USED axios main here as the axios_object
      // is marked to "https://jsonplaceholder.typicode.com/posts"
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => updateValues(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={getValue}>GET</button>
      {values.map((value_in_values) => {
        return (
          <p key={value_in_values.id}>
            [{value_in_values.name},{value_in_values.id}]
          </p>
        );
      })}
    </div>
  );
};
//----------------------------------------------------------
export const AxiosPostExampleAsync = () => {
  var [values, setValues] = useState({});

  const sendToAPI = async (event) => {
    event.preventDefault();
    try {
      var response = await axios_object.post("posts", values);
      //posts would becoem baseUrl+/+posts
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      alert("CHECK CONSOLE");
    }
  };

  return (
    // IF WE DONT USE onChange then input changes wont be reflected
    // HERE SINCE USING OBJECT WE ARE DOING LIKE THIS USING A FUNCTION
    // ELSE WE CAN DO DIRECTLY setValue Function of UseState
    <div>
      <form onSubmit={sendToAPI}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={(event) =>
              setValues({ ...values, title: event.target.value })
            }
          ></input>
        </label>

        <br></br>

        <label>
          Body:
          <input
            type="text"
            name="body"
            value={values.body}
            onChange={(event) =>
              setValues({ ...values, [event.target.name]: event.target.value })
            }
          ></input>
        </label>

        <br></br>

        <label>
          Id:
          <input
            type="number"
            name="userId"
            value={values.userId}
            onChange={(event) =>
              setValues({ ...values, [event.target.name]: event.target.value })
            }
          ></input>
        </label>
        <br></br>
        <button type="submit">Send Post</button>
      </form>
    </div>
  );
};
