/* Loads the five-question quiz set for each stop from questions.txt. */
(function (root) {
    function parseQuestionsDocument(text) {
        const answerKey = {};
        [...text.matchAll(/(\d+)\.\s*([a-d])/gi)].forEach(match => { answerKey[Number(match[1])] = match[2].toLowerCase(); });
        const questionsByStop = {};
        const stopBlocks = [...text.matchAll(/STOP\s+(\d+):[\s\S]*?(?=STOP\s+\d+:|ANSWER KEY)/gi)];
        stopBlocks.forEach(stopMatch => {
            const stopId = Number(stopMatch[1]);
            const starts = [...stopMatch[0].matchAll(/^\s*(\d+)\.\s+/gm)];
            questionsByStop[stopId] = starts.map((match, index) => {
                const segment = stopMatch[0].slice(match.index, starts[index + 1]?.index || stopMatch[0].length);
                const number = Number(match[1]);
                const prompt = segment.split(/\n\s*a\)\s+/i)[0].replace(/^\s*\d+\.\s+/, '').replace(/\s+/g, ' ').trim();
                const options = [...segment.matchAll(/(?:^|\n)\s*([a-d])\)\s+([\s\S]*?)(?=(?:\n\s*[a-d]\)\s+)|$)/gi)].map(option => option[2].replace(/\s+/g, ' ').trim());
                const answerIndex = Math.max(0, 'abcd'.indexOf(answerKey[number] || 'a'));
                return { prompt, options, answer: options[answerIndex] };
            });
        });
        return questionsByStop;
    }
    root.memoryQuestionsReady = fetch('questions.txt', { cache: 'no-store' }).then(response => response.ok ? response.text() : '').then(parseQuestionsDocument).catch(error => { console.warn('Memory questions unavailable.', error); return {}; });
})(window);
