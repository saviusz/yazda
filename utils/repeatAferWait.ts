interface Config {
    /** Time of hold before repeat */
    startRepeatingAfter: number,

    /** Time between two separete clicks */
    cooldown: number,

    /** Time between repeats */
    repeatEvery: number
}

export default function repeatAfterWait<T>(config: Config, callback: (...args : T[]) => void) {
    
    let startTime = Date.now();
    let lastTime = startTime;

    let lastActedTime = Infinity;

    return function (...args : T[]) {
        const now = Date.now();

        const cooldown = now - lastTime;
        const hold = now - startTime;
        const repeat = now - lastActedTime;
        
        lastTime = now;

        if (cooldown > config.cooldown) {
            startTime = now;
            lastActedTime = now;
            return callback(...args);
        }

        if (hold > config.startRepeatingAfter && repeat > config.repeatEvery) {
            lastActedTime = now;
            return callback(...args);
        }
    }
}