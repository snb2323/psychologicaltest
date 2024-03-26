import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const setvh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setvh();
    function onResize() {
      setvh();
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);

    };
  }, []);

  const [page, setpage] = useState(0);

  const qalist = [
    {
      q: '가장 좋아하는 계절은?',
      a: [
        { type: 'E', text: '봄', nextPage: 2 },
        { type: 'E', text: '여름', nextPage: 2 },
        { type: 'F', text: '가을', nextPage: 2 },
        { type: 'F', text: '겨울', nextPage: 2 },
      ]
    },
    {
      q: '좋아하는 음식 스타일은?',
      a: [
        { type: 'E', text: '한식', nextPage: 3 },
        { type: 'E', text: '양식', nextPage: 3 },
        { type: 'F', text: '중식', nextPage: 3 },
        { type: 'F', text: '일식', nextPage: 3 },
      ]
    },
    {
      q: '여행할 때 선호하는 활동은?',
      a: [
        { type: 'E', text: '자연 속 산책', nextPage: 4 },
        { type: 'E', text: '문화 유적지 탐방', nextPage: 4 },
        { type: 'F', text: '음식 체험', nextPage: 4 },
        { type: 'F', text: '스포츠 및 액티비티', nextPage: 4 },
      ]
    },
    {
      q: '가장 중요하게 생각하는 여행 요소는?',
      a: [
        { type: '', text: '자유로움과 유동성', nextPage: 5 },
        { type: '', text: '안전과 편의성', nextPage: 5 },
        { type: '', text: '새로운 문화와 경험', nextPage: 5 },
        { type: '', text: '휴식과 여유', nextPage: 5 },
      ]
    },
    {
      q: '선호하는 여행 동반자는?',
      a: [
        { type: 'E', text: '친구/연인', nextPage: 6 },
        { type: 'E', text: '가족', nextPage: 6 },
        { type: 'F', text: '혼자', nextPage: 6 },
        { type: 'F', text: '그룹/단체', nextPage: 6 },
      ]
    },
    {
      q: '여행지에서 가장 중요하게 생각하는 숙박 시설은?',
      a: [
        { type: 'E', text: '호텔', nextPage: 7 },
        { type: 'E', text: '에어비앤비/홈스테이', nextPage: 7 },
        { type: 'F', text: '리조트/풀빌라', nextPage: 7 },
        { type: 'F', text: '게스트하우스/호스텔', nextPage: 7 },
      ]
    },
    {
      q: '여행을 계획할 때 주로 참고하는 정보는?',
      a: [
        { type: 'E', text: '여행 블로그/사이트', nextPage: 8 },
        { type: 'E', text: '여행 서적/가이드북', nextPage: 8 },
        { type: 'F', text: 'SNS/소셜 미디어', nextPage: 8 },
        { type: 'F', text: '친구/지인의 추천', nextPage: 8 },
      ]
    },
    {
      q: '여행 중 가장 좋아하는 활동은?',
      a: [
        { type: 'E', text: '맛집 탐방', nextPage: 9 },
        { type: 'E', text: '자연 속 힐링', nextPage: 9 },
        { type: 'F', text: '쇼핑과 시장 탐방', nextPage: 9 },
        { type: 'F', text: '명소나 유적지 관광', nextPage: 9 },
      ]
    },
    {
      q: '여행 후 가장 소중한 것은?',
      a: [
        { type: 'E', text: '새로운 경험과 추억', nextPage: 10 },
        { type: 'E', text: '사진과 동영상', nextPage: 10 },
        { type: 'F', text: '지역 특산물과 선물', nextPage: 10 },
        { type: 'F', text: '재충전된 에너지', nextPage: 10 },
      ]
    },
    {
      q: '다음 여행지로 가고 싶은 국가는?',
      a: [
        { type: 'E', text: '이탈리아', nextPage: 11 },
        { type: 'E', text: '태국', nextPage: 11 },
        { type: 'F', text: '캐나다', nextPage: 11 },
        { type: 'F', text: '뉴질랜드', nextPage: 11 },
      ]
    },
    {
      q: '여행지를 선택할 때 가장 중요한 기준은?',
      a: [
        { type: 'E', text: '비용과 경비', nextPage: 12 },
        { type: 'E', text: '여행 기간과 계획', nextPage: 12 },
        { type: 'F', text: '여행지의 특색과 매력', nextPage: 12 },
        { type: 'F', text: '기후와 계절', nextPage: 12 },
      ]
    },
    {
      q: '여행지에서 주로 찍는 사진 스타일은?',
      a: [
        { type: 'E', text: '풍경 사진', nextPage: 13 },
        { type: 'E', text: '음식 사진', nextPage: 13 },
        { type: 'F', text: '셀피/인물 사진', nextPage: 13 },
        { type: 'F', text: '흥미로운 아티스트 사진', nextPage: 13 },
      ]
    },
    {
      q: '여행 중 빠질 수 없는 아이템은?',
      a: [
        { type: 'E', text: '카메라/스마트폰', nextPage: 14 },
        {
          type: 'E', text: '여행 가이드', nextPage: 14
        },
      ]
    }
  ]
  const handleAnswerClick = (nextPage) => {
    if (nextPage) {
      setpage(nextPage);
    }
  };

  // 총합을 계산하는 함수
  const calculateTotal = (answers) => {
    let total = 0;
    answers.forEach(answer => {
      if (answer.type === 'T') total += 2; // 'T' 타입 답변은 2점
      else if (answer.type === 'E') total += 1; // 'E' 타입 답변은 1점
    });
    return total;
  };

  // 총합에 따른 여행지 추천 함수
  const recommendDestination = (totalE, totalF) => {
    const totalScore = totalE * 1 + totalF * 0; // 'F' 타입 응답은 1.8점, 'E' 타입 응답은 1.2점 부여


    if (totalScore >= 16) return '유럽 - 프랑스 파리';
    else if (totalScore >= 12) return '아시아 - 일본 도쿄';


    else if (totalScore >= 9) return '북미 - 미국 뉴욕';


    else if (totalScore >= 6) return '남미 - 브라질 리오 데 자네이루';
    else return '오세아니아 - 호주 시드니'
  }

  // 결과 페이지 컴포넌트
  const ResultPage = ({ answers }) => {
    const totalScore = calculateTotal(answers);
    const recommendedDestination = recommendDestination(totalScore);

    return (
      <div>
        <h2>테스트 결과</h2>
        <p>총합: {totalScore}</p>
        <p>당신에게 추천하는 여행지: {recommendedDestination}</p>
      </div>
    );
  };

  return (
    <div className='mbtilayout' >
      {page === 0 ?
        <div className='startlayout'>
          <div className='startlogo'>
            <div>나한테 어울리는 여행지는 ?</div>
            <div>▼</div>
          </div>
          <div className='startbtn' onClick={() => setpage(1)}>테스트 시작하기</div>
        </div>
        : page <= qalist.length ?
          <div className='qalayout'>
            <div className='ttitle'>
              <div>나한테 어울리는 여행지는 ?</div>
              <div>{`${page} / ${qalist.length}`}</div>
            </div>
            {qalist.map((qa, i) => (
              <div className='qalist' style={{ display: page === i + 1 ? 'flex' : 'none' }}>
                <div className='qaitem'>
                  <div className='profile'>
                    <div />
                    <div />
                  </div>
                  <div>
                    <div className='question'>{qa.q}</div>
                  </div>
                  <div className='answers'>
                    {qa.a.map((answer, index) => (
                      <div className='answer' key={index} onClick={() => handleAnswerClick(answer.nextPage)}>
                        {answer.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          :
          <ResultPage answers={qalist.flatMap(qa => qa.a)} /> // 결과 페이지 렌더링
      }
    </div >
  );
}

export default App;
