'use strict';

var pomodoro = {
	started: false,
	minutes: 0,
	seconds: 0,
	interval: null,
	minutesDOM: null,
	secondsDOM: null,
	init: function () {
		var self = this;
		this.minutesDOM = document.querySelector('#minutes');
		this.secondsDOM = document.querySelector('#seconds');
		this.interval = setInterval(function () {
			self.intervalCallback.apply(self);
		}, 1000);
		document.querySelector('#start').onclick = function () {
			self.startTimer.apply(self);
		}; document.querySelector('#stop').onclick = function () {
			self.stopTimer.apply(self);
		}; document.querySelector('#reset').onclick = function () {
			self.resetTimer.apply(self);
		};
	},
	resetVariables(mins, secs, started) {
		this.minutes = mins;
		this.seconds = secs;
		this.started = started;
	},
	startTimer: function () {
		this.resetVariables(25, 0, true);

	},
	resetTimer: function () {
		this.resetVariables(25, 0, false);
		this.updateDOM();
	},
	stopTimer: function () {
		this.resetVariables(false);
		//this.updateDOM();    
	},
	updateDOM: function () {
		this.minutesDOM.innerHTML = this.minutes;
		this.secondsDOM.innerHTML = this.seconds;

	},
	intervalCallback: function () {
		if (!this.started) return false;
		if (this.seconds == 0) {
			if (this.minutes == 0) {
				this.timerComplete();
				return;
			}
			this.seconds = 59;
			this.minutes--;
		} else {
			this.seconds--;
		}
		this.updateDOM();
	},
	timerComplete: function () {
		this.started = false;
	}
}

window.onload = function () {
	pomodoro.init();
}