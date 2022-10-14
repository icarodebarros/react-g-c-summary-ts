import { FC } from 'react';
import { MeetupItem as MeetupItemProps } from '../../models/Meetup';

import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css';

interface MeetupListProps {
  meetups: MeetupItemProps[];
}

const MeetupList: FC<MeetupListProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
export default MeetupList;
