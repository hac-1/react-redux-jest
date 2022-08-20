import "./styles.css";
import "./styling.css";
import styles from "./styling.module.css";
import Trial from "./components.js";
import Main, { Inline } from "./styled.js";
import {
  PropsExample,
  UseStateExample,
  UseStateExampleWithFunctionCall,
  EventExample,
  ParentChildCommunication,
  ConditionalRenderingWithTernary,
  ConditionalRenderingWithShortCircuit,
  ListRendrer
} from "./components.js";
import { Form } from "./Form";
import {
  GetExampleWithAsyncAwait,
  GetExampleWithThen,
  PostExampleWithAsyncAwait,
  PostExampleWithThen
} from "./APICallsUsingFetch.js";
import {
  AxiosGetExampleThen,
  AxiosPostExampleAsync
} from "./APICallsUsingAxios";

export default function App() {
  // FOR PASSING FUNCTION FROM ANY PARENT COMPONENT (HERE ITS APP)
  // WE SEND THE FUNCTION AS A PROP TO CHILD
  const parentFunction = (arg) => {
    alert(
      "THIS IS A PARENT FUNCTION (FROM APP.JS HERE)\n Argument passed from child is" +
        arg
    );
  };
  return (
    <div className="App">
      <Trial></Trial>
      <PropsExample thisWillBecomeProps="PropsValue">
        Values between component tags will be passed as Props.children
      </PropsExample>
      <UseStateExample></UseStateExample>
      <UseStateExampleWithFunctionCall></UseStateExampleWithFunctionCall>
      <br></br>
      <EventExample></EventExample>
      <br></br>
      <ParentChildCommunication
        functionToBeCalled={parentFunction}
      ></ParentChildCommunication>
      <br></br>
      <p>---------------------</p>
      <ConditionalRenderingWithTernary></ConditionalRenderingWithTernary>
      <p>---------------------</p>
      <ConditionalRenderingWithShortCircuit></ConditionalRenderingWithShortCircuit>
      <p>---------------------</p>
      <ListRendrer></ListRendrer>
      <Main></Main>
      <Inline></Inline>
      <p className="primary">THIS IS FROM STYLESHEET OF NORMAL TYPE</p>
      <p className={styles.neutral}>THIS IS FROM STYLESHEET OF MODULE TYPE</p>
      <p>---------------------</p>
      <h1> FORMS</h1>
      <Form></Form>
      <p>---------------------</p>
      <h1>API CALLS USING FETCH</h1>
      <h2>GET USING THEN</h2>
      <GetExampleWithThen></GetExampleWithThen>
      <h2>GET USING ASYNC AWAIT</h2>
      <GetExampleWithAsyncAwait></GetExampleWithAsyncAwait>
      <h2>POST USING THEN</h2>
      <PostExampleWithThen></PostExampleWithThen>
      <h2>POST USING Async</h2>
      <PostExampleWithAsyncAwait></PostExampleWithAsyncAwait>
      <p>---------------------</p>
      <h1>API CALLS USING AXIOS</h1>
      <h2>AXIOS GET USING THEN AND FUNCTION (NOT useEFFECT)</h2>
      <AxiosGetExampleThen></AxiosGetExampleThen>
      <h2>AXIOS POST USING Async</h2>
      <AxiosPostExampleAsync></AxiosPostExampleAsync>
    </div>
  );
}
