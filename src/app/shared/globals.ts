import { Injectable } from '@angular/core';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
@Injectable()
export class Globals {
	constructor( private location: Location) { }
	priviledgeState = JSON.parse(localStorage.getItem('assigned-privileges'));
	adminDateFormat = 'DD-MM-YYYY HH:mm';
	adminDateFormatView = 'dd-MM-yyyy HH:mm';
	adminHourMinuteSecond = 'hh:mm:ss A';
	apiDateFormat = 'YYYY-MM-DD HH:mm';

	backClicked() {
		this.location.back();
	}

	modalConfig = {
		animated: true,
		keyboard: false,
		backdrop: true,
		ignoreBackdropClick: true
	};


}
