import { FC, useEffect, useState } from 'react';

import ENV from '../environment/environment';

import MeetupList from '../components/meetups/MeetupList';
import { MeetupItem } from '../models/Meetup';
import Spinner from '../components/ui/Spinner';

const AllMeetupsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(`${ENV.URL_BASE}/meetups.json`); // method 'get' by preventDefault
      const data = await response.json();
      const meetups = [];

      for (const key in data) {
        // changing the firebase default format
        const meetup = { id: key, ...data[key] };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    }
    fetchData();
  }, []); /* List of dependencies that if changed will cause the above function
  to execute. An empty array will execute the function only when the component 
  render the first time. Ommit the array is the same of having our function outside
  the useEffect. 
  The golden rule is list the outsiders dependencies. (In our case we dont have any) */

  if (isLoading) {
    return (
      <section>
        <Spinner />
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetupsPage;
