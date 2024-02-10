import { EventLog } from '../models/eventLog.model';
import { eventLog, spots } from '../store/eventLog.store';

export const allSpots = () => {
  return spots;
};

export const findEventLogById = (eventLogId: number) => {
  const data = eventLog.find((event) => event.id === eventLogId);
  return data;
};

export const allEventLogs = () => {
  return eventLog.sort((a, b) => b.id - a.id);
};

export const insertEventLog = (event: EventLog) => {
  event.id = Date.now();

  const spot = spots.find((spot) => spot.id === event.spots.id);
  if (!spot) {
    return <EventLog>{
      id: 0,
      name: '',
      description: '',
      date: '',
      spots: {},
    };
  }

  const newQuantitySpot = spot.quantity - event.spots.quantity;
  if (newQuantitySpot < 0) {
    return <EventLog>{
      spots: {
        id: 0,
      },
    };
  }

  const spotIndex = spots.findIndex((spot) => spot.id === event.spots.id);
  spots[spotIndex].quantity -= event.spots.quantity;

  eventLog.push(event);
  return event;
};

export const updatedEventLog = (eventLogId: number, event: EventLog) => {
  const dataIndex = eventLog.findIndex((el) => el.id === eventLogId);
  if (dataIndex < 0) {
    return <EventLog>{
      id: 0,
      name: '',
      description: '',
      date: '',
      spots: {},
    };
  }

  const spot = spots.find((spot) => spot.id === event.spots.id);
  if (!spot) {
    return <EventLog>{
      id: 0,
      name: '',
      description: '',
      date: '',
      spots: {},
    };
  }

  const newQuantitySpot = spot.quantity - event.spots.quantity;
  if (newQuantitySpot < 0) {
    return <EventLog>{
      id: 0,
      name: '',
      description: '',
      date: '',
      spots: {
        id: 0,
      },
    };
  }

  const spotIndex = spots.findIndex((spot) => spot.id === event.spots.id);
  spots[spotIndex].quantity -= event.spots.quantity;

  const eventLogRegister = findEventLogById(eventLogId);
  event.id = eventLogRegister!.id;
  eventLog[dataIndex] = event;

  return event;
};
