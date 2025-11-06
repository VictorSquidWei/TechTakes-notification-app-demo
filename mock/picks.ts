export type Pick = {
  id: string;
  league: 'NBA' | 'NHL' | 'NFL' | 'NCAAB' | 'MLB';
  matchup: string;
  time: string;
  unit: number;
  predictionType: 'S' | 'PP' | 'POTD' | 'LIVE';
  pick: string;
  status?: 'Win' | 'Loss' | 'Push' | 'Pending';
};

export const picks: Pick[] = [
  {
    id: '1',
    league: 'NBA',
    matchup: 'OKC @ POR',
    time: 'Nov 5, 7:10 PM ET',
    unit: 1.25,
    predictionType: 'S',
    pick: 'Thunder +5.5 (-110)',
    status: 'Pending',
  },
  {
    id: '2',
    league: 'NBA',
    matchup: 'GSW @ SAC',
    time: 'Nov 5, 9:10 PM ET',
    unit: 0.75,
    predictionType: 'PP',
    pick: 'Steph Curry O29.5 pts (-115)',
    status: 'Pending',
  },
  {
    id: '3',
    league: 'NHL',
    matchup: 'SJ @ SEA',
    time: 'Nov 5, 10:10 PM ET',
    unit: 0.5,
    predictionType: 'LIVE',
    pick: 'Kraken ML (In-Game -150)',
    status: 'Pending',
  },
  {
    id: '4',
    league: 'NFL',
    matchup: 'KC @ BUF',
    time: 'Nov 6, 8:20 PM ET',
    unit: 1.5,
    predictionType: 'POTD',
    pick: 'Chiefs -2.5 (-108)',
    status: 'Pending',
  },
  {
    id: '5',
    league: 'NCAAB',
    matchup: 'Duke @ UNC',
    time: 'Nov 7, 6:00 PM ET',
    unit: 0.9,
    predictionType: 'S',
    pick: 'Duke ML (-120)',
    status: 'Pending',
  },
  {
    id: '6',
    league: 'MLB',
    matchup: 'NYY @ BOS',
    time: 'Nov 7, 7:05 PM ET',
    unit: 1.1,
    predictionType: 'PP',
    pick: 'Aaron Judge O1.5 total bases (+110)',
    status: 'Pending',
  },
  {
    id: '7',
    league: 'NBA',
    matchup: 'DAL @ MIN',
    time: 'Nov 7, 8:00 PM ET',
    unit: 0.6,
    predictionType: 'LIVE',
    pick: 'Live: Timberwolves -3.5 (-102)',
    status: 'Pending',
  },
];
