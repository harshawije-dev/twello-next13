import { getTodoListGroupedByColumn } from '@/libs/GetTodosGroupedByAsync'
import { create } from 'zustand'

export const useBoardStore = create<IBoardState>((set) => ({
    board: {
        columns: new Map<StatusKey, Column>(),
    },
    getBoard: async () => {
        const data = await getTodoListGroupedByColumn();
        set({data})
    },
}))
