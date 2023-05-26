/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState, createRef } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	/** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
  name: "React Awesome", createdAt: new Date().getMilliseconds()
}).map((list, index) => { return {id: index, ...list} });

export const ListItemsForNavigation = (props) => {
	const [selectedIndex, setSelectedIndex] = useState(itemsList[0].id);
  const activeItemRefs = useRef(itemsList.reduce((acc, item) => {
    acc[item.id] = createRef();
    return acc;
  }, {}));
	const activeItemRef = useRef(null);

	useEffect(() => {
    // Focus the item using this effect
    if (activeItemRef.current) {
      activeItemRef.current.focus();
      activeItemRefs.current[itemsList[0].id].current.focus();
    }
	}, []);

	const handleKeyDown = (event) => {
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
    const focusedIndex = itemsList.findIndex((item) => item.id === selectedIndex);
    let nextIndex = focusedIndex;
    if (event.keyCode === 38 || event.keyCode === 37) { // Up or left arrow
      nextIndex = (focusedIndex - 1 + itemsList.length) % itemsList.length;
    } else if (event.keyCode === 40 || event.keyCode === 39) { // Down or right arrow
      nextIndex = (focusedIndex + 1) % itemsList.length;
    }
    const nextItem = itemsList[nextIndex];
    setSelectedIndex(nextItem.id);
    activeItemRefs.current[nextItem.id].current.focus();
	}

	return (
    <ul ref={activeItemRef} onKeyDown={handleKeyDown} tabIndex={0}>
      {itemsList.map((item) => (
        <li
          key={item.id}
          ref={activeItemRefs.current[item.id]}
          tabIndex={selectedIndex === item.id ? 0 : -1}
        >
          {item.name} # {item.id + 1} created at: {item.createdAt} milliseconds
        </li>
      ))}
    </ul>
  );
}
