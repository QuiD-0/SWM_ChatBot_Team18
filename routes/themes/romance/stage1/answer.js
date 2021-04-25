exports.getBlock = (message) => {
    return {
        view: {
            title: '정답 입력',
            accept: '확인',
            decline: '취소',
            value: 'romance_stage1_result',
            blocks: [
                {
                    type: 'input',
                    name: 'input_name',
                    required: true,
                    placeholder: '이름을 입력해주세요.',
                },
            ],
        },
    };
};