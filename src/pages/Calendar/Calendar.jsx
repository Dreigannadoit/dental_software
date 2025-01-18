import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../css/scheduler.css"; // Add responsive styles here
import { TextField } from "@mui/material";
import "@schedule-x/theme-default/dist/index.css";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";
import useAnimation from "../../hooks/useFormAnimate";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = () => {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Sample Event",
      start: "2025-01-01T10:00:00",
      end: "2025-01-01T12:00:00",
    },
  ]);
  const calendarRef = useRef(null);
  const parentRef = useRef(null);

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
      clickInfo.event.remove(); // Remove from FullCalendar
    }
  };

  // Resize logic to handle dynamic resizing
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.updateSize(); // Update the calendar size
      }
    });

    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
      resizeObserver.disconnect();
    };
  });

  const calendarOptions = {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "customMonthButton,customWeekButton",
    },
    customButtons: {
      customMonthButton: {
        text: "Month View",
        click: () => calendarRef.current.getApi().changeView("dayGridMonth"),
      },
      customWeekButton: {
        text: "Week View",
        click: () => calendarRef.current.getApi().changeView("timeGridWeek"),
      },
    },
    height: "auto",
    contentHeight: "auto",
  };

  const handleDateClick = (info) => {
    openAddEventForm(info.dateStr);
  };

  return (
    <div className="scheduler" ref={parentRef} style={{ width: "100%", overflow: "hidden" }}>
      <div className="calendar_section">
        <div className="controlls">
          button.prev+button.next+.button.today+.
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        height="auto"
        contentHeight="auto"
        {...calendarOptions}
      />
      {showAddEventForm && (
        <AddEventForm
          selectedDate={selectedDate}
          onAddEvent={handleAddEvent}
          onClose={closeAddEventForm}
        />
      )}
    </div>
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
