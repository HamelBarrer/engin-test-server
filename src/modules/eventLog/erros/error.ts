import { ERROR_MESSAGE } from '../constants/error.constant';

export class EventNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.EVENT_NOT_FOUND;
  }
}

export class SpotNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.SPOT_NOT_FOUND;
  }
}

export class SpotNotMinimum extends Error {
  constructor(message: string) {
    super(message);
    this.name = ERROR_MESSAGE.SPOT_NOT_MINIMUM;
  }
}
