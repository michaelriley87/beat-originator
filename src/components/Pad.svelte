<script>
    export let isActive;
    export let onToggle;
</script>

<svelte>
    <button class="pad {isActive ? 'active' : ''}" on:click={onToggle} />
</svelte>

<style>
    .pad {
        width: 50px;
        height: 50px;
        margin: 4px;
        background-color: var(--pad-color, #ccc);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .pad.active {
        background-color: var(--pad-active-color, rgb(56, 61, 215));
    }
</style>
