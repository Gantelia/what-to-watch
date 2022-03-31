export type UserReview = {
    rating: number;
    comment: string;
}

export type Comment = {
    id: number;
    author: string;
    date: string;
    rating: string;
    text: string;
    userId: number;
}

export type Comments = Comment[];

export type ServerComment = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
        id: number
        name: string
    }
};

export type UserComment = {
    id: number;
    review: UserReview;
  }

export type ServerComments = ServerComment[];

