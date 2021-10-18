export async function asyncTry<T>(fn: Promise<T> | PromiseLike<T>): Promise<[T, false] | [null, Error]> {
	try {
		const res = await fn;
		return [res, false];
	} catch (error) {
		return [null, <Error> error];
	}
}

export function syncTry<T>(fn: T): [T, false] | [null, Error] {
	try {
		const res = fn;
		return [res, false];
	} catch (error) {
		return [null, <Error> error];
	}
}
