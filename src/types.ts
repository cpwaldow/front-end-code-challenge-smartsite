export type LocationsApiType = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: {
    weekdays: string;
    hour: string;
  }[];
  [key: string]: any;
};

export type SchedulesLocationsType = {
  weekdays: string;
  hour: string;
}[];

export type GymUnitsType = {
  gyms?: GymAPIType;
};

export type BtnFindUnitType = {
  period: string;
};

export type HandleLocationOpenedType = {
  id: number;
  schedules: number[][];
};

export type PeriodHoursType = {
  Manhã: { open: number; close: number };
  Tarde: { open: number; close: number };
  Noite: { open: number; close: number };
  [key: string]: { open: number; close: number };
};

export type GymAPIType = {
  current_country_id: number;
  wp_total: number;
  total: number;
  success: boolean;
  locations: LocationsApiType;
};
