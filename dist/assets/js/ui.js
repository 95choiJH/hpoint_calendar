window.onload = function() {
    calendar();
    function calendar() {
        const year = 2025;
        const month = 6
        
        const dayWrap = document.querySelector('.section.calendar .month-grid');
        const today = new Date();
        const firstDay = new Date(year, month - 1, 1).getDay();
        const lastDate = new Date(year, month, 0).getDate();
        const prevMonthLastDate = new Date(year, month - 1, 0).getDate();

        let currentDay = 1;
        let nextMonthDay = 1;

        for (let week = 1; week <= 6; week++) {

            if(currentDay <= lastDate && nextMonthDay === 1) {

                const weekDiv = document.createElement('div');
                weekDiv.classList.add('week', `week${week}`);

                for (let i = 0; i < 7; i++) {
                    const dayWrapCell = document.createElement('div');
                    dayWrapCell.classList.add('day-wrap');

                    const dayCell = document.createElement('span');
                    dayCell.classList.add('day');

                    if (week == 2 && (i === 2 || i === 4)) {
                        dayWrapCell.classList.add('h-top');
                    } else if (week == 3) {
                        if (i === 2 || i === 4) {
                            dayWrapCell.classList.add('h-center');
                        } else if (i === 3) {
                            dayWrapCell.classList.add('h-deadCenter');
                        }
                    } else if (week == 4 && (i === 2 || i === 4)) {
                        dayWrapCell.classList.add('h-bot');
                    }

                    if (week === 1 && i < firstDay) {
                        const prevDate = prevMonthLastDate - (firstDay - i - 1);
                        dayWrapCell.classList.add('prev-month');
                        dayCell.textContent = prevDate;
                    }
                    else if (currentDay <= lastDate) {

                        // 오늘 날짜면 today 클래스 추가 ('월'은 고려안함)
                        if(currentDay === today.getDate()) {
                            dayWrapCell.classList.add('today');
                        }

                        dayCell.textContent = currentDay;
                        currentDay++;
                    }
                    else {
                        dayWrapCell.classList.add('next-month');
                        dayCell.textContent = nextMonthDay;
                        nextMonthDay++;
                    }

                    dayWrapCell.appendChild(dayCell);
                    weekDiv.appendChild(dayWrapCell);
                    
                } 

                dayWrap.appendChild(weekDiv);
            }

        }
    }
}