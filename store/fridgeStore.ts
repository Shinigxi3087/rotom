// store/fridgeStore.ts
import { create } from 'zustand';

export interface FridgeItem {
  id: string;
  name: string;
  expiryDate: string; // ISO format date string
  category?: string;
  createdAt: string;
}

interface FridgeStore {
  items: FridgeItem[];
  addItem: (item: Omit<FridgeItem, 'id' | 'createdAt'>) => void;
  editItem: (id: string, updates: Partial<FridgeItem>) => void;
  deleteItem: (id: string) => void;
  reset: () => void;
}

export const useFridgeStore = create<FridgeStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          ...item,
          id: Math.random().toString(36).slice(2),
          createdAt: new Date().toISOString(),
        },
      ],
    })),

  editItem: (id, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  reset: () => set({ items: [] }),
}));
