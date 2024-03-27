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

  const qalist = [
    {
      q: '가장 좋아하는 계절은?',
      a: [
        { type: 'a', text: '봄', nextPage: 2 },
        { type: 'b', text: '여름', nextPage: 2 },
        { type: 'c', text: '가을', nextPage: 2 },
        { type: 'd', text: '겨울', nextPage: 2 },
      ]
    },
    {
      q: '좋아하는 음식 스타일은?',
      a: [
        { type: 'a', text: '한식', nextPage: 3 },
        { type: 'b', text: '양식', nextPage: 3 },
        { type: 'c', text: '중식', nextPage: 3 },
        { type: 'd', text: '일식', nextPage: 3 },
      ]
    },
    {
      q: '여행할 때 선호하는 활동은?',
      a: [
        { type: 'a', text: '자연 속 산책', nextPage: 4 },
        { type: 'b', text: '문화 유적지 탐방', nextPage: 4 },
        { type: 'c', text: '음식 체험', nextPage: 4 },
        { type: 'd', text: '스포츠 및 액티비티', nextPage: 4 },
      ]
    },
    {
      q: '가장 중요하게 생각하는 여행 요소는?',
      a: [
        { type: 'a', text: '자유로움과 유동성', nextPage: 5 },
        { type: 'b', text: '안전과 편의성', nextPage: 5 },
        { type: 'c', text: '새로운 문화와 경험', nextPage: 5 },
        { type: 'd', text: '휴식과 여유', nextPage: 5 },
      ]
    },
    {
      q: '선호하는 여행 동반자는?',
      a: [
        { type: 'a', text: '친구/연인', nextPage: 6 },
        { type: 'b', text: '가족', nextPage: 6 },
        { type: 'c', text: '혼자', nextPage: 6 },
        { type: 'd', text: '그룹/단체', nextPage: 6 },
      ]
    },
    {
      q: '여행지에서 가장 중요하게 생각하는 숙박 시설은?',
      a: [
        { type: 'a', text: '호텔', nextPage: 7 },
        { type: 'b', text: '에어비앤비/홈스테이', nextPage: 7 },
        { type: 'c', text: '리조트/풀빌라', nextPage: 7 },
        { type: 'd', text: '게스트하우스/호스텔', nextPage: 7 },
      ]
    },
    {
      q: '여행을 계획할 때 주로 참고하는 정보는?',
      a: [
        { type: 'a', text: '여행 블로그/사이트', nextPage: 8 },
        { type: 'b', text: '여행 서적/가이드북', nextPage: 8 },
        { type: 'c', text: 'SNS/소셜 미디어', nextPage: 8 },
        { type: 'd', text: '친구/지인의 추천', nextPage: 8 },
      ]
    },
    {
      q: '여행 중 가장 좋아하는 활동은?',
      a: [
        { type: 'a', text: '맛집 탐방', nextPage: 9 },
        { type: 'b', text: '자연 속 힐링', nextPage: 9 },
        { type: 'c', text: '쇼핑과 시장 탐방', nextPage: 9 },
        { type: 'd', text: '명소나 유적지 관광', nextPage: 9 },
      ]
    },
    {
      q: '여행 후 가장 소중한 것은?',
      a: [
        { type: 'a', text: '새로운 경험과 추억', nextPage: 10 },
        { type: 'b', text: '사진과 동영상', nextPage: 10 },
        { type: 'c', text: '지역 특산물과 선물', nextPage: 10 },
        { type: 'd', text: '재충전된 에너지', nextPage: 10 },
      ]
    },
    {
      q: '다음 여행지로 가고 싶은 국가는?',
      a: [
        { type: 'a', text: '이탈리아', nextPage: 11 },
        { type: 'b', text: '태국', nextPage: 11 },
        { type: 'c', text: '캐나다', nextPage: 11 },
        { type: 'd', text: '뉴질랜드', nextPage: 11 },
      ]
    },
    {
      q: '여행지를 선택할 때 가장 중요한 기준은?',
      a: [
        { type: 'a', text: '비용과 경비', nextPage: 12 },
        { type: 'b', text: '여행 기간과 계획', nextPage: 12 },
        { type: 'c', text: '여행지의 특색과 매력', nextPage: 12 },
        { type: 'd', text: '기후와 계절', nextPage: 12 },
      ]
    },
    {
      q: '여행지에서 주로 찍는 사진 스타일은?',
      a: [
        { type: 'a', text: '풍경 사진', nextPage: 13 },
        { type: 'b', text: '음식 사진', nextPage: 13 },
        { type: 'c', text: '셀피/인물 사진', nextPage: 13 },
        { type: 'd', text: '흥미로운 아티스트 사진', nextPage: 13 },
      ]
    },
    {
      q: '여행 중 빠질 수 없는 아이템은?',
      a: [
        { type: 'a', text: '카메라/스마트폰', nextPage: 14 },
        {
          type: 'd', text: '여행 가이드', nextPage: 14
        },
      ]
    }
  ]
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(Array(qalist.length).fill(''));



  // handleAnswerClick 함수 수정
  const handleAnswerClick = (nextPage, type) => {
    if (nextPage) {
      setPage(nextPage); // 페이지 업데이트
      const updatedAnswers = [...answers]; // 이전 답변 배열을 복사
      updatedAnswers[nextPage - 1] = type; // 업데이트된 페이지에 해당하는 인덱스에 새로운 답변 할당
      setAnswers(updatedAnswers); // 답변 배열 업데이트
    }
  };


  const assignScore = (answer) => {
    switch (answer) {
      case 'a':
      case 'b':
        return 1;
      case 'c':
      case 'd':
        return 2;
      default:
        return 0;
    }
  };


  // // 총합 계산
  // const calculateTotal = () => {
  //   let total = 0;
  //   answers.forEach((answer, index) => {
  //     total += assignScore(answer);
  //   });
  //   return total;
  // };

  const calculateTotal = (answers) => {
    let total = 0;
    answers.forEach((answer, index) => {
      total += assignScore(answer);
    });
    return total;
  };
  // 결과 페이지 컴포넌트
  const ResultPage = ({ answers }) => {
    const totalScore = calculateTotal(answers);

    // 여행지 추천 함수 수정
    const recommendDestination = (totalScore) => {
      if (totalScore >= 45) return '유럽 - 프랑스 파리';
      else if (totalScore >= 40) return '유럽 - 이탈리아 로마';
      else if (totalScore >= 35) return '아시아 - 일본 도쿄';
      else if (totalScore >= 30) return '아시아 - 태국 방콕';
      else if (totalScore >= 25) return '북미 - 미국 뉴욕';
      else if (totalScore >= 20) return '남미 - 브라질 리오 데 자네이루';
      else if (totalScore >= 15) return '오세아니아 - 호주 시드니';
      else return '여행을 더 즐기고 경험한 후 다시 시도해보세요!';
    };

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
    <div className='mbtilayout d-flex align-items-center justify-content-center' >
      {page === 0 ?
        <div className='startlayout d-flex flex-column align-items-center justify-content-center'>
          <div className='startlogo d-flex flex-column align-items-center justify-content-center'>
            <div>나한테 어울리는 여행지는 ?</div>
            <div>▼</div>
          </div>
          <div className='startbtn' onClick={() => setPage(1)}>테스트 시작하기</div>
        </div>
        : page <= qalist.length ?
          <div className='qalayout d-flex flex-column'>

            <div className='ttitle'>
              <div>나한테 어울리는 여행지는 ?</div>
              <div>{`${page} / ${qalist.length}`}</div>
            </div>
            {qalist.map((qa, i) => (
              <div className='qalist' style={{ display: page === i + 1 ? 'flex' : 'none' }}>

                <div className='qaitem'>


                  <div className='question d-flex'>
                    <div className='profile d-flex flex-column align-items-center justify-content-center'>
                      <div />
                      <div />
                    </div>
                    <div className='chacdk'>◀︎
                    </div>
                    <div className='chatBox'>{qa.q}</div>
                  </div>
                  <div>

                  </div>

                </div>

                <div className='anscont'>
                  <div className='answers '>
                    <div>+</div>
                    <div>#</div>
                  </div>
                  <div className='answerslayout'>
                    {qa.a.map((answer, index) => (
                      <div className='answer ' key={index} onClick={() => handleAnswerClick(answer.nextPage, answer.type)}>
                        {answer.text}
                      </div>

                    ))}
                  </div>
                </div>
              </div>


            ))}
          </div>
          :
          <ResultPage answers={answers} />

      }
    </div >
  );
}

export default App;
