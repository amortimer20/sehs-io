<script lang="ts">
    type Question = {
        answerKeywords?: string[],
        answer?: string,
        correctAnswers?: string,
        answerDetail: string,
        choices?: string[],
        number: number,
        questionType: number,
        text: string,
    };

    let { dataUrl } = $props()

    let currentQuestion: Question = $state(null);
    let nextQuestionButtonText = $state("Next Question");
    let questionComplete = $state(false);
    let questionData: Question[] = $state([]);
    let submitButtonText = $state("Submit Answer");
    let submittedAnswer = $state('');

    function beginPractice() {
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => {
                questionData = data;
                currentQuestion = getRandomQuestion();
            });
    }

    function showNextQuestion() {
        currentQuestion = getRandomQuestion();
        nextQuestionButtonText = "Next Question";
        questionComplete = false;
        submittedAnswer = "";
        submitButtonText = "Submit Answer";
    }

    function getRandomQuestion(): Question {
        return questionData[Math.floor(Math.random() * questionData.length)]; 
    }

    function submitAnswer() {
        switch (currentQuestion.questionType) {
            case 0:
                processAnswer(currentQuestion.correctAnswers.includes(submittedAnswer));
                break;
            case 1:
                processFreeResponseAnswer();
                break;
            case 2:
                processAnswer(submittedAnswer === currentQuestion.answer);
                break;
            case 3:
                processAnswer(submittedAnswer === currentQuestion.answer);
                break;
            default:
                console.error("Unknown question type");
                break;
        }
    }

    function processAnswer(isCorrect: boolean) {
        nextQuestionButtonText = isCorrect
            ? "Correct! Next Question"
            : "Incorrect. Next Question";
        questionComplete = true;
    }

    function processFreeResponseAnswer() {
        let keywordsFound = 0;

        currentQuestion.answerKeywords.forEach((keyword) => {
            if (submittedAnswer.includes(keyword)) {
                keywordsFound++;
            }
        });

        nextQuestionButtonText = `Found ${keywordsFound}/${currentQuestion.answerKeywords.length} keywords! Next Question`
        questionComplete = true;
    }
</script>

{#if currentQuestion == null}
    <div class="d-grid gap-2 my-5">
        <button class="btn btn-primary" onclick={beginPractice}>Begin</button>
    </div>
{:else}
    <div class="card">
        <div class="card-body">
            <p>(#{currentQuestion.number}) {@html currentQuestion.text}</p>
            {#if currentQuestion.questionType === 0}<!-- Fill in the blank -->
                <div class="mb-3">
                    <label class="form-label" for="answer">Answer: </label>
                    <input 
                        id="answer"
                        class="form-control"
                        bind:value={submittedAnswer}
                    />
                </div>
            {:else if currentQuestion.questionType === 1} <!-- FRQ -->
                <div class="mb-3">
                    <label class="form-label" for="answer">Answer: </label>
                    <textarea id="answer" class="form-control" bind:value={submittedAnswer}></textarea>
                </div>
            {:else if currentQuestion.questionType === 2} <!-- Mult. Choice-->
                <div class="mb-3">
                    <p>Answer:</p>
                    {#each currentQuestion.choices as choice, i}
                        <div class="form-check">
                            
                            <label>
                                <input type="radio" name="choice" class="form-check-input" value={currentQuestion.choices[i]} bind:group={submittedAnswer}>
                                {choice}
                            </label>
                        </div>
                    {/each}
                </div>
            {:else if currentQuestion.questionType === 3} <!-- T/F -->
                <div class="mb-3">
                    <p>Answer:</p>
                    <div class="form-check">
                        <label>
                            <input type="radio" name="answer" value="true" bind:group={submittedAnswer} />
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <label>
                            <input type="radio" name="answer" value="false" bind:group={submittedAnswer} />
                            False
                        </label>
                    </div>
                </div>
            {/if}
            <div class="mb-3">
                {#if questionComplete}
                    <button class="btn btn-primary" onclick={showNextQuestion}>
                        {nextQuestionButtonText}
                    </button>
                {:else}
                    <button class="btn btn-primary" onclick={submitAnswer}>
                        {submitButtonText}
                    </button>
                {/if}
            </div>
            {#if questionComplete}
                <div class="card border-info">
                    <div class="card-body">
                        <p class="text-info">Answer Details:</p>
                        <p>{@html currentQuestion.answerDetail}</p>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}