import { database } from "@/appwrite.config";

export const getTodoListGroupedByColumn = async () => {
  const response = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  console.log(response);
};
