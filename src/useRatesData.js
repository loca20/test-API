import axios from "axios";
import { useState, useEffect } from "react";

const JSON_URL =
	"https://raw.githubusercontent.com/loca20/test-API/main/public/currencyRates.json";
//const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_2HBIAKhdpMCHaQBq2UCjf5dGv3esN6WuAhXyyBIq&currencies=&base_currency=PLN"

export const useRatesData = () => {
	const [ratesData, setRatesData] = useState({ status: "loading", data: null });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(JSON_URL);

				setRatesData({
					status: "success",
					data: response.data,
				});
			} catch {
				setRatesData({
					status: "error",
					data: null,
				});
			}
		};

		fetchData();
	}, []);

	return { ratesData };
};
