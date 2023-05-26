/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useEffect } from "react";
import { useToggle } from "../hooks/useToggle";
import { useCounter } from "../hooks/useCounter";

export const PlayerStatus = () => {
	const [status, setStatus] = useToggle(true);
	const [counter, setCounter] = useCounter();

	// Implement effect hook below.
	// Update the counter when status changes.
	useEffect(() => {
		setCounter();
	}, [setCounter, status]);

	return (
    <div>
      <h1>{status ? "online" : "away"}</h1>
      <h3>{counter}</h3>
      <button onClick={setStatus}>Toggle status</button>
    </div>
  );
}
