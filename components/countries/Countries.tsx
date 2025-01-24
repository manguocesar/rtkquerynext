"use client";
import { useState } from "react";
import { useGetCountriesQuery } from "../../lib/features/countries/CountriesApiSlic";

import styles from "./Countries.module.css";
import Link from "next/link";

const options = [2, 5, 10, 20, 30];

interface Country {
  name: {
    common: string;
  };
  flags: string;
  id: string;
}

export const Countries = () => {
  const [numberOfCountries, setNumberOfCountries] = useState(10);
 
  // Any component that interacts with the Redux store 
  // needs to be a client component
  const { data, isError, isLoading, isSuccess } =
    useGetCountriesQuery(numberOfCountries);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  let countries = data?.slice(0, numberOfCountries)


  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Select the Quantity of Quotes to Fetch:</h3>
        <select
          className={styles.select}
          value={numberOfCountries}
          onChange={(e) => {
            setNumberOfCountries(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>

          {countries && countries.map(({ name }: Country) => (
            <div key={name.common}>
              <li>
                <Link href={`/countries/${name.common}`}>
                  {name.common}
                </Link>
              </li>
            </div>
          ))}


        </div>
      </div>
    );
  }

  return null;
};
