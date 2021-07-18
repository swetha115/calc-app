import Calculator from "./calculator";
import Result from "./result";

const routing = [
	{
		path: "/calculator",
		component: Calculator
	},
	{
		path: "/result",
		component: Result
	}
]

export default routing;