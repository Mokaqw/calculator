import "./result.css";

const result = ({ text, result }) => {
  return (
    <div className="Input-container">
      <div className="result-box"type="text" maxLength="11">
        <h1 >{result}</h1>
      </div>

      <div className="number-box">
        <h3 >{text}</h3>
      </div>
    </div>
  );
};
export default result;
