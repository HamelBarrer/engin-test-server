import { Request, Response } from 'express';
import { EventNotFound, SpotNotFound, SpotNotMinimum } from '../erros/error';
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
  try {
    const data = insertEventLog(req.body);
    res.status(201).json(data);
  } catch (error) {
    const err = error as Error;

    if (err instanceof SpotNotFound) {
      res.status(404).json({
        error: err.message,
      });
      return;
    }
    if (err instanceof SpotNotMinimum) {
      res.status(404).json({
        error: err.message,
      });
      return;
    }
  }
};

export const updateEventLog = async (req: Request, res: Response) => {
  try {
    const eventLogId = Number(req.params.eventLogId);
    const data = updatedEventLog(eventLogId, req.body);

    res.status(200).json(data);
  } catch (error) {
    const err = error as Error;

    if (err instanceof EventNotFound) {
      res.status(404).json({
        error: err.message,
      });
      return;
    }
  }
};
