import jsCookie from "js-cookie";
import { newRidgeState } from "react-ridge-state";

export const userState = newRidgeState(
  { profile: true, token: false },
  {
    onSet: (newState) => {
      try {
        jsCookie.set("user", JSON.stringify(newState));
      } catch (e) {}
    },
  }
);

// setInitialState fetches data from localStorage
function setInitialState() {
  try {
    const item = jsCookie.get("user");
    if (item) {
      const initialState = JSON.parse(item);
      userState.set(initialState);
    }
  } catch (e) {}
}
