// ========================================================
// ARGO - 50개 심층 가치관 딜레마 & 6대 영역 추천 데이터베이스
// 학술적 기반: 샬롬 슈워츠 가치이론, 에드가 샤인 경력 닻,
// 미하이 칙센트미하이 몰입(Flow), ACT 수용전념치료, 호모 루덴스(놀이)
// ========================================================

const THEMES = [
  { id: 'theme_1', name: '테마 1: 자율과 안정 (Q01~Q10)', desc: '내 삶의 주도권과 심리적 안전지대의 무게중심' },
  { id: 'theme_2', name: '테마 2: 도전과 평온 (Q11~Q20)', desc: '가슴 뛰는 모험의 불꽃과 고요한 내면의 호수' },
  { id: 'theme_3', name: '테마 3: 성취와 공헌 (Q21~Q30)', desc: '독보적 전문성과 세상을 보듬는 이타적 나눔' },
  { id: 'theme_4', name: '테마 4: 지적 탐구와 창작 (Q31~Q40)', desc: '진리를 향한 순수한 호기심과 무에서 유를 빚는 창조' },
  { id: 'theme_5', name: '테마 5: 놀이와 활력 (Q41~Q50)', desc: '순수한 유희(호모 루덴스), 관계의 웃음, 생명력' }
];

