import { writable, get } from 'svelte/store';

export const sequence = writable(Array(8).fill().map(() => Array(16).fill(false)));
export const isPlaying = writable(false);
export const tempo = 120;
const stepDuration = 60 / tempo * 1000;

export function playSequence() {
    isPlaying.set(true);
    let currentSeq = get(sequence);
    (async function loop() {
        for (let step = 0; step < 16; step++) {
            if (!get(isPlaying)) break;
            currentSeq.forEach((sound, soundIndex) => {
                if (sound[step]) {
                    console.log(`Playing sound ${soundIndex} at step ${step}`);
                }
            });
            await new Promise(resolve => setTimeout(resolve, stepDuration));
        }
        if (get(isPlaying)) {
            loop();
        }
    })();
}

export function stopSequence() {
    isPlaying.set(false);
}
