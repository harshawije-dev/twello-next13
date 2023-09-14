interface Board {
    columns: Map<StatusKey, Column>;
}

interface Column {
    id: StatusKey,
    todo: Todos[]
}

interface Todos {
    $id: string,
    $createdAt: string,
    title: string,
    status?: StatusKey,
    image?: Image
}

interface Image {
    bucketId: string,
    fileId: string,
}

interface IBoardState {
    board: Board,
    getBoard: () => void
}