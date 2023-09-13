export interface Thread {

  id: string;
  username: string;
  title: string;
  text: string;
  timestamp: string;
  comments: Comment[];

}

export interface Comment {

  id: string;
  username: string;
  text: string;
  timestamp: string;

}
