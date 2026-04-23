// store/store.tsx

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Type-safe cart state interface
interface CartState {
    items: Array<{
        id: number;
        title: string;
        price: number;
        quantity: number;
        thumb: string;
    }>;
}

// Check if code is running on client side
const isClient = typeof window !== "undefined";

// Load state from localStorage with proper SSR handling
const loadFromLocalStorage = (): CartState | undefined => {
    if (!isClient) {
        return undefined; // Return undefined during SSR
    }

    try {
        const stateStr = localStorage.getItem("cartState");
        if (!stateStr) {
            return undefined;
        }

        const parsed = JSON.parse(stateStr);

        // Validate the structure of loaded state
        if (parsed && Array.isArray(parsed.items)) {
            return parsed as CartState;
        }

        return undefined;
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};

// Save state to localStorage with proper SSR handling
const saveToLocalStorage = (state: CartState) => {
    if (!isClient) {
        return; // Don't attempt to save during SSR
    }

    try {
        const stateStr = JSON.stringify(state);
        localStorage.setItem("cartState", stateStr);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const defaultCartState: CartState = {
    items: [],
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadFromLocalStorage() ?? defaultCartState,
    },
});

// Only subscribe to store changes on client side
if (isClient) {
    store.subscribe(() => {
        saveToLocalStorage(store.getState().cart);
    });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;