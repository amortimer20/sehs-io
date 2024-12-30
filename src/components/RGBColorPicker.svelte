<script lang="ts">
    

    let red = $state(0);
    let green = $state(0);
    let blue = $state(0);
    const toHex = (val: number): string => val.toString(16).padStart(2, '0');
    let hex = $derived(`${toHex(red)}${toHex(green)}${toHex(blue)}`);
</script>

<div>
    <label class="form-label" for="red">Red: {red}</label>
    <input type="range" class="form-range" min="0" max="255" step="1" bind:value={red} />
    <label class="form-label" for="green">Green: {green}</label>
    <input type="range" class="form-range" min="0" max="255" step="1" bind:value={green} />
    <label class="form-label" for="blue">Blue: {blue}</label>
    <input type="range" class="form-range" min="0" max="255" step="1" bind:value={blue} />
    <div class="color-square mt-3" style="background-color: rgb({red}, {green}, {blue})">
    </div>
    <p>Hex: #{hex}</p>
</div>

<style>
    .color-square {
        height: 250px;
        border: 2px solid black;
        border-radius: 5px;
    }
</style>