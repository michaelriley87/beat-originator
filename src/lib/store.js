import { writable, get } from 'svelte/store';

export const sequence = writable(Array(8).fill().map(() => Array(16).fill(false)));
export const isPlaying = writable(false);
export const tempo = writable(120);
const stepDuration = 60 / tempo * 250;

export function playSequence() {
    isPlaying.set(true);
    let currentSeq = get(sequence);
    (async function loop() {
        let currentTempo = get(tempo);
        let stepDuration = 60 / currentTempo * 250;
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
