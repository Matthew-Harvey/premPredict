/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAuth0 } from "@auth0/auth0-react";
import { useLoaderData } from "@remix-run/react";
import Load from "~/comps/load";
import Nav from "~/comps/nav";
import { getInfo } from "~/functions/loading";

export async function loader() {
  let loading_function_return = getInfo();
  return loading_function_return;
}

export default function Table() {
  const load_data = useLoaderData<typeof loader>();
  //console.log(load_data);

  let overall_table = [];
  for (let team in load_data.standings.standings[0].table) {
    console.log(load_data.standings.standings[0].table[team]);
    overall_table.push(load_data.standings.standings[0].table[team]);
  }

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
            <div className="max-w-6xl m-auto mt-10">
              <p className="m-auto justify-center text-2xl font-semibold text-center">Table</p>
                <li className="grid grid-cols-6 my-4 m-auto">
                    <p className="m-auto justify-center text-center">Position</p>
                    <p className="m-auto justify-center text-center">Team</p>
                    <p className="m-auto justify-center text-center">Name</p>
                    <p className="m-auto justify-center text-center">Played</p>
                    <p className="m-auto justify-center text-center">Points</p>
                    <p className="m-auto justify-center text-center">Form</p>
                </li>
                {overall_table.map((pos) => (
                  <li key={pos.team.id} className="grid grid-cols-6 my-4 m-auto">
                    <p className="m-auto justify-center text-center">{pos.position}</p>
                    <img src={pos.team.crest} alt="Team Emblem" className="m-auto justify-center w-10 text-center" />
                    <p className="m-auto justify-center text-center">{pos.team.name}</p>
                    <p className="m-auto justify-center text-center">{pos.playedGames}</p>
                    <p className="m-auto justify-center text-center">{pos.points}</p>
                    <div className="flex m-auto">
                      {pos.form.split(",").map((wdl:any) => (
                        (() => {
                          if (wdl.toString() == "W")
                             return <p key={pos.form} className="justify-center text-center p-2 m-1 w-12 bg-green-500 rounded-full">{wdl}</p>;
                          if (wdl.toString() == "D")
                             return <p key={pos.form} className="justify-center text-center p-2 m-1 w-12 bg-slate-500 rounded-full">{wdl}</p>;
                          else
                             return <p key={pos.form} className="justify-center text-center p-2 m-1 w-12 bg-red-500 rounded-full">{wdl}</p>;
                        })()
                      ))}
                    </div>
                  </li>
                ))}
            </div>
        </ul>
      </>
    );
  }
}
