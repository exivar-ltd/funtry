export async function asyncTry<T>(fn: Promise<T> | PromiseLike<T>): Promise<[T, false] | [null, true]> {
	const res = await fn;
	if (res)
		return [res, false];
	return [null, true];
}

export function syncTry<T>(fn: T): [T, false] | [null, true] {
	const res = fn;
	if (res)
		return [res, false];
	return [null, true];
}
