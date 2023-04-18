import PropTypes from "prop-types";

function FunctionComponent({ name, age }) {
  //console.log(props);
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: "홍의채",
  age: "11",
};

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

// const FunctionComponent = () => {}

export default FunctionComponent;
