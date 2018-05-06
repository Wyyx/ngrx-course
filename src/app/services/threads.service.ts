import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AllUserData } from '../../../shared/to/all-user-data'

@Injectable()
export class ThreadsService {
	constructor(private http: HttpClient) {}

	loadUserThreads() {
		return this.http.get<AllUserData>('/api/threads')
	}
}
