/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState, useMemo } from "react";

const TEAMS = [
	{
		name: "Red",
		players: ["Robin", "Rey", "Roger", "Richard"],
		games: [
			{
				score: 10,
				city: "LA",
			},
			{
				score: 1,
				city: "NJ",
			},
			{
				score: 3,
				city: "NY",
			},
		],
	},
	{
		name: "Blue",
		players: ["Bob", "Ben"],
		games: [
			{
				score: 6,
				city: "CA",
			},
			{
				score: 3,
				city: "LA",
			},
		],
	},
	{
		name: "Yellow",
		players: ["Yesmin", "Yuliana", "Yosemite"],
		games: [
			{
				score: 2,
				city: "NY",
			},
			{
				score: 4,
				city: "LA",
			},
			{
				score: 7,
				city: "AK",
			},
		],
	},
];

const sumScores = (games) => {
  return games.reduce((acc, game) => acc + game.score, 0);
};

const sortTeams = (ascendant) => {
  const sorter = TEAMS.sort((teamA, teamB) => {
    const scoreA = sumScores(teamA.games);
    const scoreB = sumScores(teamB.games);
    if (ascendant) return scoreA < scoreB ? 1 : -1;
    return scoreA > scoreB ? 1 : -1;
  });
  return sorter;
};

export const TeamsList = () => {
	const [teams, setTeams] = useState(TEAMS);

  const squad = useMemo(() => {
    return teams.map((team) => ({
      name: team.name,
      quantity: team.players.length,
      total: sumScores(team.games),
    }));
  }, [teams]);

  const initialTeams = () => {
    setTeams([...TEAMS]);
  };

	// Order teams by score (highest to lowest)
	const orderTeamByScoreHighestToLowest = () => {
		const highest = sortTeams(true);
    setTeams([...highest]);
	};

	// Order teams by score (lowest to highest)
	const orderTeamByScoreLowestToHighest = () => {
		const lowest = sortTeams(false);
    setTeams([...lowest]);
	};

	// Filtering teams that with at least 3 players
	const teamsWithMoreThanThreePlayers = () => {
		const least = TEAMS.filter((team) => team.players.length >= 3);
    setTeams(least);
	};

	return (
		<div>
			<button onClick={initialTeams}>Initial list</button>
			<button onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest</button>
			<button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</button>
			<button onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</button>

			<ul className="teams">
				{squad.map((team, index) => { 
					return (
            <li key={index}>
              Team Name: {team.name} | Player’s quantity: {team.quantity} | Total Score: {team.total}
            </li>
          );
        })}
			</ul>
		</div>
	);
}
