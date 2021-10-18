export async function asyncTry<T>(fn: Promise<T> | PromiseLike<T>): Promise<[T, null] | [null, Error]> {
	try {
		const res = await fn;
		return [res, null];
	} catch (error) {
		return [null, error as Error];
	}
}

export function syncTry<T>(fn: T): [T, null] | [null, Error] {
	try {
		const res = fn;
		return [res, null];
	} catch (error) {
		return [null, error as Error];
	}
}
