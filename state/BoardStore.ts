import { getTodoListGroupedByColumn } from '@/libs/ListTodosByAsync'
import { create } from 'zustand'

export const useBoardStore = create<IBoardState>((set) => ({
    board: {
        columns: new Map<StatusKey, Column>(),
    },
    getBoard: async () => {
        const board = await getTodoListGroupedByColumn();
        set({ board })
    },
}))
