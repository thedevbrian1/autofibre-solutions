import { json } from "@remix-run/node";

export function validateEmail(email) {
    if (typeof email !== "string" || email.length < 3 || !email.includes("@")) {
        return 'Email is invalid';
    }
}

export function validateName(name) {
    if (typeof name !== "string" || name.length < 2) {
        return 'Name is invalid';
    }
}

export function validateMessage(message) {
    if (!message) {
        return 'Message cannot be empty';
    }
}

export function trimPhone(phone) {
    return phone.replace(/\D+/g, '');
}

export function validatePhone(phone) {
    // if (typeof phone !== "string" || phone.length < 10) {
    //   return 'Phone number is invalid';
    // }
    const safariomRegex = /^(?:254|\+254|0)?([71](?:(?:0[0-8])|(?:[12][0-9])|(?:9[0-9])|(?:4[0-3])|(?:4[68]))[0-9]{6})$/;

    const airtelRegex = /^(?:254|\+254|0)?(7(?:(?:3[0-9])|(?:5[0-6])|(?:8[0-2])|(?:8[6-9]))[0-9]{6})$/;

    const telkomRegex = /^(?:254|\+254|0)?(77[0-9][0-9]{6})$/;

    if (typeof phone !== "string" || phone.length < 10) {
        return 'Phone number is invalid';
    }

    else if (!phone.match(safariomRegex) && !phone.match(airtelRegex) && !phone.match(telkomRegex)) {
        return 'Phone number is invalid';
    }
}

export function badRequest(data) {
    return json(data, { status: 404 });
}