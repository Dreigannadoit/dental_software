import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo
} from "react";
import ReactDOM from "react-dom";
import "../../css/scheduler.css"; // Add responsive styles here
import { Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import "@schedule-x/theme-default/dist/index.css";
import { DateCalendar, DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";
import useAnimation from "../../hooks/useFormAnimate";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Arrow_left, Arrow_right } from "../../assets/icons";
import { Textarea } from "@mui/joy";


const Calendar = () => {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEditEventForm, setShowEditEventForm] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Sample Event",
      start: "2025-01-01T10:00:00",
      end: "2025-01-01T12:00:00",
      allDay: false,
      description: 'Lecture',
      backgroundColor: "#FE9C8F",
      borderColor: "#FE9C8F"
    },
    {
      id: "2",
      title: "All-Day Event",
      start: "2025-01-20",
      end: "",
      allDay: true,
      backgroundColor: "#FE9C8F",
      borderColor: "#FE9C8F"
    },
  ]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDate, setCurrentDate] = useState(dayjs());
  const calendarRef = useRef(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });


  // Use useCallback to memoize event handlers
  const handleEventMouseEnter = useCallback((info) => {
    const { event, jsEvent } = info;

    setHoveredEvent({
      title: event.title,
      description: event.extendedProps.description,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
      borderColor: event.borderColor,
    });

    // Set tooltip position based on the mouse event
    setTooltipPosition({
      x: jsEvent.pageX,
      y: jsEvent.pageY,
    });
  }, []);


  const handleEventMouseLeave = useCallback(() => {
    setHoveredEvent(null);
  }, []);


  const openAddEventForm = useCallback((date) => {
    setSelectedDate(date);
    setShowAddEventForm(true);
  }, []);

  const closeAddEventForm = useCallback(() => {
    setShowAddEventForm(false);
    setSelectedDate(null);
  }, []);


  const handleAddEvent = useCallback((newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  }, []);

  const handleEventClick = useCallback((clickInfo) => {
    const event = events.find((e) => e.id === clickInfo.event.id);
    if (event) {
      setEventToEdit(event);
      setShowEditEventForm(true);
    }
  }, [events]);


  const handleEditEvent = useCallback((updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setShowEditEventForm(false);
  }, []);


  const updateCurrentTitleAndDate = useCallback(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (calendarApi) {
        setCurrentTitle(calendarApi.view.title);
        setCurrentDate(dayjs(calendarApi.getDate()));
      }
    }
  }, []);


  const handleNavigate = useCallback((action) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      switch (action) {
        case "prev":
          calendarApi.prev();
          break;
        case "next":
          calendarApi.next();
          break;
        case "today":
          calendarApi.today();
          break;
        case "month":
          calendarApi.changeView("dayGridMonth");
          break;
        case "week":
          calendarApi.changeView("timeGridWeek");
          break;
        default:
          break;
      }
      updateCurrentTitleAndDate();
    }
  }, [updateCurrentTitleAndDate]);


  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (calendarRef.current) {
        calendarRef.current.getApi().updateSize();
      }
    });

    const calendarParent = document.querySelector(".scheduler");
    if (calendarParent) {
      resizeObserver.observe(calendarParent);
    }

    return () => resizeObserver.disconnect();
  }, []);


  const handleDateChange = useCallback((newDate) => {
    setCurrentDate(newDate);
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.gotoDate(newDate.format("YYYY-MM-DD"));
      updateCurrentTitleAndDate();
    }
  }, [updateCurrentTitleAndDate]);


  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCurrentTitle(calendarApi.view.title);
    }
  }, []);

  const handleDateClick = useCallback((info) => {
    openAddEventForm(info.dateStr);
  }, [openAddEventForm]);

  const handleEventDrop = useCallback((info) => {
    const { event } = info;
    setEvents((prevEvents) =>
      prevEvents.map((ev) =>
        ev.id === event.id
          ? {
            ...ev,
            start: event.start.toISOString(),
            end: event.end ? event.end.toISOString() : null,
          }
          : ev
      )
    );
  }, []);

  const handleEventResize = useCallback((info) => {
    const { event } = info;
    setEvents((prevEvents) =>
      prevEvents.map((ev) =>
        ev.id === event.id
          ? {
            ...ev,
            start: event.start.toISOString(),
            end: event.end ? event.end.toISOString() : null,
          }
          : ev
      )
    );
  }, []);


  const tooltipStyle = useMemo(() => ({
    top: tooltipPosition.y - 100,
    left: tooltipPosition.x + 10,
    position: "absolute",
    zIndex: 1000,
    maxWidth: '200px'
  }), [tooltipPosition]);

  return (
    <>
      {showAddEventForm && (
        <AddEventForm
          selectedDate={selectedDate}
          onAddEvent={handleAddEvent}
          onClose={closeAddEventForm}
        />
      )}
      {showEditEventForm && (
        <AddEventForm
          eventToEdit={eventToEdit}
          onEditEvent={handleEditEvent}
          onClose={() => setShowEditEventForm(false)}
        />
      )}
      {hoveredEvent && (
        <div
          className="tooltip"
          style={{
            ...tooltipStyle,
            border: `${hoveredEvent.borderColor} solid 3px`,
          }}
        >
          <strong>{hoveredEvent.title}</strong>
          <p>{hoveredEvent.description}</p>
          <p>{hoveredEvent.allDay ? "Type: All Day" : ""}</p>
          <small>
            {hoveredEvent.start
              ? hoveredEvent.allDay
                ? hoveredEvent.start.toLocaleDateString()
                : hoveredEvent.start.toLocaleString()
              : ""}
            {" - "}
            {hoveredEvent.end
              ? hoveredEvent.allDay
                ? hoveredEvent.end.toLocaleDateString()
                : hoveredEvent.end.toLocaleString()
              : ""}
          </small>
        </div>
      )}

      <div className="scheduler_wrapper" style={{ width: "100%", overflow: "hidden" }}>
        <div className="scheduler">
          <div className="calendar_controls_wrapper">
            <div className="calendar_controls f-center">
              <div className="f-center">
                <button className="add_new" onClick={() => openAddEventForm()}>Add Event</button>
                <h1>{currentTitle}</h1>
                <button className="prev f-center shadow" onClick={() => handleNavigate("prev")}>
                  <img src={Arrow_left} alt="" />
                </button>
                <button className="next f-center shadow" onClick={() => handleNavigate("next")}>
                  <img src={Arrow_right} alt="" />
                </button>
                <button className="today f-center shadow" onClick={() => handleNavigate("today")}>Today</button>
              </div>
              <div className="f-center">
                <button className="month f-center shadow" onClick={() => handleNavigate("month")}>Month View</button>
                <button className="week f-center shadow" onClick={() => handleNavigate("week")}>Week View</button>
              </div>
            </div>
          </div>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            events={events}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
            initialView="dayGridMonth"
            headerToolbar={false}
            footerToolbar={false}
            height="auto"
            contentHeight="auto"
            datesSet={updateCurrentTitleAndDate}
            editable={true}
            eventMouseEnter={handleEventMouseEnter}
            eventMouseLeave={handleEventMouseLeave}
            eventDrop={handleEventDrop}
            eventResize={handleEventResize}

          />

        </div>

        <div className="side_info">
          <div className="mini_calendar f-center shadow">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={currentDate}
                onChange={handleDateChange}
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="events_planed shadow">
            <h2>Upcoming Activities</h2>
            <br />
            <ul style={{ maxHeight: "300px", overflowY: "auto"}}>
              {events
                .filter(event => dayjs(event.start).isAfter(dayjs()))
                .sort((a, b) => dayjs(a.start).diff(dayjs(b.start)))
                .map(event => (
                  <li key={event.id} style={{ marginBottom: "10px", padding: "10px", background: event.backgroundColor, borderRadius: "5px", color: "#fff" }}>
                    <strong>{event.title}</strong>
                    <p>{event.allDay ? `All Day Event - ${dayjs(event.start).format("MMM D, YYYY")}` : `${dayjs(event.start).format("MMM D, YYYY h:mm A")} - ${dayjs(event.end).format("MMM D, YYYY h:mm A")}`}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

let colorsets = [
  { value: "#d728a3" },
  { value: "#4dd728" },
  { value: "#e3a624" },
  { value: "#e34724" },
  { value: "#24e3cf" },
  { value: "#2455e3" },

]

const AddEventForm = React.memo(({ selectedDate, onAddEvent, onEditEvent, onClose, eventToEdit }) => {
  const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);
  const [title, setTitle] = useState(eventToEdit?.title || "");
  const [start, setStart] = useState(eventToEdit?.start ? dayjs(eventToEdit.start) : dayjs(selectedDate));
  const [end, setEnd] = useState(eventToEdit?.end ? dayjs(eventToEdit.end) : null);
  const [colorHEX, setColorHEX] = useState(eventToEdit?.backgroundColor || "#FE9C8F");
  const [allDay, setAllDay] = useState(eventToEdit?.allDay || false);
  const [description, setDescription] = useState(eventToEdit?.description || "");

  useEffect(() => {
    triggerEnter();
  }, [triggerEnter]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!title || !start || (!allDay && !end) || !description) {
      alert("Please fill all fields.");
      return;
    }

    const updatedEvent = {
      id: eventToEdit ? eventToEdit.id : `${Date.now()}`,
      title,
      start: start.toISOString(),
      end: allDay ? "" : end.toISOString(),
      allDay,
      backgroundColor: colorHEX,
      borderColor: colorHEX,
      description,
    };

    if (eventToEdit) {
      onEditEvent(updatedEvent);
    } else {
      onAddEvent(updatedEvent);
    }
    onClose();
  }, [title, start, allDay, end, colorHEX, description, eventToEdit, onEditEvent, onAddEvent, onClose]);

  const handleCancel = useCallback(() => {
    triggerExit(() => {
      if (onClose) onClose();
    });
  }, [triggerExit, onClose]);

  return ReactDOM.createPortal(
    <div
      className={`form_container scheduler_form_container glassmorphism shadow ${!isInitialized
        ? ""
        : isVisible
          ? "enter-animation"
          : "exit-animation"
        }`}
    >
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>{eventToEdit ? "Edit Event" : "Add Event"}</h1>
          <div className="container">
            <div className="title full">
              <label>Title</label>
              <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="all_day full">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={allDay}
                      onChange={(e) => setAllDay(e.target.checked)}
                    />
                  }
                  label="All Day Event"
                />
              </FormGroup>
            </div>
            <div className="start_date">
              <label>Start Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={start}
                  onChange={(newValue) => setStart(newValue)}
                  label="Start Date & Time"
                  disabled={allDay} // Disable when all-day is checked
                />
              </LocalizationProvider>
            </div>
            <div className="end_date">
              <label>End Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={end}
                  onChange={(newValue) => setEnd(newValue)}
                  label="End Date & Time"
                  disabled={allDay} // Disable when all-day is checked
                />
              </LocalizationProvider>
            </div>
            <div className="description full">
              <label htmlFor="description">Description</label>
              <Textarea
                size="lg"
                variant="outlined"
                sx={{
                  borderColor: "rgb(158, 158, 158)",
                  borderWidth: "1px",
                  borderRadius: "5px",
                  background: "transparent",
                  width: "100%",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state
              />
            </div>
            <div className="pickcolor full">
              <label style={{ marginBottom: "8px", display: "block", fontWeight: "bold" }}>
                Pick a Color
              </label>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {colorsets.map((colorBTN, index) => (
                  <div
                    key={index}
                    onClick={() => setColorHEX(colorBTN.value)}
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: colorBTN.value,
                      borderRadius: "50%",
                      border: colorHEX === colorBTN.value ? "3px solid #000" : "2px solid transparent",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="add_event">
              {eventToEdit ? "Edit Event" : "Submit"}
            </button>
            <button type="button" className="cancel_event" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
});


export default Calendar;