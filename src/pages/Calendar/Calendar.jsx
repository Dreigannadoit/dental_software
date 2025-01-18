import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../css/scheduler.css"; // Add responsive styles here
import { TextField } from "@mui/material";
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

const Calendar = () => {
  const [showAddEventForm, setShowAddEventForm] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Sample Event",
      start: "2025-01-01T10:00:00",
      end: "2025-01-01T12:00:00",
    },
  ]);
  const [currentTitle, setCurrentTitle] = useState(""); // To store the current view's title
  const [currentDate, setCurrentDate] = useState(dayjs()); // Track the current displayed date
  const calendarRef = useRef(null);

  const openAddEventForm = (date) => {
    setSelectedDate(date);
    setShowAddEventForm(true);
  };

  const closeAddEventForm = () => {
    setShowAddEventForm(false);
    setSelectedDate(null);
  };

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Do you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== clickInfo.event.id)
      );
      clickInfo.event.remove();
    }
  };

  const updateCurrentTitleAndDate = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (calendarApi) {
        setCurrentTitle(calendarApi.view.title); // Update the current view's title
        setCurrentDate(dayjs(calendarApi.getDate())); // Sync the displayed date
      }
    }
  };

  const handleNavigate = (action) => {
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
      updateCurrentTitleAndDate(); // Update the title and date after navigation
    }
  };

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

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate); // Update the MUI DateCalendar state
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.gotoDate(newDate.format("YYYY-MM-DD")); // Sync FullCalendar's view to the new date
      updateCurrentTitleAndDate(); // Update title and view
    }
  };

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCurrentTitle(calendarApi.view.title); // Set initial title after component mounts
    }
  }, []);

  const handleDateClick = (info) => {
    openAddEventForm(info.dateStr);
  };

  return (
    <>
      {showAddEventForm && (
        <AddEventForm
          selectedDate={selectedDate}
          onAddEvent={handleAddEvent}
          onClose={closeAddEventForm}
        />
      )}
      <div className="scheduler_wrapper" style={{ width: "100%", overflow: "hidden" }}>
        <div className="scheduler">
          <div className="calendar_controls_wrapper">
            <div className="calendar_controls f-center">
              <div className="f-center">
                <h1>{currentTitle}</h1>
                <button className="prev f-center" onClick={() => handleNavigate("prev")}>
                  <img src={Arrow_left} alt="" />
                </button>
                <button className="next f-center" onClick={() => handleNavigate("next")}>
                  <img src={Arrow_right} alt="" />
                </button>
                <button className="today f-center" onClick={() => handleNavigate("today")}>Today</button>
              </div>
              <div className="f-center">
                <button className="month f-center" onClick={() => handleNavigate("month")}>Month View</button>
                <button className="week f-center" onClick={() => handleNavigate("week")}>Week View</button>
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
            height="auto" // Ensures it adjusts dynamically
            contentHeight="auto" // Matches content height
            datesSet={updateCurrentTitleAndDate} // Sync the date on calendar navigation
          />
        </div>

        <div className="side_info">
          <div className="mini_calendar f-center shadow">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={currentDate} // Controlled component to sync date
                onChange={handleDateChange} // Handle MUI calendar date changes
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="events_planed shadow">
            _
          </div>
        </div>
      </div>
    </>
  );
};


const AddEventForm = ({ selectedDate, onAddEvent, onClose }) => {
  const { isVisible, isInitialized, triggerEnter, triggerExit } =
    useAnimation(500);

  const [title, setTitle] = useState("");
  const [start, setStart] = useState(selectedDate ? dayjs(selectedDate) : null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    triggerEnter();
  }, [triggerEnter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !start || !end) {
      alert("Please fill all fields.");
      return;
    }

    const newEvent = {
      id: `${Date.now()}`, // Generate unique ID
      title,
      start: start.toISOString(),
      end: end.toISOString(),
    };

    onAddEvent(newEvent);
    onClose();
  };

  const handleCancel = () => {
    triggerExit(() => {
      if (onClose) onClose(); // Execute callback after exit animation completes
    });
  };

  return ReactDOM.createPortal(
    <div
      className={`form_container dentalCode_form_container glassmorphism shadow ${!isInitialized
        ? ""
        : isVisible
          ? "enter-animation"
          : "exit-animation"
        }`}
    >
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="tile full">
              <label>Title</label>
              <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="start_date">
              <label>Start Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={start}
                  onChange={(newValue) => setStart(newValue)}
                  label="Start Date & Time"
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
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Calendar;
