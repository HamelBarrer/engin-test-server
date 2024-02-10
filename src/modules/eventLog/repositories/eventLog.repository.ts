import { ERROR_MESSAGE } from '../constants/error.constant';
import { EventNotFound, SpotNotFound, SpotNotMinimum } from '../erros/error';
import { EventLog } from '../models/eventLog.model';
import { eventLog, spots } from '../store/eventLog.store';

export const allSpots = () => {
  return spots;
};

export const findEventLogById = (eventLogId: number) => {
  const data = eventLog.find((event) => event.id === eventLogId);
  return data;
};

export const findSpotById = (spotId: number) => {
  const data = spots.find((spot) => spot.id === spotId);
  if (!data) {
    throw new SpotNotFound(ERROR_MESSAGE.SPOT_NOT_FOUND);
  }
  return data;
};

export const allEventLogs = () => {
  return eventLog.sort((a, b) => b.id - a.id);
};

export const insertEventLog = (event: EventLog) => {
  event.id = Date.now();

  const spot = findSpotById(event.spotId);
  const newQuantitySpot = spot.quantity - event.quantity;
  if (newQuantitySpot < 0) {
    throw new SpotNotMinimum(ERROR_MESSAGE.SPOT_NOT_MINIMUM);
  }

  const spotIndex = spots.findIndex((spot) => spot.id === event.spotId);
  spots[spotIndex].quantity -= event.quantity;

  eventLog.push(event);
  return event;
};

export const updatedEventLog = (eventLogId: number, event: EventLog) => {
  const dataIndex = eventLog.findIndex((el) => el.id === eventLogId);
  if (dataIndex < 0) {
    throw new EventNotFound(ERROR_MESSAGE.SPOT_NOT_FOUND);
  }

  const spot = findSpotById(event.spotId);
  const newQuantitySpot = spot.quantity - event.quantity;
  if (newQuantitySpot < 0) {
    throw new SpotNotMinimum(ERROR_MESSAGE.SPOT_NOT_MINIMUM);
  }

  const spotIndex = spots.findIndex((spot) => spot.id === event.spotId);
  spots[spotIndex].quantity -= event.quantity;

  const eventLogRegister = findEventLogById(eventLogId);
  event.id = eventLogRegister!.id;
  eventLog[dataIndex] = event;

  return event;
};
