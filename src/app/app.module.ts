import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MessageListComponent } from './message-list/message-list.component'
import { MessageSectionComponent } from './message-section/message-section.component'
import { ThreadsService } from './services/threads.service'
import { ThreadListComponent } from './thread-list/thread-list.component'
import { ThreadSectionComponent } from './thread-section/thread-section.component'
import { UserSelectionComponent } from './user-selection/user-selection.component'

@NgModule({
	declarations: [
		AppComponent,
		UserSelectionComponent,
		ThreadSectionComponent,
		MessageSectionComponent,
		ThreadListComponent,
		MessageListComponent
	],
	imports: [ BrowserModule, FormsModule, HttpModule, HttpClientModule ],
	providers: [ ThreadsService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
