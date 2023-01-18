/* eslint-disable jsx-a11y/anchor-is-valid */

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
      <div className="navbar bg-base-100 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">premPredict</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
      <div className="hero bg-base-200 my-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src={test.api_football.competition.emblem} alt="League Emblem" className="m-auto justify-center" />
            <h1 className="text-5xl font-bold">{test.api_football.competition.name} Predictions</h1>
            <p className="py-6">Predicted next day infections... infected people: {data.dataSync()[0]}, infected countries {data.dataSync()[1]}, prediction: {prediction.dataSync()[0]}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
