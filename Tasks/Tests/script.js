import { DUMMY_API } from "./dummyAPI.js";
var button = document.querySelector("button");
var root = document.getElementById("root");
button.addEventListener("click", calcDatas);
var datas = DUMMY_API;

const getIndex = (data) => datas.changes.findIndex((change) => change == data);
const getNextData = (data) => datas.changes[getIndex(data) + 1];
const getPercentData = (data) => (getNextData(data) - data) / getNextData(data);

function calcDatas() {
  root.innerText = "It's OKAY!";
  var arr = datas.changes.map((data) => ({
    index: getIndex(data),
    initVal: data,
    spread: (getNextData(data) - data),
    finalVal: getNextData(data),
    percentSpread: getPercentData(data),
  }));
  console.log("Its ok ", arr, datas.changes);
  return arr;
}
// (data) => datas.changes.findIndex((change) => change == data);
