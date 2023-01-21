/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAuth0 } from "@auth0/auth0-react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import * as tf from '@tensorflow/tfjs';
import AuthenticationButton from "~/comps/authbutton";
import Profile from "./profile";

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
  let standings = await fetch('https://api.football-data.org/v4/competitions/PL/standings', options);
  const standings_return = await standings.json();
  // @ts-ignore
  let matches = await fetch('https://api.football-data.org/v4/competitions/PL/matches', options);
  const matches_return = await matches.json();
  return json({ date: new Date(), matches: matches_return, fantasy: fantasty_stats_return, standings: standings_return});
}

function sortFunctionHigh(a: any, b:any) {
  if (new Date(a[1]) === new Date(b[1])) {
      return 0;
  }
  else {
      return (new Date(a[1]) > new Date(b[1])) ? -1 : 1;
  }
}

function sortFunctionLow(a: any, b:any) {
  if (new Date(a[1]) === new Date(b[1])) {
      return 0;
  }
  else {
      return (new Date(a[1]) < new Date(b[1])) ? -1 : 1;
  }
}

export default function Index() {
  const load_data = useLoaderData<typeof loader>();
  console.log(load_data);

  let fixtures = [];
  let results = [];
  for (let match in load_data.matches.matches) {
      if (load_data.matches.matches[match].status.toUpperCase() == "FINISHED") {
        results.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
      } else {
        if (new Date() < new Date(load_data.matches.matches[match].utcDate)) {
          fixtures.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
        }
      }
  }
  fixtures = fixtures.sort(sortFunctionLow);
  results = results.sort(sortFunctionHigh);

  let overall_table = [];
  for (let team in load_data.standings.standings[0].table) {
    overall_table.push(load_data.standings.standings[0].table[team]);
  }

  const predict = (data: tf.Tensor<tf.Rank>) => {
    const weights = tf.tensor([2.5, 0.01])
    const prediction = data.dot(weights)
    return prediction
  }
  const infectedPeople = [2, 5, 12, 30]
  const infectedCountries = [1, 1, 4, 5]
  const data = tf.tensor([infectedPeople[1], infectedCountries[1]])
  const prediction = predict(data)

  const { isLoading } = useAuth0();

  if (isLoading) {

    return <div>Loading...</div>;

  } else {
    
    return (
      <>
      
        <div className="navbar sticky top-0 bg-white z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/predict">Predict</a></li>
                <li><a href="/fixtures">Fixtures</a></li>
                <li><a href="/results">Results</a></li>
                <li><a href="/table">Table</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl" href="/">premPredict</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a href="/predict">Predict</a></li>
                <li><a href="/fixtures">Fixtures</a></li>
                <li><a href="/results">Results</a></li>
                <li><a href="/table">Table</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <AuthenticationButton />
          </div>
        </div>
        <div className="hero bg-base-200 my-4">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <img src={load_data.matches.competition.emblem} alt="League Emblem" className="m-auto justify-center w-40" />
              <h1 className="text-5xl font-bold">{load_data.matches.competition.name} Predictions</h1>
              <p className="py-6">Predicted next day infections... infected people: {data.dataSync()[0]}, infected countries {data.dataSync()[1]}, prediction: {prediction.dataSync()[0]}</p>
              <Profile />
            </div>
          </div>
        </div>
        <ul>
          <div className="grid grid-cols-3">
            <div>
              <p className="m-auto justify-center text-2xl font-semibold text-center">Results</p>
              {results.map((result) => (
                <li key={result[0].id} className="grid grid-cols-3 my-4 max-w-xl m-auto">
                  <img src={result[0].homeTeam.crest} alt="Team Emblem" className="m-auto justify-center w-10" />
                  <div>
                    <p className="m-auto justify-center text-center">{result[0].score.fullTime.home} - {result[0].score.fullTime.away}</p>
                    <p className="m-auto justify-center text-center">{new Intl.DateTimeFormat('en-GB').format(new Date(result[1].toString()))}</p>
                  </div>
                  <img src={result[0].awayTeam.crest} alt="Team Emblem" className="m-auto justify-center w-10" />
                </li>
              ))}
            </div>
            <div>
              <p className="m-auto justify-center text-2xl font-semibold text-center">Fixtures</p>
              {fixtures.map((fixture) => (
                <li key={fixture[0].id} className="grid grid-cols-3 my-4 max-w-xl m-auto">
                  <img src={fixture[0].homeTeam.crest} alt="Team Emblem" className="m-auto justify-center w-10" />
                  <div>
                    <p className="m-auto justify-center text-center"> - </p>
                    <p className="m-auto justify-center text-center">{new Intl.DateTimeFormat('en-GB').format(new Date(fixture[1].toString()))}</p>
                  </div>
                  <img src={fixture[0].awayTeam.crest} alt="Team Emblem" className="m-auto justify-center w-10" />
                </li>
              ))}
            </div>
            <div>
              <p className="m-auto justify-center text-2xl font-semibold text-center">Table</p>
              {overall_table.map((pos) => (
                <li key={pos.team.id} className="grid grid-cols-3 my-4 max-w-xl m-auto">
                  <p className="m-auto justify-center">{pos.position}</p>
                  <img src={pos.team.crest} alt="Team Emblem" className="m-auto justify-center w-10" />
                  <p className="m-auto justify-center">{pos.points}</p>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </>
    );
  }
}
