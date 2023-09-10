function shout(string) {
    return string.toUpperCase();
}

function whisper(string2){
    return string2.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()) {
        const reply1 = "I can't hear you!";
        return reply1;
    }
    else if (string === string.toUpperCase()) {
        const reply2 = "YES INDEED!";
        return reply2;
    }
    else if (string === "Let's have dinner together!") {
        const reply3 = "I would love to!";
        return reply3;
    }
}