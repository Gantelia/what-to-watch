export type UserReview = {
    comment: string;
    rating: number | null;
}

export type Comment = {
    id: number;
    author: string;
    data: string;
    rating: string;
    text: string;
    userId: number;
}

export type Comments = Comment[];
