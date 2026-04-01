import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

const ReviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (isNaN(Number(id))) {
    notFound();
  }
  const result = await db
    .select()
    .from(reviewsTable)
    .where(eq(reviewsTable.id, Number(id)))
    .limit(1);

  const review = result[0];
  if (!review) {
    notFound();
  }

  return <div>ID{id}</div>;
};

export default ReviewPage;
