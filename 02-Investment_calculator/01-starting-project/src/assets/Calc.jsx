export default function Calc({...props}){
  const set = new Set([
          props.year, 
          props.interest, 
          props.valueEndOfYear, 
          props.annualInvestment]);

  return (
    <div>
      {Array.from(set).map(element => {
        return (
          <div>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}
// export default function Calc({results}){
//   {Object.values(results).map((value, index) => {
//     console.log(value);
//     return (
//       <div key={index}>
//         <h2>{value}</h2>

//         <hr />
//       </div>
//     );
//   })}
// }

// const Calc = ({ results }) => {
//   const calcs = results.map((res) => {
//     const { 
//       year, 
//       interest, 
//       valueEndOfYear, 
//       annualInvestment } = res;
//     // const { row, col } = square;

//     return <li >Results {results[year]}</li>;
//   });

//   return <ol name="log">{calcs}</ol>;
// };

// export default Calc;


const initialValues = {
  initialInvestment: "",
  expectedReturn: "",
  annualInvestment: "",
  duration: "",
};
const [values, setValues] = useState(initialValues);
const [result,setResult] = useState(values);
// const [inputContent, setInputContent] = useState();
// const intialInvest = '';
function resultClick() {
  // console.log(event.target);
  console.log(result);

  // console.log(inputContent);
}

function handleInputChange(event){
  const { name, value } = event.target;
  setValues({ ...values, [name]: value });
  const calcResult = calculateInvestmentResults(values)
  setResult(calcResult) ;
 
  console.log(values);
 }

// function handleInputChange(event) {
//   const {name, value} = event.target;
//   setValues((values) => {
//     return {
//       ...values,
//       [name]: value,
//     };
//   });
// }