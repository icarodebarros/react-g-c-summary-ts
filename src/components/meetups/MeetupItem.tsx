import { FC, useContext } from 'react';
import { MeetupItem as MeetupItemProps } from '../../models/Meetup';
import FavoritesContext from '../../store/FavoritesContext';

import Card from '../ui/Card';

import classes from './MeetupItem.module.css';

const MeetupItem: FC<MeetupItemProps> = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const isFavorite = favoritesCtx.isFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        address: props.address,
        description: props.description,
        image: props.image,
        title: props.title
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;