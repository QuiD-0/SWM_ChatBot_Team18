module.exports = (order, content) => {
	return [
		{},
		{
			placeholder: '한글 2글자',
			solution: '아남',
			hint: '기러기 - 기분 - 분해 - 해질녘 - ',
			comment: '서울특별시 강남구 테헤란로 311로 가자',
		},
		{
			placeholder: "영어 1글자",
			solution: "i",
			hint: "약도 옆에 적힌 값들을 잘 보자",
			comment: "너무 늦지 않게 빨리 출발하자!!"
		},
		{
			placeholder: '영어 5글자',
			solution: 'ghost',
			hint: '비석에 적힌 숫자는 무엇을 의미할까?',
			comment: '으악!!! 유령이다 빨리 도망치자!!!!',
		},
		{
			placeholder: '영어 1글자',
			solution: 'o',
			hint: '번역해보자',
			comment: '눈 앞에 기나긴 길이 보인다....'
		},
		{
			placeholder: '영어 4글자',
			solution: 'trap',
			hint: '문제 2번과 3번을 생각해보자',
			comment: '함정이다!!\n다른 길로 돌아가자...'
		},
		{
			placeholder: '영어 4글자',
			solution: 'soma',
			hint: '왕, 여왕, 주교, ...',
			comment: '쉿.....\n들키지 않도록 조용히 지나가자.....',
		},
		{
			placeholder: '영어 6글자',
			solution: 'meteor',
			hint: 'maestro는 7글자이다',
			comment: 'Meteor~♬ 거대 meteor 난 네게 처박힐 meteor야~~♪♫',
		},
		{
			placeholder: '영어 7글자',
			solution: 'airpods',
			hint: '무지개는 빨주노초파남보이다',
			comment: '수고하셨습니다~~',
		},
	][order][content];
};

/*

comments = {
		1: "서울특별시 강남구 테헤란로 311을 찾아가자",
		2: "으악!!! 유령이다 빨리 도망치자!!!!",
		3: "쉿.....\n들키지 않도록 조용히 지나가자.....",
		4: "Meteor~♬ 거대 meteor 난 네게 처박힐 meteor야\~~♪♫",
		5: "부탁드려요~~"
	};
		hints = {
		1: '기러기 - 기분 - 분해 - 해질녘 - .....',
		2: '비석에 적힌 숫자는 무엇을 의미할까?',
		3: '왕, 여왕, 주교, 탑, ...',
		4: 'maestro는 7글자이다',
		5: '무지개는 빨주노초파남보이다'
	};
		placeholders = {
		1: '한글 2글자',
		2: '영어 5글자',
		3: '영어 4글자',
		4: '영어 6글자',
		5: '영어 7글자'
	};
		sols = {
		1: "아남",
		2: "ghost",
		3: "soma",
		4: "meteor",
		5: "airpods"
	};
*/