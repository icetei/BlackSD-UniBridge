document.addEventListener("DOMContentLoaded", function () {
  // 1. 헤더 가져오기
  fetch('./../../../../header/mentorHeader.html')
    .then(response => {
      if (!response.ok) throw new Error('헤더를 찾을 수 없습니다.');
      return response.text();
    })
    .then(data => {
      document.getElementById('headerContainer').innerHTML = data;
    })
    .catch(error => console.error('헤더 오류:', error));

  // 2. 푸터 가져오기
  fetch('./../../../../footer/footer.html')
    .then(response => {
      if (!response.ok) throw new Error('푸터를 찾을 수 없습니다.');
      return response.text();
    })
    .then(data => {
      document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(error => console.error('푸터 오류:', error));

  // 3. 페이지네이션
  const pageBtns = document.querySelectorAll('.mentorBoardPageBtn');
  pageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('mentorBoardPageNext')) return;
      pageBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const pageNum = btn.dataset.page;
      console.log(`${pageNum} 페이지로 이동 또는 데이터 로드`);
    });
  });

  // 4. 행 클릭 → 상세 페이지 이동
  const rows = document.querySelectorAll('.mentorBoardRow');
  rows.forEach((row) => {
    row.addEventListener('click', () => {
      const boardId = row.dataset.boardId;
      if (boardId) {
        window.location.href = `./mentorBoardDetail.html?boardId=${boardId}`;
      }
    });
  });

  // 5. 글작성 버튼
  const writeBtn = document.getElementById('mentorBoardWriteBtn');
  if (writeBtn) {
    writeBtn.addEventListener('click', () => {
      window.location.href = './mentorBoardCreate.html';
    });
  }
});