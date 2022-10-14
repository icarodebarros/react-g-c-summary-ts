import { createContext, FC, PropsWithChildren, useState } from 'react';
import { MeetupItem } from '../models/Meetup';

interface FavoritesInterface {
  favorites: MeetupItem[];
  totalFavorites: number;
  addFavorite: (meetup: MeetupItem) => void;
  removeFavorite: (meetupId: string) => void;
  isFavorite: (meetupId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesInterface>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup: MeetupItem) => {},
  removeFavorite: (meetupId: string) => {},
  isFavorite: (meetupId: string) => false,
});

export const FavoritesContextProvider: FC<PropsWithChildren> = (props) => {
  const [userFavorites, setUserFavorites] = useState<MeetupItem[]>([]);

  const addFavoriteHandler = (meetup: MeetupItem) => {
    setUserFavorites((prevFavorites) => [...prevFavorites, meetup]);
  };

  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const isFavoriteHandler = (meetupId: string) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
