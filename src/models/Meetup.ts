export interface Meetup {
  image: string,
  title: string,
  address: string,
  description: string
}

export interface MeetupItem extends Meetup {
  id: string
}