const FIFTY_DILEMMAS = [
  // --- 테마 1: 자율과 안정 (Q01 ~ Q10) ---
  {
    id: 'q01', themeId: 'theme_1',
    title: '시간의 주도권',
    question: '나에게 더 깊은 해방감과 자존감을 주는 시간의 형태는?',
    familyTopic: '가족 대화: "정해진 시간표대로 움직일 때 마음이 편한가요, 내 기분과 생각대로 시간을 쓸 때 신나나요?"',
    optionA: { title: '완전한 자율의 시간', desc: '아침에 눈떠서 밤에 잠들 때까지 내 의지대로 통제하는 하루 (실패도 성공도 오롯이 내 책임)', valueKey: 'autonomy', emoji: '🦅' },
    optionB: { title: '예측 가능한 규칙의 시간', desc: '정해진 루틴과 안정적인 가이드라인 속에서 평온하게 집중하는 하루 (불확실성을 최소화함)', valueKey: 'security', emoji: '🏰' }
  },
  {
    id: 'q02', themeId: 'theme_1',
    title: '공간의 경계',
    question: '내가 머물고 싶은 일과 삶의 터전은 어떤 모습인가요?',
    familyTopic: '가족 대화: "어디든 떠돌며 일하는 유목민이 좋나요, 단단하고 아늑한 나만의 고정된 아지트가 좋나요?"',
    optionA: { title: '디지털 노마드의 유목민적 삶', desc: '장소에 구애받지 않고 언제든 짐을 싸서 떠날 수 있는 열린 공간', valueKey: 'autonomy', emoji: '🎒' },
    optionB: { title: '뿌리내린 든든한 보금자리', desc: '믿을 수 있는 이웃과 오래도록 함께 가꾸는 안온하고 견고한 공간', valueKey: 'security', emoji: '🏡' }
  },
  {
    id: 'q03', themeId: 'theme_1',
    title: '의사결정의 무게',
    question: '중요한 기로에 섰을 때 나를 더 안도하게 만드는 것은?',
    familyTopic: '가족 대화: "모든 결정을 혼자 내리는 게 편한가요, 함께 의논하고 다수결로 정하는 게 편한가요?"',
    optionA: { title: '단독 결정과 전적인 책임', desc: '타인의 승인이나 타협 없이 내 직관과 소신만으로 전진하는 방식', valueKey: 'autonomy', emoji: '🧭' },
    optionB: { title: '집단적 합의와 공동 책임', desc: '서로의 지혜를 모으고 위험을 분산하여 함께 걸어가는 방식', valueKey: 'security', emoji: '🤝' }
  },
  {
    id: 'q04', themeId: 'theme_1',
    title: '수입과 생계의 철학',
    question: '내가 진정으로 바라는 경제적 자유의 본질은?',
    familyTopic: '가족 대화: "매달 정해진 돈이 꼬박꼬박 나오는 게 좋을까요, 들쭉날쭉해도 내 실력대로 버는 게 좋을까요?"',
    optionA: { title: '무한한 가능성과 독립 채산', desc: '고정급은 없지만 내 역량과 시도에 따라 상한선 없이 보상받는 독립성', valueKey: 'autonomy', emoji: '📈' },
    optionB: { title: '흔들리지 않는 고정적 안전망', desc: '매월 예측 가능한 수입을 통해 가족의 일상을 든든하게 받쳐주는 보장', valueKey: 'security', emoji: '🛡️' }
  },
  {
    id: 'q05', themeId: 'theme_1',
    title: '조직과 소속감',
    question: '나의 정체성을 더 빛나게 하는 위치는 어디인가요?',
    familyTopic: '가족 대화: "큰 무리의 일원으로 인정받는 게 좋나요, 독자적인 1인 전문가로 불리는 게 좋나요?"',
    optionA: { title: '고독하지만 자유로운 1인 주체', desc: '어떤 명함이나 조직의 그늘 뒤에 숨지 않고 오롯이 내 이름 석 자로 서는 삶', valueKey: 'autonomy', emoji: '👤' },
    optionB: { title: '존경받는 공동체의 든든한 일원', desc: '역사와 전통이 있는 팀에서 서로를 지켜주며 유대감을 나누는 삶', valueKey: 'security', emoji: '👥' }
  },
  {
    id: 'q06', themeId: 'theme_1',
    title: '실패에 대한 태도',
    question: '불가피한 실패를 마주했을 때 더 견디기 쉬운 상황은?',
    familyTopic: '가족 대화: "내가 고집부리다 실패한 게 덜 억울할까요, 남 시키는 대로 하다 실패한 게 덜 억울할까요?"',
    optionA: { title: '내 고집대로 하다가 겪은 실패', desc: '적어도 남 탓하지 않고 온전히 내가 선택했기에 후회가 남지 않는 실패', valueKey: 'autonomy', emoji: '⚡' },
    optionB: { title: '시스템의 한계로 인해 겪은 실패', desc: '혼자 모든 짐을 지지 않고 동료들과 함께 아픔을 나누고 위로받는 실패', valueKey: 'security', emoji: '🩹' }
  },
  {
    id: 'q07', themeId: 'theme_1',
    title: '규범과 규율',
    question: '세상의 규칙에 대해 본능적으로 드는 나의 생각은?',
    familyTopic: '가족 대화: "규칙은 깨고 새로 만들기 위해 있는 걸까요, 질서를 위해 꼭 지켜야 하는 걸까요?"',
    optionA: { title: '규칙은 언제든 질문하고 재창조하는 것', desc: '불합리하거나 관행적인 규범에 저항하고 나만의 방식을 고안하는 태도', valueKey: 'autonomy', emoji: '🔓' },
    optionB: { title: '규칙은 혼란을 막고 평화를 지키는 방패', desc: '검증된 매뉴얼과 상호 약속을 준수하여 불필요한 마찰을 줄이는 태도', valueKey: 'security', emoji: '📜' }
  },
  {
    id: 'q08', themeId: 'theme_1',
    title: '물질과 소유',
    question: '나에게 더 큰 심리적 풍요를 안겨주는 삶의 형태는?',
    familyTopic: '가족 대화: "짐이 적고 가벼운 미니멀 라이프가 좋나요, 내 취향의 물건들이 꽉 찬 아늑함이 좋나요?"',
    optionA: { title: '가벼운 미니멀리즘', desc: '소유물에 얽매이지 않고いつでも 어디로든 떠날 수 있는 홀가분함', valueKey: 'autonomy', emoji: '🍃' },
    optionB: { title: '풍요로운 비축과 아늑함', desc: '위기 상황에도 끄떡없는 넉넉한 자원과 따뜻하게 채워진 내 공간', valueKey: 'security', emoji: '📦' }
  },
  {
    id: 'q09', themeId: 'theme_1',
    title: '평판과 타인의 시선',
    question: '사회적 평가 앞에서 내가 타협할 수 없는 지점은?',
    familyTopic: '가족 대화: "남들이 조금 이상하게 봐도 내 멋대로 사는 게 좋나요, 남들에게 좋은 사람으로 인정받는 게 좋나요?"',
    optionA: { title: '괴짜로 불릴지언정 진정한 나다움', desc: '세상의 유행이나 타인의 기대와 달라도 내 고유한 색깔을 고수하는 용기', valueKey: 'autonomy', emoji: '🦹' },
    optionB: { title: '신뢰받고 호감 주는 사회적 조화', desc: '이웃과 주변인들에게 신뢰를 주고 원만한 관계를 유지하는 성실함', valueKey: 'security', emoji: '😇' }
  },
  {
    id: 'q10', themeId: 'theme_1',
    title: '삶의 최종 목적지',
    question: '인생의 종착역에서 가장 후회하고 싶지 않은 한 가지는?',
    familyTopic: '가족 대화: "내 뜻대로 못 살아본 게 더 후회될까요, 가족과 주변을 든든히 지켜주지 못한 게 더 후회될까요?"',
    optionA: { title: '"내 뜻대로 살아보지 못했다"는 회한', desc: '남의 기대에 맞추느라 내 잠재력을 시험해보지 못한 채 끝나는 삶의 공포', valueKey: 'autonomy', emoji: '🕊️' },
    optionB: { title: '"소중한 이들을 지켜내지 못했다"는 회한', desc: '위험을 무릅쓰다 가족과 울타리를 위태롭게 만들었던 삶의 공포', valueKey: 'security', emoji: '🛡️' }
  },

  // --- 테마 2: 도전과 평온 (Q11 ~ Q20) ---
  {
    id: 'q11', themeId: 'theme_2',
    title: '에너지의 원천',
    question: '어떤 환경에서 나의 생체 에너지가 가장 솟구치나요?',
    familyTopic: '가족 대화: "가슴이 쿵쾅거리는 새로운 사건이 터질 때 에너지가 나나요, 조용한 숲길을 걸을 때 에너지가 나나요?"',
    optionA: { title: '심장을 뛰게 하는 격변과 긴장', desc: '아드레날린이 분비되고 한 치 앞을 모르는 도전 속에서 살아있음을 느낌', valueKey: 'adventure', emoji: '🔥' },
    optionB: { title: '티끌 하나 없는 고요와 이완', desc: '외부 자극이 멈추고 내면의 호흡이 가지런해지는 순간에 살아있음을 느낌', valueKey: 'peace', emoji: '💧' }
  },
  {
    id: 'q12', themeId: 'theme_2',
    title: '여행의 스타일',
    question: '내 영혼을 다시 태어나게 하는 여행의 순간은?',
    familyTopic: '가족 대화: "거친 정글이나 낯선 오지를 탐험할 때 신나나요, 따뜻한 온천이나 휴양지에서 푹 쉴 때 행복한가요?"',
    optionA: { title: '거친 미지의 오지 탐험', desc: '언어도 통하지 않는 낯선 곳에서 길을 잃고 뜻밖의 기적을 만나는 여정', valueKey: 'adventure', emoji: '🧭' },
    optionB: { title: '오랜 쉼과 치유의 휴식처', desc: '바람 소리, 파도 소리를 들으며 책 한 권과 함께 한없이 멍때리는 여정', valueKey: 'peace', emoji: '🏝️' }
  },
  {
    id: 'q13', themeId: 'theme_2',
    title: '새로운 취미의 문',
    question: '배우고 싶은 취미 활동을 고를 때 내 마음을 끄는 쪽은?',
    familyTopic: '가족 대화: "스릴 넘치는 암벽등반이나 서핑이 끌리나요, 차분한 다도나 수채화 그리기가 끌리나요?"',
    optionA: { title: '한계를 시험하는 익스트림 스포츠', desc: '몸을 한계까지 몰아붙이며 두려움을 극복하는 성취감 (클라이밍, 서핑 등)', valueKey: 'adventure', emoji: '🧗' },
    optionB: { title: '마음을 정돈하는 명상적 예술', desc: '손끝의 감각에 몰입하며 잡념을 비워내는 평화 (도예, 다도, 가드닝 등)', valueKey: 'peace', emoji: '🍵' }
  },
  {
    id: 'q14', themeId: 'theme_2',
    title: '대화의 결',
    question: '사람들과 어울릴 때 어떤 대화가 나를 두근거리게 하나요?',
    familyTopic: '가족 대화: "세상을 뒤흔들 기상천외한 아이디어를 나눌 때 신나나요, 편안한 일상의 온기를 나눌 때 따뜻한가요?"',
    optionA: { title: '기상천외한 혁신과 미래에 대한 격론', desc: '"세상을 바꿀 미친 아이디어"를 밤새 주고받으며 눈이 반짝이는 대화', valueKey: 'adventure', emoji: '💡' },
    optionB: { title: '서로의 마음에 공감하는 다정한 담소', desc: '평가나 경쟁 없이 오늘 하루 느낀 따뜻한 감정과 소소한 감사를 나누는 대화', valueKey: 'peace', emoji: '☕' }
  },
  {
    id: 'q15', themeId: 'theme_2',
    title: '인생의 파도타기',
    question: '내 인생이 한 편의 영화라면 어떤 장르이길 바라나요?',
    familyTopic: '가족 대화: "반전과 모험이 넘치는 어드벤처 영화가 좋나요, 마음이 몽글몽글해지는 잔잔한 힐링 영화가 좋나요?"',
    optionA: { title: '블록버스터 어드벤처 서사시', desc: '수많은 위기와 반전을 극복하고 마침내 신대륙을 발견하는 영웅의 여정', valueKey: 'adventure', emoji: '🎬' },
    optionB: { title: '따뜻한 감동의 리틀 포레스트', desc: '계절의 변화를 음미하며 텃밭의 작물을 가꾸고 맑은 미소를 짓는 힐링 영화', valueKey: 'peace', emoji: '🌱' }
  },
  {
    id: 'q16', themeId: 'theme_2',
    title: '자극의 적정선',
    question: '지루함과 스트레스 중 나에게 더 치명적인 것은?',
    familyTopic: '가족 대화: "너무 심심해서 미칠 것 같은 게 더 괴롭나요, 너무 바쁘고 복잡해서 머리 터질 것 같은 게 더 괴롭나요?"',
    optionA: { title: '변화 없는 정체와 지루함', desc: '아무런 자극 없이 매일 똑같이 굴러가는 삶은 내 영혼을 질식시킨다', valueKey: 'adventure', emoji: '🥱' },
    optionB: { title: '과도한 소음과 지속적인 긴장', desc: '쉴 틈 없이 쫓기는 소음과 갈등은 내 정신과 몸을 갉아먹는다', valueKey: 'peace', emoji: '🤯' }
  },
  {
    id: 'q17', themeId: 'theme_2',
    title: '주말의 풍경',
    question: '주말 이틀이 주어졌을 때 가장 가슴이 충전되는 일정은?',
    familyTopic: '가족 대화: "주말에 안 가본 핫플레이스나 축제를 찾아가는 게 좋나요, 집에서 뒹굴거리며 낮잠 자는 게 좋나요?"',
    optionA: { title: '처음 가보는 낯선 도시의 활기찬 축제', desc: '거리의 소음과 이국적인 맛, 새로운 사람들을 접하며 감각을 깨우기', valueKey: 'adventure', emoji: '🎪' },
    optionB: { title: '새소리만 들리는 조용한 숲속 북스테이', desc: '휴대폰을 꺼두고 따뜻한 이불 속에서 낮잠과 독서에 푹 빠지기', valueKey: 'peace', emoji: '📖' }
  },
  {
    id: 'q18', themeId: 'theme_2',
    title: '인간관계의 폭과 깊이',
    question: '나를 더 행복하게 만드는 사람들과의 관계 맺기는?',
    familyTopic: '가족 대화: "새로운 사람들을 많이 사귀는 파티가 좋나요, 가장 편한 몇 명만 만나는 자리가 좋나요?"',
    optionA: { title: '다양한 분야 사람들과의 다채로운 교류', desc: '새로운 영감을 주는 각계각층의 사람들을 만나며 세계관을 넓히기', valueKey: 'adventure', emoji: '🌐' },
    optionB: { title: '서로를 온전히 아는 소수의 깊은 우정', desc: '말하지 않아도 눈빛만으로 통하는 진실한 몇 사람과의 온전한 교감', valueKey: 'peace', emoji: '🕯️' }
  },
  {
    id: 'q19', themeId: 'theme_2',
    title: '위기 대처 방식',
    question: '예상치 못한 돌발 상황이 닥쳤을 때 내 첫 반응은?',
    familyTopic: '가족 대화: "계획이 틀어지면 오히려 짜릿한 승부욕이 생기나요, 일단 심호흡하고 마음을 가라앉히나요?"',
    optionA: { title: '"재밌겠는데? 한번 부딪혀보자!"', desc: '위기를 오히려 기회로 보고 전투력을 불태우며 돌파구를 찾는 본능', valueKey: 'adventure', emoji: '🥊' },
    optionB: { title: '"차분하게 마음부터 가라앉히자"', desc: '흥분을 가라앉히고 불필요한 피해를 막으며 평정심을 지켜내는 본능', valueKey: 'peace', emoji: '🧘' }
  },
  {
    id: 'q20', themeId: 'theme_2',
    title: '꿈꾸는 은퇴/휴식기',
    question: '모든 의무를 마친 후 내가 보내고 싶은 완벽한 하루는?',
    familyTopic: '가족 대화: "나이 들어서 세계 일주 크루즈를 타고 싶나요, 아담한 정원이 있는 시골집에서 살고 싶나요?"',
    optionA: { title: '끝없는 세계 일주와 새로운 도전', desc: '지구 구석구석을 누비며 끊임없이 신기한 경험을 채워 넣는 삶', valueKey: 'adventure', emoji: '🚢' },
    optionB: { title: '계절의 꽃을 가꾸는 정원사의 일상', desc: '아침 이슬을 맞으며 꽃에 물을 주고 저녁노을을 바라보며 미소 짓는 삶', valueKey: 'peace', emoji: '🌸' }
  },

  // --- 테마 3: 성취와 공헌 (Q21 ~ Q30) ---
  {
    id: 'q21', themeId: 'theme_3',
    title: '성공의 정의',
    question: '나에게 가장 커다란 환희를 안겨주는 성공의 순간은?',
    familyTopic: '가족 대화: "남들이 부러워할 만한 최고의 실력을 인정받을 때가 좋을까요, 어려운 사람의 삶을 바꿔주었을 때가 좋을까요?"',
    optionA: { title: '독보적 탁월함과 실력의 증명', desc: '내 분야에서 최고 수준의 경지에 도달하여 아무도 흉내 낼 수 없는 결과물을 냄', valueKey: 'mastery', emoji: '🏆' },
    optionB: { title: '누군가의 눈물을 닦아준 선한 영향력', desc: '내 작은 손길로 인해 절망하던 이가 다시 희망을 품고 일어서는 모습을 봄', valueKey: 'altruism', emoji: '🤲' }
  },
  {
    id: 'q22', themeId: 'theme_3',
    title: '타인의 칭찬',
    question: '가장 내 가슴을 뭉클하게 만드는 찬사의 문장은?',
    familyTopic: '가족 대화: ""너 진짜 천재다, 엄청 대단해!"라는 칭찬이 좋나요, "너 덕분에 내가 살았어, 정말 고마워"라는 말이 좋나요?"',
    optionA: { title: '"당신은 이 분야의 독보적인 거장입니다"', desc: '나의 피나는 노력과 정교한 전문성이 세상의 인정을 받는 순간', valueKey: 'mastery', emoji: '⭐' },
    optionB: { title: '"당신 덕분에 내 삶이 따뜻해졌습니다"', desc: '나라는 존재가 누군가의 마음에 깊은 위로와 사랑이 되었음을 확인하는 순간', valueKey: 'altruism', emoji: '❤️' }
  },
  {
    id: 'q23', themeId: 'theme_3',
    title: '시간 투자의 우선순위',
    question: '주말 10시간의 여유가 생겼을 때 내가 선택할 프로젝트는?',
    familyTopic: '가족 대화: "내 개인 기술이나 악기를 완벽하게 연습하는 게 좋나요, 유기견 봉사나 이웃 돕기를 하러 가는 게 좋나요?"',
    optionA: { title: '개인 역량의 극한 연마 (Deep Work)', desc: '단 하나의 기술이나 학문을 장인처럼 집요하게 갈고닦는 10시간', valueKey: 'mastery', emoji: '🎻' },
    optionB: { title: '이웃과 사회를 위한 나눔 봉사', desc: '도움이 필요한 곳을 찾아가 땀 흘려 따뜻한 온기를 나누는 10시간', valueKey: 'altruism', emoji: '🤝' }
  },
  {
    id: 'q24', themeId: 'theme_3',
    title: '기억되는 방식',
    question: '먼 훗날 나의 묘비에 새겨지고 싶은 단 하나의 수식어는?',
    familyTopic: '가족 대화: ""완벽한 작품을 남긴 위대한 장인"으로 기억될까요, "세상에 사랑을 베풀고 간 따뜻한 사람"으로 기억될까요?"',
    optionA: { title: '타협하지 않은 완벽주의 장인', desc: '자신의 기준을 한 번도 낮추지 않고 최고의 품질을 세상에 남긴 사람', valueKey: 'mastery', emoji: '🗿' },
    optionB: { title: '조건 없는 사랑을 베푼 은인', desc: '자신의 이익보다 이웃의 행복을 먼저 생각하며 따뜻하게 품어준 사람', valueKey: 'altruism', emoji: '🕊️' }
  },
  {
    id: 'q25', themeId: 'theme_3',
    title: '경쟁과 협력',
    question: '나의 잠재력을 가장 극대화해 주는 상황은?',
    familyTopic: '가족 대화: "강력한 라이벌과 경쟁할 때 실력이 쑥쑥 크나요, 서로 밀어주고 끌어주는 협력 속에서 힘이 나나요?"',
    optionA: { title: '정상에 오르기 위한 선의의 치열한 경쟁', desc: '강력한 라이벌과 기준 높은 환경이 내 숨은 한계를 깨부수어 줌', valueKey: 'mastery', emoji: '⚡' },
    optionB: { title: '누구도 낙오시키지 않는 따뜻한 연대', desc: '서로의 약점을 보완하고 손을 맞잡을 때 기적 같은 시너지가 발휘됨', valueKey: 'altruism', emoji: '🤗' }
  },
  {
    id: 'q26', themeId: 'theme_3',
    title: '책장 속의 영웅',
    question: '위인전을 읽을 때 내 심장을 더 뜨겁게 만든 인물은?',
    familyTopic: '가족 대화: "스티브 잡스나 레오나르도 다빈치처럼 완벽한 천재가 멋지나요, 이태석 신부나 테레사 수녀처럼 헌신한 분이 멋지나요?"',
    optionA: { title: '압도적 기량을 가진 혁신가 / 예술가', desc: '기존의 한계를 뛰어넘어 인류 문명의 수준을 끌어올린 천재들', valueKey: 'mastery', emoji: '🔭' },
    optionB: { title: '자신을 바쳐 타인을 구한 박애주의자', desc: '고통받는 이들의 곁을 지키며 인류애의 숭고함을 보여준 성자들', valueKey: 'altruism', emoji: '🕯️' }
  },
  {
    id: 'q27', themeId: 'theme_3',
    title: '돈을 쓰는 가장 큰 기쁨',
    question: '생각지 못한 1억 원의 상금이 주어졌을 때 가장 가슴 벅찬 용처는?',
    familyTopic: '가족 대화: "나만의 최고급 장비나 연구실을 만드는 게 좋을까요, 도움이 절실한 곳에 기부하는 게 좋을까요?"',
    optionA: { title: '최고의 작업실과 장비 구축', desc: '내 꿈을 완벽하게 구현할 최고급 연구실/작업 공간에 투자하기', valueKey: 'mastery', emoji: '🛠️' },
    optionB: { title: '어려운 이웃을 살리는 기부와 장학금', desc: '꿈을 포기하려던 아이들에게 희망의 사다리를 놓아주기', valueKey: 'altruism', emoji: '🎁' }
  },
  {
    id: 'q28', themeId: 'theme_3',
    title: '가르침의 방식',
    question: '자녀나 후배에게 삶의 지혜를 전수할 때 강조하고 싶은 핵심은?',
    familyTopic: '가족 대화: ""어디서든 최고가 되어라"라고 가르치고 싶나요, "어디서든 약자를 배려하는 사람이 되어라"라고 가르치고 싶나요?"',
    optionA: { title: '"타협하지 말고 최고의 전문성을 갖추어라"', desc: '실력이 있어야 비로소 세상에 당당하게 제 목소리를 낼 수 있다', valueKey: 'mastery', emoji: '🎯' },
    optionB: { title: '"타인의 아픔에 공감할 줄 아는 온기를 품어라"', desc: '아무리 능력이 뛰어나도 따뜻한 인성이 없으면 괴물이 될 뿐이다', valueKey: 'altruism', emoji: '🌱' }
  },
  {
    id: 'q29', themeId: 'theme_3',
    title: '갈등의 딜레마',
    question: '완벽한 결과물을 위해 동료를 엄격하게 몰아붙여야 한다면?',
    familyTopic: '가족 대화: "결과물이 완벽해진다면 사람들에게 엄격해도 될까요, 결과물이 조금 떨어져도 사람 마음을 다치게 하지 않는 게 우선일까요?"',
    optionA: { title: '결과의 완벽성을 위해 기준을 엄격히 고수한다', desc: '순간의 서운함은 지나가지만, 부실한 결과물은 영원히 오점으로 남는다', valueKey: 'mastery', emoji: '📐' },
    optionB: { title: '완벽성을 조금 양보하더라도 사람의 마음을 지킨다', desc: '아무리 위대한 성과도 사람의 마음에 상처를 주면서까지 얻을 가치는 없다', valueKey: 'altruism', emoji: '🫂' }
  },
  {
    id: 'q30', themeId: 'theme_3',
    title: '인생의 보람',
    question: '내가 세상을 떠날 때 지구에 무엇을 남기고 싶나요?',
    familyTopic: '가족 대화: "역사에 남을 명작이나 기술을 남기고 싶나요, 나를 사랑했던 사람들의 따뜻한 미소를 남기고 싶나요?"',
    optionA: { title: '후대에 길이 남을 불멸의 걸작이나 이론', desc: '시대를 초월하여 인류에게 영감을 줄 지적/예술적 유산', valueKey: 'mastery', emoji: '🏛️' },
    optionB: { title: '이 세상의 고통을 조금이라도 줄였다는 안도감', desc: '내가 살았기 때문에 단 한 사람이라도 더 숨쉬기 편해졌다는 위안', valueKey: 'altruism', emoji: '🌍' }
  },

  // --- 테마 4: 지적 탐구와 창작 (Q31 ~ Q40) ---
  {
    id: 'q31', themeId: 'theme_4',
    title: '지적 갈증의 대상',
    question: '나의 뇌세포를 가장 짜릿하게 만드는 배움의 순간은?',
    familyTopic: '가족 대화: "우주의 비밀이나 철학 질문을 파고들 때 재밌나요, 배운 걸로 실제로 쓸모 있는 무언가를 뚝딱 만들 때 재밌나요?"',
    optionA: { title: '세상의 근본 원리를 이해하는 순간', desc: '실용성과 무관하게 "왜 그럴까?"에 대한 진리의 퍼즐이 맞춰지는 희열', valueKey: 'curiosity', emoji: '🌌' },
    optionB: { title: '내 손으로 세상에 없는 물건을 만든 순간', desc: '아이디어가 현실의 제품, 비즈니스, 구체적인 물체로 탄생하는 희열', valueKey: 'impact', emoji: '💡' }
  },
  {
    id: 'q32', themeId: 'theme_4',
    title: '도서관 vs 공방',
    question: '나에게 하루 온종일의 자유가 주어진다면 어디로 향할까요?',
    familyTopic: '가족 대화: "조용한 도서관에서 책을 잔뜩 쌓아두고 읽고 싶나요, 공방에서 공구를 들고 무언가를 만들고 싶나요?"',
    optionA: { title: '천장까지 책이 가득한 고서 도서관', desc: '수백 년 전 석학들의 지혜를 넘나들며 끝없는 사유의 바다에 잠기기', valueKey: 'curiosity', emoji: '📚' },
    optionB: { title: '최신 장비와 재료가 가득한 창작 메이커 스페이스', desc: '3D 프린터, 목공 공구, 레이저 커터로 상상을 실물로 깎아내기', valueKey: 'impact', emoji: '🔨' }
  },
  {
    id: 'q33', themeId: 'theme_4',
    title: '질문과 해답',
    question: '나를 더 성숙하게 만드는 과정은 무엇인가요?',
    familyTopic: '가족 대화: "정답 없는 깊은 질문을 던질 때 멋진가요, 현실의 복잡한 문제를 끝내 해결할 때 멋진가요?"',
    optionA: { title: '본질을 찌르는 심오한 질문을 던지는 것', desc: '남들이 당연하게 여기는 것에 의문을 품고 생각의 지평을 넓히기', valueKey: 'curiosity', emoji: '❓' },
    optionB: { title: '현실의 문제를 구체적으로 해결해 치우는 것', desc: '복잡한 탁상공론을 끝내고 실질적으로 돌아가는 시스템을 구축하기', valueKey: 'impact', emoji: '⚙️' }
  },
  {
    id: 'q34', themeId: 'theme_4',
    title: '지식의 가치',
    question: '내가 생각하는 진정한 지식의 쓸모는?',
    familyTopic: '가족 대화: "지식은 그 자체로 영혼을 살찌우는 걸까요, 현실을 바꾸는 도구일 때 가치가 있는 걸까요?"',
    optionA: { title: '무지를 깨닫고 세계관을 확장하는 경외감', desc: '내가 얼마나 작은 존재인지 깨닫고 우주와 인간을 깊이 이해하는 즐거움', valueKey: 'curiosity', emoji: '🔭' },
    optionB: { title: '실질적인 변화를 이끌어내는 힘과 실행력', desc: '지식이 책 속에 갇히지 않고 사람들의 삶과 비즈니스를 개선하는 효용', valueKey: 'impact', emoji: '⚡' }
  },
  {
    id: 'q35', themeId: 'theme_4',
    title: '창작의 동기',
    question: '무언가를 창작할 때 나를 가장 몰입하게 만드는 연료는?',
    familyTopic: '가족 대화: "나 혼자만의 순수한 호기심과 재미로 만들 때가 좋나요, 많은 사람들이 열광하고 써줄 때가 좋나요?"',
    optionA: { title: '나만의 순수한 호기심과 실험 정신', desc: '세상이 알아주지 않아도 내가 알고 싶고 시도해보고 싶은 미지의 탐색', valueKey: 'curiosity', emoji: '🧪' },
    optionB: { title: '시장과 사람들의 뜨거운 반응과 피드백', desc: '많은 사람들이 내 결과물을 사용하고 실질적인 감동과 변화를 겪는 모습', valueKey: 'impact', emoji: '📣' }
  },
  {
    id: 'q36', themeId: 'theme_4',
    title: '예술과 디자인',
    question: '어떤 예술 작품을 마주했을 때 더 가슴이 벅차오르나요?',
    familyTopic: '가족 대화: "난해하지만 깊은 생각을 하게 만드는 미술품이 좋나요, 일상에서 너무 편리하고 아름다운 제품이 좋나요?"',
    optionA: { title: '철학적 질문을 던지는 심오한 순수 예술', desc: '쉽게 이해되지 않지만 볼수록 묵직한 내면의 사유를 흔드는 작품', valueKey: 'curiosity', emoji: '🎨' },
    optionB: { title: '수백만 명의 일상을 혁신한 미려한 디자인 제품', desc: '아름다움과 실용성이 완벽히 결합되어 세상의 표준을 바꾼 혁신', valueKey: 'impact', emoji: '📱' }
  },
  {
    id: 'q37', themeId: 'theme_4',
    title: '새로운 기술을 대하는 자세',
    question: '인공지능(AI) 같은 신기술이 등장했을 때 나의 첫 충동은?',
    familyTopic: '가족 대화: "그 기술의 수학적 원리나 철학적 의미가 먼저 궁금한가요, 이걸로 어떤 돈이나 앱을 만들 수 있을지가 먼저 떠오르나요?"',
    optionA: { title: '"이 알고리즘은 대체 어떻게 의식을 모방하는 걸까?"', desc: '기저에 깔린 지능의 본질과 인간 존재의 의미를 파고드는 호기심', valueKey: 'curiosity', emoji: '🤖' },
    optionB: { title: '"이걸 활용해서 당장 어떤 서비스를 런칭해볼까?"', desc: '기술을 무기 삼아 시장의 빈틈을 파고들고 가치를 창출하는 실행력', valueKey: 'impact', emoji: '🚀' }
  },
  {
    id: 'q38', themeId: 'theme_4',
    title: '대화의 상대',
    question: '단 한 명의 역사적 인물과 식사할 수 있다면 누구를 택할까요?',
    familyTopic: '가족 대화: "우주의 비밀을 논하는 소크라테스나 아인슈타인이 좋나요, 현실을 뒤바꾼 벤저민 프랭클린이나 헨리 포드가 좋나요?"',
    optionA: { title: '소크라테스나 아인슈타인 같은 사상가', desc: '인간의 한계를 넘어선 지적 통찰과 우주의 신비에 대해 밤샘 대화', valueKey: 'curiosity', emoji: '👴' },
    optionB: { title: '거대한 산업과 제국을 일군 실천가', desc: '어떻게 비전을 현실로 옮기고 수많은 사람을 움직였는지 실행 전략 배우기', valueKey: 'impact', emoji: '👔' }
  },
  {
    id: 'q39', themeId: 'theme_4',
    title: '취미 생활의 결실',
    question: '취미 생활을 할 때 내가 가장 뿌듯한 엔딩은?',
    familyTopic: '가족 대화: "취미를 통해 지식과 안목이 엄청 깊어지는 게 좋나요, 만든 결과물을 지인들에게 선물하거나 판매해보는 게 좋나요?"',
    optionA: { title: '그 분야의 해박한 지식과 독보적 안목', desc: '아무도 보지 못하는 미세한 차이를 음미하고 식별할 수 있는 심미안', valueKey: 'curiosity', emoji: '🧐' },
    optionB: { title: '실제로 완성하여 유용하게 쓰이는 작품', desc: '가족과 친구들이 감탄하며 실생활에서 요긴하게 사용하는 실물 결과물', valueKey: 'impact', emoji: '🎁' }
  },
  {
    id: 'q40', themeId: 'theme_4',
    title: '삶의 유산',
    question: '다음 세대에 물려주고 싶은 나의 가장 소중한 자산은?',
    familyTopic: '가족 대화: "세상을 경이롭게 바라보는 호기심의 눈동자를 물려줄까요, 거친 세상에서 무언가를 일궈내는 실행력을 물려줄까요?"',
    optionA: { title: '평생 시들지 않는 경이감과 호기심의 눈', desc: '어떤 상황에서도 배움을 멈추지 않고 삶의 아름다움을 발견하는 영혼', valueKey: 'curiosity', emoji: '✨' },
    optionB: { title: '맨땅에서 꽃을 피워내는 불굴의 실행력', desc: '생각에만 머물지 않고 현실을 변화시키며 성취를 일구는 행동력', valueKey: 'impact', emoji: '🏔️' }
  },

  // --- 테마 5: 놀이와 활력 (Q41 ~ Q50) ---
  {
    id: 'q41', themeId: 'theme_5',
    title: '놀이의 본질 (호모 루덴스)',
    question: '나에게 가장 완벽한 "놀이(Play)"의 감각은 어떤 것인가요?',
    familyTopic: '가족 대화: "승패 없이 까르르 웃으며 마음대로 노는 게 좋나요, 규칙이 있고 아슬아슬하게 승부를 겨루는 게임이 좋나요?"',
    optionA: { title: '규칙도 승패도 없는 순수한 무목적의 유희', desc: '어린아이처럼 모래성을 쌓고 부수며 아무 이유 없이 웃음 짓는 해방감', valueKey: 'free_play', emoji: '🎈' },
    optionB: { title: '치밀한 전략과 승패가 있는 몰입의 두뇌 게임', desc: '정교한 룰 안에서 수싸움을 벌이고 한 끗 차이로 승리하는 짜릿함', valueKey: 'rule_play', emoji: '♟️' }
  },
  {
    id: 'q42', themeId: 'theme_5',
    title: '몸으로 놀기 vs 머리로 놀기',
    question: '주말 오후, 스트레스를 날려버리는 최고의 놀이 방식은?',
    familyTopic: '가족 대화: "땀 뻘뻘 흘리며 뛰노는 운동이 신나나요, 보드게임이나 방탈출처럼 머리 쓰는 놀이가 신나나요?"',
    optionA: { title: '땀 뻘뻘 흘리는 신체적 뜀박질과 몸놀이', desc: '베개 싸움, 물총 싸움, 달리기, 댄스 배틀처럼 온몸의 감각을 해방하기', valueKey: 'free_play', emoji: '🏃' },
    optionB: { title: '추리와 반전이 있는 실내 방탈출과 보드게임', desc: '단서를 조합하고 비밀 코드를 풀며 지적 카타르시스를 맛보기', valueKey: 'rule_play', emoji: '🧩' }
  },
  {
    id: 'q43', themeId: 'theme_5',
    title: '가족 파티의 형태',
    question: '우리 가족만의 유쾌한 명절/기념일 놀이를 기획한다면?',
    familyTopic: '가족 대화: "엉뚱한 분장 쇼와 노래자랑이 재밌을까요, 온 가족 탁구 대회나 부루마블 챔피언십이 재밌을까요?"',
    optionA: { title: '엉뚱한 코스튬 분장 쇼와 즉흥 연극', desc: '서로의 우스꽝스러운 모습을 보며 배꼽 잡고 웃는 무제한 창의 놀이', valueKey: 'free_play', emoji: '🎭' },
    optionB: { title: '트로피와 벌칙이 걸린 온 가족 올림픽 토너먼트', desc: '탁구, 제기차기, 윷놀이 등 정정당당하게 챔피언을 가리는 긴장감', valueKey: 'rule_play', emoji: '🥇' }
  },
  {
    id: 'q44', themeId: 'theme_5',
    title: '유머와 웃음의 코드',
    question: '나를 가장 빵 터지게 만드는 유머의 스타일은?',
    familyTopic: '가족 대화: "예측 불가능하고 몸개그가 섞인 엉뚱함이 웃기나요, 치밀하게 계산된 말장난과 풍자가 웃기나요?"',
    optionA: { title: '아이들의 천진난만한 엉뚱함과 슬랩스틱', desc: '계산되지 않은 순수함에서 터져 나오는 무장해제 웃음', valueKey: 'free_play', emoji: '🤣' },
    optionB: { title: '허를 찌르는 고급 위트와 반전의 풍자', desc: '상황을 뒤집는 날카로운 지적 유머와 타이밍의 미학', valueKey: 'rule_play', emoji: '😏' }
  },
  {
    id: 'q45', themeId: 'theme_5',
    title: '장난감과 놀잇감',
    question: '방 한구석에 두고 싶은 나의 최애 놀이 도구는?',
    familyTopic: '가족 대화: "형태가 정해지지 않은 레고나 찰흙이 좋나요, 규칙이 명확한 플레이스테이션 콘솔 게임이 좋나요?"',
    optionA: { title: '정답이 없는 자유 블록(레고)과 캔버스', desc: '설명서 없이 내 상상대로 무엇이든 조립하고 부수는 무한 놀이', valueKey: 'free_play', emoji: '🧱' },
    optionB: { title: '정교한 퀘스트와 레벨업이 있는 비디오 콘솔', desc: '목표를 격파하고 장비를 업그레이드하며 스테이지를 클리어하는 쾌감', valueKey: 'rule_play', emoji: '🎮' }
  },
  {
    id: 'q46', themeId: 'theme_5',
    title: '야외에서의 놀이',
    question: '숲이나 바닷가에 갔을 때 나를 사로잡는 행동은?',
    familyTopic: '가족 대화: "파도에 발 담그고 조개껍데기 줍는 게 좋나요, 가족 대항 모래성 뺏기나 축구 한판이 좋나요?"',
    optionA: { title: '파도와 숨바꼭질하고 조개껍데기 줍기', desc: '자연이 주는 우연한 선물에 마음을 빼앗기는 평화로운 몰입', valueKey: 'free_play', emoji: '🐚' },
    optionB: { title: '편을 갈라 벌이는 비치발리볼과 모래성 깃발 게임', desc: '모두가 한마음으로 응원하며 승리의 세리머니를 외치는 순간', valueKey: 'rule_play', emoji: '🏐' }
  },
  {
    id: 'q47', themeId: 'theme_5',
    title: '놀이와 일상의 경계',
    question: '지루한 집안일(청소, 설거지)을 대할 때 나의 유쾌한 비법은?',
    familyTopic: '가족 대화: "신나는 음악 틀고 춤추며 청소하는 게 좋나요, 15분 타이머 맞춰두고 스피드 챌린지 하는 게 좋나요?"',
    optionA: { title: '좋아하는 음악을 크게 틀고 리듬 타며 춤추기', desc: '의무를 페스티벌로 바꾸어버리는 마법 같은 유쾌함', valueKey: 'free_play', emoji: '💃' },
    optionB: { title: '스톱워치를 켜고 기록 단축 퀘스트 깨기', desc: '자신과의 기록 싸움을 벌이며 보상을 얻어내는 게임화(Gamification)', valueKey: 'rule_play', emoji: '⏱️' }
  },
  {
    id: 'q48', themeId: 'theme_5',
    title: '놀이 파트너',
    question: '놀 때 나를 가장 편안하고 신나게 만들어주는 사람은?',
    familyTopic: '가족 대화: "아무 생각 없이 같이 바보짓 해주는 친구가 좋나요, 룰을 잘 알고 티키타카가 되는 든든한 파트너가 좋나요?"',
    optionA: { title: '체면 차리지 않고 함께 망가져 주는 친구', desc: '나이와 신분을 잊고 어린 시절로 돌아가 동심을 나눌 수 있는 사람', valueKey: 'free_play', emoji: '🤪' },
    optionB: { title: '게임 매너가 좋고 실력이 팽팽한 라이벌', desc: '서로를 긴장시키며 최고의 실력을 이끌어내 주는 멋진 플레이어', valueKey: 'rule_play', emoji: '🤺' }
  },
  {
    id: 'q49', themeId: 'theme_5',
    title: '나이 듦과 놀이',
    question: '어른이 되어서도 절대 잃어버리고 싶지 않은 마음은?',
    familyTopic: '가족 대화: "사소한 것에도 까르르 웃는 순수한 동심이 소중할까요, 인생의 난관을 유쾌하게 게임처럼 푸는 지혜가 소중할까요?"',
    optionA: { title: '낙엽 굴러가는 소리에도 웃음 짓는 천진함', desc: '세상의 냉소에 물들지 않고 매일 경이로움을 발견하는 아이의 마음', valueKey: 'free_play', emoji: '🎠' },
    optionB: { title: '어떤 역경도 유쾌한 도전 과제로 넘기는 위트', desc: '삶을 심각한 비극이 아닌 흥미진진한 탐험 게임으로 바라보는 여유', valueKey: 'rule_play', emoji: '🎩' }
  },
  {
    id: 'q50', themeId: 'theme_5',
    title: '인생이라는 거대한 놀이터',
    question: '생의 마지막 순간, 내 삶을 단 한마디로 요약한다면?',
    familyTopic: '가족 대화: ""정말 신나게 놀다 간다!"가 좋을까요, "최선을 다해 멋진 게임 한판 잘 치렀다!"가 좋을까요?"',
    optionA: { title: '"아, 지구별 소풍 정말 눈부시게 잘 놀다 간다!"', desc: '그 어떤 짐도 남기지 않고 순수한 기쁨으로 삶을 노래했던 영혼', valueKey: 'free_play', emoji: '🌌' },
    optionB: { title: '"후회 없이 명승부를 펼친 최고의 한판 승부였다!"', desc: '자신에게 주어진 패를 가지고 끝까지 지혜롭게 인생을 경영한 승부사', valueKey: 'rule_play', emoji: '👑' }
  }
];

