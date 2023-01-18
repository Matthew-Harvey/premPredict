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
  let fantasty_stats = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
  const fantasty_stats_return = await fantasty_stats.json();
  // @ts-ignore
  let api_football = await fetch('https://api.football-data.org/v4/competitions/PL/matches', options);
  const api_football_return = await api_football.json();
  return json({ date: new Date(), api_football: api_football_return, fantasy: fantasty_stats_return});
}

export default function Index() {
  const test = useLoaderData<typeof loader>();
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
    <>
      <p>PREDICTIONS</p>
    </>
  );
}
