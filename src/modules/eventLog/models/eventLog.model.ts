export interface Spots {
  id: number;
  name: string;
  quantity: number;
}

export interface EventLog {
  id: number;
  name: string;
  description: string;
  date: string;
  spots: Spots;
}
