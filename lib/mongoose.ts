import mongoose from 'mongoose';

declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | undefined;
}

const cached = globalThis.mongoose ?? (globalThis.mongoose = { conn: null, promise: null });

async function dbConnect(): Promise<typeof mongoose> {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable');
    }

    if (cached.conn) return cached.conn as unknown as typeof mongoose;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        }).then(cached.promise);
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err;
    }

    return cached.conn! as unknown as typeof mongoose;
}

export default dbConnect;
