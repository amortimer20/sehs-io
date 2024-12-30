<script lang="ts">
    import anime from 'animejs';

    const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let degree = $state(0);
    let key = $state(0);
    let plaintext = $state('');
    let ciphertext = $state('');
    let isForwardDisabled = $derived(key === 25);
    let isBackwardDisabled = $derived(key === 0);

    // Event handler functions
    function increaseDial() {
        turnDial(13.846, 1);
    }

    function decreaseDial() {
        turnDial(-13.846, -1)
    }

    function encrypt() {
        ciphertext = transformText(plaintext, 'encrypt');
    }

    function decrypt() {
        plaintext = transformText(ciphertext, 'decrypt');
    }

    // Utility functions
    function turnDial(degreeTurn: number, keyChange: number) {
        degree += degreeTurn;
        key += keyChange;
        anime({
            targets: '#dial',
            rotate: degree,
            easing: 'linear',
            duration: 250
        })
    }

    function transformText(text: string, operation: string) {
        let result = '';
        let keyShift = operation === 'encrypt' ? key : -key;

        for (let char of text.toUpperCase()) {
            result += LETTERS.includes(char) 
                ? LETTERS[mod(LETTERS.indexOf(char) + keyShift, 26)] 
                : char;
        }

        return result;
    }

    function mod(a: number, b: number) {
        a = +a;
        b = +b;
        return ((a % b) + b) % b;
    }
</script>

<!-- Dial -->
<div class="col-sm-12 col-md-6">
    <div class="position-relative">
        <img src="/utilities/caesar-dial-outer.png" class="img-fluid" alt="dial outer" />
        <div class="overlay">
            <img
                id="dial"
                src="/utilities/caesar-dial-inner.png"
                class="d-block mx-auto w-75"
                alt="dial inner"
            />
        </div>
    </div>
</div>

<!-- Form -->
<div class="col-sm-12 col-md-4 offset-md-2">
    <div class="mb-3">
        <label for="key" class="form-label">Key:</label>
        <input id="key" type="text" class="form-control w-auto" readonly bind:value={key} />
        <div class="row mt-3">
            <div class="col-auto">
                <button class="btn btn-primary" disabled={isBackwardDisabled} onclick={decreaseDial}>
                    Backward
                </button>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary" disabled={isForwardDisabled} onclick={increaseDial}>
                    Forward
                </button>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label for="plaintext">Plaintext:</label>
        <textarea id="plaintext" class="form-control" rows="3" bind:value={plaintext}></textarea>
        <button class="form-control btn btn-primary mt-2" onclick={encrypt}>Encrypt</button>
    </div>
    <div class="mb-3">
        <label for="ciphertext">Ciphertext:</label>
        <textarea id="ciphertext" class="form-control" rows="3" bind:value={ciphertext}></textarea>
        <button class="form-control btn btn-primary mt-2" onclick={decrypt}>Decrypt</button>
    </div>
</div>

<style>
    .overlay {
        position: absolute;
        bottom: 13%;
        z-index: 1;
    }
</style>