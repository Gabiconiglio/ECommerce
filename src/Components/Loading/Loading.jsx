import "../Loading/Loading.css"

function Loading(props) {

  const colorLoad=props.color+"Loading"

  return (
    <>
      <span className="loading loading-dots loading-xs" id={colorLoad}></span>
      <span className="loading loading-dots loading-sm" id={colorLoad}></span>
      <span className="loading loading-dots loading-md" id={colorLoad}></span>
      <span className="loading loading-dots loading-lg" id={colorLoad}></span>
    </>
  );
}

export default Loading;
