import React from "react";
import AXIOS from "../../services/AXIOS";
import { userState } from "../../states/userState";

function AddEvent() {
  const [event, setEvent] = React.useState({});
  const [data, setData] = React.useState({});
  const [user, setUser] = userState.use();
  function addEvent() {
    console.log(event);
    let j = event;
    j.veteran = user.profile._id;
    j.description = "sd";
    AXIOS.post(`/events`, {
      ...j,
    }).then((res) => {
      console.log(res);
    });
  }
  return (
    <div class="modal" id="addEventModal">
      <div class="modal-box">
        <input
          type="text"
          placeholder="Title"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          value={event.title}
        />
        <input
          type="text"
          placeholder="Description"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) =>
            setEvent({ ...event, description: e.target.description })
          }
          value={event.description}
        />
        <input
          type="text"
          placeholder="Meet Link"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) => setEvent({ ...event, meet_link: e.target.value })}
          value={event.meet_link}
        />
        <input
          type="date"
          placeholder="Event Time"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) => setEvent({ ...event, event_time: e.target.value })}
          value={event.event_time}
        />
        <select
          type="text"
          placeholder="Event Type"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) => setEvent({ ...event, type: e.target.value })}
          value={event.type}
        >
          <option value="">Select Event Type</option>
          <option value="Meeting">Meeting</option>
          <option value="Training">Training</option>
          <option value="Seminar">Seminar</option>
          <option value="Conference">Conference</option>
          <option value="Convention">Convention</option>
          <option value="Conference">Conference</option>
          <option value="Convention">Convention</option>
        </select>
        <input
          type="text"
          placeholder="Star Counts"
          class="input input-bordered w-full my-1 max-w-xs"
          onChange={(e) => setEvent({ ...event, event_stars: e.target.value })}
          value={event.event_stars}
        />
        <div>Create As A </div>
        <div className="my-2 mr-2">
          <label>
            <input
              type="radio"
              value="veteran"
              checked={event.veteran !== undefined}
              onChange={(e) =>
                setEvent({
                  ...data,
                  veteran: e.target.value,
                  organization: undefined,
                })
              }
              className="mr-2"
            />
            Veteran
          </label>
          <label>
            <input
              type="radio"
              value="veteran"
              checked={event.organization !== undefined}
              className="ml-2"
              onChange={(e) =>
                setEvent({
                  ...data,
                  organization: e.target.value,
                  veteran: undefined,
                })
              }
            />
            Organisation
          </label>
        </div>
        <div class="modal-action">
          <a href="#" class="btn">
            Close
          </a>
          <button onClick={addEvent} class="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
