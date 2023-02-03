import { createClient } from '@supabase/supabase-js';

export async function getInfo() {
    // const countries = await supabase.from('api_responses').select();
    // @ts-ignore
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL?.toString(), process.env.REACT_APP_SUPABASE_ANON_KEY?.toString());
    const { data } = await supabase.from('api_responses').select().eq('created_at', new Date().toDateString());
    let matches_return = JSON.parse("{}");
    let standings_return = JSON.parse("{}");
    let fantasty_stats_return = JSON.parse("{}");
    let already_exists = false;
    try {
      // @ts-ignore
      already_exists = data[0].created_at == new Date().toDateString();
    } catch {
      already_exists = false;
    }
    if (already_exists == false) {
      const api_key = process.env.PUBLIC_FOOTBALL_API_KEY?.toString();
      const options = {
        method: 'GET',
        headers: {
          'X-Auth-Token': api_key,
        }
      };
      let fantasty_stats = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
      fantasty_stats_return = await fantasty_stats.json();
      // @ts-ignore
      let standings = await fetch('https://api.football-data.org/v4/competitions/PL/standings', options);
      standings_return = await standings.json();
      // @ts-ignore
      let matches = await fetch('https://api.football-data.org/v4/competitions/PL/matches', options);
      matches_return = await matches.json();
      await supabase.from('api_responses').insert({ id: new Date().getTime(), created_at: new Date().toDateString(), fantasy_response: fantasty_stats_return, footballmatch_response: matches_return, footballstanding_response: standings_return})
    } else {
      // @ts-ignore
      standings_return = data[0].footballstanding_response;
      // @ts-ignore
      matches_return = data[0].footballmatch_response;
      // @ts-ignore
      fantasty_stats_return = data[0].fantasy_response;
    }
    return({ matches: matches_return, fantasy: fantasty_stats_return, standings: standings_return});
  }