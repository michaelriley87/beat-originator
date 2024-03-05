<script>
    import { isPlaying, playSequence, stopSequence, tempo, swing, volume } from '../lib/store';
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
    function handleSwingChange(event) {
        swing.set(+event.target.value);
    }
    function handleVolumeChange(event) {
        volume.set(+event.target.value);
    }
    
    const tasks = ["Rock", "Reggae", "Hip Hop", "Funk", "EDM", "Punk"];
    function handleTaskSelection(event) {
        const selectedTask = event.target.value;
        console.log(`Triggering task: ${selectedTask}`); // load preset drum beat
        event.target.value = "default";
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
    <label for="swing">Swing: {$swing} %</label>
    <input
        type="range"
        id="swing"
        min="0"
        max="100"
        value="{$swing}"
        on:input={handleSwingChange}
    />
    <label for="volume">Volume: {$volume}%</label>
    <input
        type="range"
        id="volume"
        min="0"
        max="100"
        value="{$volume}"
        on:input={handleVolumeChange} 
    />
    <select on:change={handleTaskSelection}>
        <option value="default" selected>Load a Preset...</option>
        {#each tasks as task}
            <option value={task}>{task}</option>
        {/each}
    </select>
</svelte>
