import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import ENV from '../environment/environment';

import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { Meetup } from '../models/Meetup';

const NewMeetupPage: FC = () => {
  const navigate = useNavigate(); // On react-router-dom v6 useHistory is replaced by useNavigate

  const addMeetupHandler = async (meetupData: Meetup) => {

    await fetch(`${ENV.URL_BASE}/meetups.json`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    navigate('/'); // history.replace('/');
  };

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetupPage;
