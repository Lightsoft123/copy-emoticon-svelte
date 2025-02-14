import type { PageServerLoad } from "./$types.ts";
import { emoticons } from "./sample-data.ts";

export const load: PageServerLoad = async () => {
    return {
        emoticons,
    };
}