import { lineSpinner } from "ldrs";
import "ldrs/ring";
import "../Loading/Loading.css";

function Loading(props) {
  const colorLoad = props.color + "Loading";
  lineSpinner.register();

  return (
    <>
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
    </>
  );
}

export default Loading;
