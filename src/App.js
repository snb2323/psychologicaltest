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
        { type: '', text: '봄', nextPage: 2 },
        { type: '', text: '여름', nextPage: 2 },
        { type: '', text: '가을', nextPage: 2 },
        { type: '', text: '겨울', nextPage: 2 },
      ]
    },
    {
      q: '질문 2',
      a: [
        { type: '', text: '답변 2-1', nextPage: 3 },
        { type: '', text: '답변 2-2', nextPage: 3 }
      ]
    },
    {
      q: '테스트 끝',
      a: [
        { type: '', text: '결과보러가기' }
      ]
    }
    // 추가 질문 및 답변은 이어서 계속됩니다.
  ];

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
  const recommendDestination = (total) => {
    if (total >= 8) return '유럽 - 프랑스 파리';
    else if (total >= 6) return '아시아 - 일본 도쿄';
    else if (total >= 4) return '남미 - 브라질 리오 데 자네이루';
    else return '오세아니아 - 호주 시드니';
  };

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
    <div className='mbtilayout'>
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
    </div>
  );
}

export default App;
