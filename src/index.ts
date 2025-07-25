import "./mystyles.css";
import config from "./env-config";

const user: string = "John Doe";

console.log(`Hello ${user}!`);
console.log("Env var", config.API_BASE);