import { fetchRandomString } from "@/api/fetchRandomString";
import { defineStore } from "pinia";

export const useStore = defineStore("random", {
    state: () => ({
        data: "",
    }),
    getters: {
        doubleData: (state) => state.data + state.data,
    },
    actions: {
        async fetchData() {
            this.data = await fetchRandomString();
        },
    },
});
