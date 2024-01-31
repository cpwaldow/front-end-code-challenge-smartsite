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
};

export type GymAPIType = {
  current_country_id: number;
  wp_total: number;
  total: number;
  success: boolean;
  locations: LocationsApiType;
};
