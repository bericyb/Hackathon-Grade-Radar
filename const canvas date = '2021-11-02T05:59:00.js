const canvasDate = "2021-11-01T05:59:00Z";

const date = Date.parse(canvasDate);
const obj = new Date(date);
const day = obj.getDay();
console.log(day);