// --- 6대 영역(직업, 공부, 취미, 놀이, 여행지, 생활활동) 추천 데이터베이스 ---
const SIX_DIMENSIONS_RECOMMENDATIONS = {
  autonomy: {
    name: '자율과 독립',
    color: 'amber',
    career: {
      adult: '1인 지식 창업가, 독립 연구자, 프리랜서 전문 컨설턴트, 1인 출판가 및 칼럼니스트 (누구의 눈치도 보지 않고 내 속도와 리듬으로 일하는 독자적 생계 모델)',
      child: '프로젝트 기반 메이커, 인디 게임 기획자, 독립 탐험가 (스스로 규칙을 정하고 주도적으로 퀘스트를 완수하는 역할)'
    },
    study: '원하는 주제를 파고드는 자율 독서 프로젝트, 1인 AI 도구 활용법 및 코딩, 삶의 철학적 사유 글쓰기',
    hobby: '나 홀로 트레킹, 1인 목공예, 필름 카메라로 거리 기록하기, 조용한 나만의 서재 꾸미기',
    play: '혼자만의 규칙으로 만드는 자유 블록 조립, 상상 속 세계관 지도 그리기, 나만의 비밀 암호 만들기',
    travel: '제주도 한 달 살기 조용한 시골 마을, 한적한 산속 오두막 리트릿, 발길 닿는 대로 떠나는 무계획 자유 여행',
    life: '아침 기상 후 1시간 스마트폰 없는 "나만의 고요 시간(Solitude Hour)", 하루 계획을 스스로 주도하여 작성하기'
  },
  security: {
    name: '안정과 유대',
    color: 'emerald',
    career: {
      adult: '협동조합 운영자, 공공 가치 기반 커뮤니티 매니저, 지속가능한 패밀리 비즈니스, 신뢰 기반 가족 상담사',
      child: '팀을 조화롭게 이끄는 캡틴, 환경 보호 연구원, 가족과 친구를 지키는 안전 설계자'
    },
    study: '가족 경제학 및 자산 관리, 심리학 기반의 따뜻한 비폭력 대화법, 생태계와 공존에 대한 과학 공부',
    hobby: '온 가족 함께하는 보드게임 밤, 텃밭 가꾸기와 건강 요리 연구, 패밀리 합창 및 악기 앙상블',
    play: '온 가족이 둘러앉아 하는 부루마블/루미큐브 대회, 윷놀이 토너먼트, 가족 요리 대항전',
    travel: '편안하고 자연이 풍성한 국립자연휴양림, 따뜻한 온천 힐링 여행, 사계절 추억이 깃든 전통 한옥 스테이',
    life: '저녁 식탁에서 "오늘 서로에게 고마웠던 점 1가지" 나누기, 주말 온 가족 대청소 후 따뜻한 차 한잔'
  },
  adventure: {
    name: '도전과 창조',
    color: 'orange',
    career: {
      adult: '새로운 영역의 스타트업 창업, 에이전시 크리에이티브 디렉터, 여행 작가, 미래 기술 트렌드 큐레이터',
      child: '우주/해양 탐험가, 신기술 로봇 연구원, 미지의 세계를 그리는 SF 웹툰 작가'
    },
    study: '생성형 AI로 상상을 바로 영상/앱으로 만들기, 미래 우주과학 및 천체물리학, 새로운 외국어 배우기',
    hobby: '볼더링 클라이밍, 바다 서핑, 낯선 악기 즉흥 연주, 매주 가보지 않은 낯선 길로 산책하기',
    play: '온 가족 실내 암벽등반 배틀, 물총 서바이벌 게임, 스마트폰 없는 도심 런닝맨 미션 투어',
    travel: '몽골 대초원 은하수 텐트 투어, 지리산 천왕봉 일출 트레킹, 낯선 문화가 숨 쉬는 이색 예술 마을',
    life: '매주 주말 "처음 해보는 일 1가지 도전하기(새로운 요리, 새로운 길, 새로운 운동)", 아침 활력 찬물 세안'
  },
  peace: {
    name: '평온과 조화',
    color: 'teal',
    career: {
      adult: '티(Tea) 소믈리에 및 명상 센터 기획자, 식물 큐레이터, 작은 동네 책방지기, 조용한 숲 해설가',
      child: '동물 행동 교감 전문가, 자연 생태 일러스트레이터, 잔잔한 감성을 전하는 작곡가'
    },
    study: '동양 고전과 노장 사상, 숲과 식물의 대화(식물학), 뇌를 쉬게 하는 마음챙김 명상 과학',
    hobby: '식물 분재와 분갈이, 다도(Tea Ceremony), 수채화 어반 스케치, 새소리 들으며 숲 멍때리기',
    play: '바람 소리 들으며 보물찾기 놀이, 조약돌 탑 쌓기 시합, 조용한 숲속 소리 채집 놀이',
    travel: '오대산 월정사 전나무 숲길 템플스테이, 청정한 담양 대나무 숲, 고즈넉한 호숫가 쉼터',
    life: '기상 직후 따뜻한 차 한 잔 마시며 창밖 바라보기, 밤 10시 이후 모든 블루라이트 끄고 촛불 켜기'
  },
  altruism: {
    name: '선한 영향력과 나눔',
    color: 'rose',
    career: {
      adult: '사회적 기업가, 라이프 코치 및 청소년 멘토, 비영리 임팩트 파트너, 치유형 정원/공간 기획자',
      child: '소외된 사람을 돕는 따뜻한 발명가, 동물 복지 수의사, 세상을 맑게 하는 환경 운동가'
    },
    study: '생명 윤리와 도덕 철학, 공감과 비폭력 대화법(NVC), 세상을 바꾼 위인들의 생애 연구',
    hobby: '유기견 돌봄 봉사, 이웃을 위한 따뜻한 베이킹 나눔, 환경 정화 플로깅(Plogging)',
    play: '가족 마니또 비밀 미션 게임, 이웃을 위한 서프라이즈 선물 배달 놀이, 칭찬 릴레이 카드 게임',
    travel: '공정 여행(Fair Travel), 역사와 치유의 의미가 담긴 평화의 길 순례, 시골 마을 일손 돕기 여행',
    life: '하루에 한 번 누군가에게 진심 어린 칭찬 문자 보내기, 매일 아침 "오늘 내가 도울 수 있는 일" 떠올리기'
  },
  mastery: {
    name: '전문성과 탁월함',
    color: 'indigo',
    career: {
      adult: '독보적 전문 기술 장인(Craftsman), 심층 데이터 분석가, 시니어 아키텍트, 전문 칼럼니스트 및 석학',
      child: '수학/과학 난제 해결사, 세계 최고 알고리즘 개발자, 완벽한 연주를 해내는 클래식 음악가'
    },
    study: '한 분야의 클래식 바이블 파고들기, 수학적 사고력 훈련, 고난도 전문 자격 및 논문 분석',
    hobby: '정밀 프라모델/가구 제작, 가죽 공예의 섬세한 스티치, 체스/바둑의 수읽기 연구',
    play: '가족 체스/장기 챔피언십, 정밀 도미노 쓰러뜨리기 챌린지, 입체 퍼즐 조립 대결',
    travel: '세계적 박물관/미술관 도슨트 투어, 유서 깊은 천년 고도의 건축 기행, 장인의 공방 탐방',
    life: '매일 1시간 "단 하나의 기술을 극한으로 연마하는 딥 워크(Deep Work)", 나의 숙련도 일지 기록'
  },
  curiosity: {
    name: '지적 탐구와 진실',
    color: 'sky',
    career: {
      adult: '기초과학 및 인문학 연구자, 다큐멘터리 기획자, 미지의 문제를 탐색하는 사상가, 철학 아카데미 운영',
      child: '자연사 박물관 큐레이터, 미생물 연구자, 고고학 유물 발굴가'
    },
    study: '우주론과 양자역학 교양서 독파, 인류의 기원을 찾는 인류학, 심오한 질문 던지기 훈련',
    hobby: '천체 망원경으로 달과 행성 관찰하기, 돋보기 들고 곤충/이끼 관찰, 헌책방 보물찾기',
    play: '방구석 과학 수사대 추리 게임, 돋보기 보물찾기 탐험, 상식 골든벨 퀴즈 대결',
    travel: '국립 과천과학관 및 천문대 캠핑, 공룡 화석 발굴지 탐방, 유네스코 세계지질공원',
    life: '매일 밤 "오늘 새롭게 알게 된 경이로운 사실 1가지" 메모하기, 물음표 노트 쓰기'
  },
  impact: {
    name: '실천적 영향력과 성취',
    color: 'violet',
    career: {
      adult: '임팩트 비즈니스 프로덕트 오너, 실물 브랜드 런칭가, 대규모 프로젝트 총괄 리더, 실전 투자자',
      child: '학교 문제를 해결하는 학생회 리더, 펀딩을 통해 상품을 만드는 청소년 창업가'
    },
    study: '린 스타트업과 프로덕트 디자인, 행동경제학 및 마케팅 심리학, 설득력 있는 프레젠테이션',
    hobby: '나만의 제품 3D 프린팅으로 출력하기, 가죽 소품 만들어 플리마켓 판매해보기, 달리기 마라톤 완주',
    play: '가족 모의 투자 대회, 당근마켓 물건 판매 미션, 1시간 안에 맛있는 신메뉴 개발하기 배틀',
    travel: '활력 넘치는 글로벌 혁신 도시 탐방, 치열한 산업 현장 견학, 에너지가 솟구치는 대도시 투어',
    life: '매주 일요일 저녁 한 주간의 "눈에 보이는 성과 3가지" 점검 및 다음 주 핵심 미션 수립'
  },
  free_play: {
    name: '순수한 유희와 동심',
    color: 'yellow',
    career: {
      adult: '놀이 치료사, 창의적 놀이터 디자이너, 장난감/애니메이션 스토리 작가, 테마파크 크리에이티브',
      child: '상상력 천재 만화가, 창의적 놀이 발명가, 무대를 즐기는 만능 엔터테이너'
    },
    study: '놀이 인류학(호모 루덴스), 즉흥 연기 및 연극 워크숍, 아이들의 발달 심리학',
    hobby: '클레이 점토 공예, 레고 디오라마 제작, 즉흥 피아노 연주, 만화 일기 그리기',
    play: '베개 싸움 배틀, 온 가족 즉흥 댄스 파티, 거실 캠핑과 그림자 연극 놀이',
    travel: '동화 속 마을 같은 테마파크, 모래사장이 끝없이 펼쳐진 바닷가, 자연 생태 놀이터',
    life: '하루 한 번 어린아이처럼 소리 내어 크게 웃기, 온 가족 하이파이브 루틴'
  },
  rule_play: {
    name: '전략적 승부와 지적 유희',
    color: 'cyan',
    career: {
      adult: '게임 밸런스 디자이너, 전략 컨설턴트, 프로 e스포츠 디렉터, 행동경제학 분석가',
      child: '전략 시뮬레이션 게이머, 체스 그랜드마스터, 빅데이터 퍼즐 분석가'
    },
    study: '게임 이론(Game Theory), 수학적 확률론, 역사 속 명장들의 군사 전략학',
    hobby: '고난도 유로 보드게임 연구, 체스 수읽기 훈련, 방탈출 수수께끼 풀기',
    play: '카탄/스플렌더 보드게임 리그전, 가족 암기 퀴즈 배틀, 스피드 핑퐁 매치',
    travel: '세계 체스 챔피언십 개최 도시, 고대 미로 유적지 탐방, 첨단 인터랙티브 게임 박물관',
    life: '주간 "나만의 작은 퀘스트 3개" 설정하고 완료 시 스스로에게 보상 주기'
  }
};
