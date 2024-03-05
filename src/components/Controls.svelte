<script>
    import { isPlaying, playSequence, stopSequence, tempo } from '../lib/store';

    function togglePlayback() {
        if ($isPlaying) {
            stopSequence();
        } else {
            playSequence();
        }
    }

    function handleTempoChange(event) {
        tempo.set(+event.target.value);
    }
</script>

<svelte>
    <button on:click={togglePlayback}>
        {$isPlaying ? 'Stop' : 'Play'}
    </button>
    
    <label for="tempo">Tempo: {$tempo} BPM</label>
    <input
        type="range"
        id="tempo"
        min="50"
        max="150"
        value="{$tempo}"
        on:input={handleTempoChange}
    />
</svelte>
