export type UserReview = {
    comment: string;
    rating: number | null;
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

export type ServerReview = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
        id: number
        name: string
    }
};

export type ServerReviews = ServerReview[];

export type AdaptingComment = {
    author: string;
    userId: number;
    text: string;
    comment?: string;
    date: string;
    id: number;
    rating: string;
    user?: {
        id: number;
        name: string;
    };
};
