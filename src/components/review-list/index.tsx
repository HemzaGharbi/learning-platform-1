import { reviewsTable } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import { FC } from "react";

// interface Review {
//   id: number;
//   title: string;
//   content: string;
//   createAt: Date;
// }

interface Props {
  reviews: Review[];
}

type Review = InferSelectModel<typeof reviewsTable>;

export const ReviewsList: FC<Props> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Link href={`/reviews/${review.id}`}>
            <h3>{review.title}</h3>
            <div>{review.content}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
