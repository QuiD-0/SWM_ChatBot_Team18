module.exports = () => {
    return {
        title: '문제 1번 정답입력',
        accept: '제출',
        decline: '취소',
        value: 'nonsense_check_answer_1',
        blocks: [
            {
                type: 'label',
                text: '정답을 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer_word',
                required: true,
                placeholder: '4글자',
            },
        ],
    };
};