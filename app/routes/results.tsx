/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAuth0 } from "@auth0/auth0-react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import Load from "~/comps/load";
import Nav from "~/comps/nav";

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

export default function Results() {
  const load_data = useLoaderData<typeof loader>();
  console.log(load_data);

  let results = [];
  for (let match in load_data.matches.matches) {
      if (load_data.matches.matches[match].status.toUpperCase() == "FINISHED") {
        results.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
      }
  }
  results = results.sort(sortFunctionHigh);

  const { isLoading, isAuthenticated, user } = useAuth0();
  let sendparam = JSON.stringify({"auth":isAuthenticated, "user": user});

  if (isLoading) {
    return (
      <>
        <Load />
      </>
    );
  } else {
    return (
      <>
        <Nav params={sendparam} />
        <ul>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-6xl m-auto">
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
          </div>
        </ul>
      </>
    );
  }
}
