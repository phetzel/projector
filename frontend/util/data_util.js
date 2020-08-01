export const displayTimeDay = time => {
    const newTime = time.split('T')[1];
    const splitTime = newTime.split(':');

    let hours = splitTime[0];
    if (hours[0] === "0") {
        hours = hours.substring(1);
    }
    let ap;
    if (hours > '12') {
        hours -= 12;
        ap = 'PM';
    } else if (hours === '12') {
        ap = "PM";
    } else {
        ap ="AM";
    }

    const seconds = splitTime[2].substring(0,2);

    return `${hours}:${splitTime[1]}:${seconds} ${ap}`;
}

export const displayTimeLength = time => {
    const newTime = time.split('T')[1];
    const splitTime = newTime.split(':');

    let hours = splitTime[0];
    if (hours[0] === "0") {
        hours = hours.substring(1);
    }

    const seconds = splitTime[2].substring(0, 2);
    return `${hours}:${splitTime[1]}:${seconds}`;
}

export const revDate = date => {
    const newDate = date.split('-');
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
}


