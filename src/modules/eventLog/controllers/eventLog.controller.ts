import { Request, Response } from 'express';
import {
  allEventLogs,
  allSpots,
  findEventLogById,
  insertEventLog,
  updatedEventLog,
} from '../repositories/eventLog.repository';

export const getSpots = async (_: Request, res: Response) => {
  const data = allSpots();
  if (data.length === 0) {
    res.status(204).json();

    return;
  }

  res.status(200).json(data);
};

export const getEventLog = async (req: Request, res: Response) => {
  const eventLogId = Number(req.params.eventLogId);
  const data = findEventLogById(eventLogId);
  if (!data) {
    res.status(404).json({
      error: 'Event not found',
    });

    return;
  }

  res.status(200).json(data);
};

export const getEventLogs = async (_: Request, res: Response) => {
  const data = allEventLogs();
  if (data.length === 0) {
    res.status(204).json();

    return;
  }

  res.status(200).json(data);
};

export const createEventLog = async (req: Request, res: Response) => {
  const data = insertEventLog(req.body);
  if (data.id === 0) {
    res.status(400).json({
      error: 'Spot not found',
    });
    return;
  }
  if (data.spots.id === 0) {
    res.status(400).json({
      error: 'The location does not have the requested amount',
    });
    return;
  }

  res.status(201).json(data);
};

export const updateEventLog = async (req: Request, res: Response) => {
  const eventLogId = Number(req.params.eventLogId);
  const data = updatedEventLog(eventLogId, req.body);

  if (data.id === 0) {
    res.status(404).json({
      error: 'Event not found',
    });

    return;
  }

  res.status(200).json(data);
};
