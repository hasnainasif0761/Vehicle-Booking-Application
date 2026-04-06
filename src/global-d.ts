import { Connection } from "mongoose";

declare global{
    var mongoosConn: {
        conn: Connection | null,
        promise: Promise<Connection> | null
    };
}

export {}