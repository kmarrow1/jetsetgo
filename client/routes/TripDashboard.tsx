import { Grid } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ITrip } from '../../src/models/trip';
import TripSummary from '../components/TripSummary/TripSummary';
import WeatherSummary from '../components/Weather/Weather';

export const loader = async ({ params }: { params: any }) => {
  const { tripId } = params;
  const response = await fetch(`/api/trips/${tripId}`);
  const data = await response.json();
  return data;
};

const TripDashboard = () => {
  const trip = useLoaderData() as ITrip;

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <TripSummary trip={trip} />
      </Grid>
      <Grid item xs={5}>
        <WeatherSummary
          lat={trip.destination.location.lat}
          lon={trip.destination.location.lng}
          location={trip.destination.name}
          start={trip.startDate}
          end={trip.endDate}
        />
      </Grid>
    </Grid>
  );
};

export default TripDashboard;
