<script>
    import Pad from './Pad.svelte';
    import { sequence } from '../lib/store.js';

    const instruments = ["Kick", "Snare", "Clap", "ClosedHat", "OpenHat", "Cymbal"];
    const variations = Array.from({ length: 9 }, (_, i) => i + 1);

    function togglePad(soundIndex, stepIndex) {
        sequence.update(s => {
            const newSeq = [...s];
            newSeq[soundIndex] = [...newSeq[soundIndex]];
            newSeq[soundIndex][stepIndex] = !newSeq[soundIndex][stepIndex];
            return newSeq;
        });
    }
</script>

<svelte>
    {#each $sequence as soundPads, soundIndex}
        <div class="sound-row">
            <select>
                {#each instruments as instrument}
                    <option value={instrument}>{instrument}</option>
                {/each}
            </select>
            <select>
                {#each variations as variation}
                    <option value={variation}>{variation}</option>
                {/each}
            </select>
            {#each soundPads as isActive, stepIndex}
                <Pad 
                    {isActive} 
                    onToggle={() => togglePad(soundIndex, stepIndex)} />
            {/each}
        </div>
    {/each}
</svelte>
