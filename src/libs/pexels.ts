import { createClient } from "pexels";

export default createClient(process.env.NEXT_PUBLIC_PEXELS_KEY as string);
