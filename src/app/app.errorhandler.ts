import { ErrorHandler } from '@angular/core';

// ** TODO
export default class AppErrorHandler implements ErrorHandler {
	constructor() {
		super(true);
	}

	handleError(error): void {
		super(error);
	}
}
