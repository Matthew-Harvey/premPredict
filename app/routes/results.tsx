/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAuth0 } from "@auth0/auth0-react";
import { useLoaderData } from "@remix-run/react";
import Load from "~/comps/load";
import Nav from "~/comps/nav";
import { getInfo } from "~/functions/loading";
import { sortHigh } from "~/functions/sorting";

export async function loader() {
  let loading_function_return = getInfo();
  return loading_function_return;
}

export default function Results() {
  const load_data = useLoaderData<typeof loader>();
  //console.log(load_data);

  let results = [];
  for (let match in load_data.matches.matches) {
      if (load_data.matches.matches[match].status.toUpperCase() == "FINISHED") {
        results.push([load_data.matches.matches[match], load_data.matches.matches[match].utcDate]);
      }
  }
  results = results.sort(sortHigh);

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
