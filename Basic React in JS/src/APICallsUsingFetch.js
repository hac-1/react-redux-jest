import { useEffect, useState } from "react";

//SAMPLE GETS DONE USING useEFFECT Hook
export const GetExampleWithThen = () => {
  var [values, updateValues] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => updateValues(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
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
//---------------------------------------------
export const GetExampleWithAsyncAwait = () => {
  var [values, updateValues] = useState([]);
  var [rerender, updateRerender] = useState(0);

  useEffect(() => {
    console.log("RERENDERED DUE TO BUYTTON BY " + rerender + "TIMES");
    async function DoneThisToAvoidWarning() {
      var response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      var value = await response.json();
      updateValues(value);
    }
    DoneThisToAvoidWarning();
  }, [rerender]);
  return (
    <div>
      {values.map((value_in_values) => {
        return (
          <p key={value_in_values.id}>
            [{value_in_values.name},{value_in_values.id}]
          </p>
        );
      })}
      <button
        onClick={() => {
          updateRerender(Number(rerender) + 1);
        }}
      >
        RERENDER
      </button>
    </div>
  );
};
//---------------------------------------------
//---------------------------------------------
//SAMPLE POSTS DONE USING FUNCTIONS
export const PostExampleWithThen = () => {
  var [values, setValues] = useState({});

  const sendToAPI = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error))
      .finally(alert("CHECK CONSOLE"));
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
//---------------------------------------------
export const PostExampleWithAsyncAwait = () => {
  var [values, setValues] = useState({});

  const sendToAPI = async (event) => {
    event.preventDefault();
    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log(await response.json());
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
