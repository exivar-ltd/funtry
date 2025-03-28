export async function asyncTry<T>(
	fn: Promise<T> | PromiseLike<T>,
	cb?: (() => Promise<any>) | Promise<any>
): Promise<[T, null] | [null, Error]> {
	try {
		const res = await fn;
		return [res, null];
	} catch (error) {
		return [null, error as Error];
	} finally {
		if (cb) {
			if (typeof cb === 'function') {
				await cb();
			} else {
				await cb;
			}
		}
	}
}

export function syncTry<T>(
	fn: () => T,
	cb?: () => void
): [T, null] | [null, Error]  {
	try {
		const res = fn;
		return [res, null];
	} catch (error) {
		return [null, error as Error];
	} finally {
		if (cb) {
			if (typeof cb === 'function') {
				await cb();
			} else {
				await cb;
			}
		}
	}
}
