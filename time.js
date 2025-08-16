import dayjs from "dayjs";

const timeZoneElement = document.querySelector('.time-zone-p');
const timeElement = document.querySelector('.time-p');
const dateElement = document.querySelector('.date-p');

class TimeStamp {
    constructor(type) {
        this.time;
        this.type = type;
        this.updateTime();
        setInterval(() => {
            this.updateTime();
            console.log(this.time);
        }, 1000)
    }

    updateTime() {
        const date = new dayjs();
        switch (this.type) {
            case 'Time':
                this.time = date.format('hh:mm:ss');
                timeElement.innerHTML = this.time;
                break;
            case 'Date':
                this.time = date.format('dddd,D MMMM, YYYY')
                dateElement.innerHTML = this.time;
            case 'Time-Zone':
                this.time = Intl.DateTimeFormat().resolvedOptions().timeZone;
                timeZoneElement.innerHTML = this.time;
        }
    }

}

const myTimeZone = new TimeStamp('Time-Zone');
const myTime = new TimeStamp('Time');
const myDate = new TimeStamp('Date');