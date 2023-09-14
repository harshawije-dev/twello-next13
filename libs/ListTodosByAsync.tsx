import { database } from "@/appwrite.config";

export const getTodoListGroupedByColumn = async () => {
  const response = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  // Documents
  const documents = response.documents;

  const groupedByStatus = documents.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todo: [],
      });
    }

    acc.get(todo.status)?.todo.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }), //if only image data exists this record will be added
    });

    return acc;
  }, new Map<StatusKey, Column>());

  // Arrange the todos into "to do && in progress && done" sections

  const statusManage: StatusKey[] = ["todo", "in-progress", "completed"];

  statusManage.forEach((status) => {
    if (!groupedByStatus.get(status)) {
      groupedByStatus.set(status, {
        id: status,
        todo: [],
      });
    }
  });

  const sortTodos = new Map(
    [...groupedByStatus.entries()].sort(
      (a, b) => statusManage.indexOf(a[0]) - statusManage.indexOf(b[0])
    )
  );

  const data: Board = {
    columns: sortTodos,
  };

  return data;
};
