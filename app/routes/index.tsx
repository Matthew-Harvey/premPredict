
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import * as tf from '@tensorflow/tfjs';

export async function loader() {
  const api_key = process.env.PUBLIC_FOOTBALL_API_KEY?.toString();
  const options = {
    method: 'GET',
    headers: {
      'X-Auth-Token': api_key,
    }
  };
  // @ts-ignore
  const response = await fetch('https://api.football-data.org/v4/competitions/PL/scorers', options);
  const return_response = await response.json();
  return json(return_response);
}

export default function Index() {
  const test = useLoaderData();
  console.log(test);

  const predict = (data: tf.Tensor<tf.Rank>) => {
    const weights = tf.tensor([2.5, 0.01])
    const prediction = data.dot(weights)
    return prediction
  }
  const infectedPeople = [2, 5, 12, 30]
  const infectedCountries = [1, 1, 4, 5]
  const data = tf.tensor([infectedPeople[1], infectedCountries[1]])
  const prediction = predict(data)
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="font-bold">Welcome to Remix</h1>
      <p>
        Predicted next day infections... infected people: {data.dataSync()[0]}, infected countries {data.dataSync()[1]}, prediction: {prediction.dataSync()[0]}
      </p>
      <p>{test.competition.name}</p>
    </div>
  );
}
