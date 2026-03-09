document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     현재 페이지 파악
  ======================== */
  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     탭 링크 경로
  ======================== */
  const tabMentee = document.getElementById("tab-mentee");
  const tabMentor = document.getElementById("tab-mentor");

  if (tabMentee) {
    tabMentee.href = "../menteeBoard/menteeBoardList.html";
    if (!isMentor) tabMentee.classList.add("is-active");
  }
  if (tabMentor) {
    tabMentor.href = "../mentorBoard/mentorBoardList.html";
    if (isMentor) tabMentor.classList.add("is-active");
  }

  /* ========================
     목록 페이지 - 게시글 렌더
  ======================== */
  const boardTableBody = document.getElementById("boardTableBody");
  if (boardTableBody) {
    const posts = Array.from({ length: 10 }, (_, i) => ({
      no: 10 - i,
      title: "게시글제목",
      author: "작성자",
      date: "작성날짜 작성시간",
      views: 0,
    }));

    boardTableBody.innerHTML = posts.map(p => `
      <tr onclick="location.href='${boardType}BoardDetail.html'">
        <td class="col-no">${p.no}</td>
        <td>${p.title}</td>
        <td class="col-author text-muted">${p.author}</td>
        <td class="col-date text-muted">${p.date}</td>
        <td class="col-views text-muted">조회수 ${p.views}</td>
      </tr>
    `).join("");
  }

  /* ========================
     목록 페이지 - 페이지네이션
  ======================== */
  const pagination = document.getElementById("pagination");
  if (pagination) {
    const pages = [1, 2, 3, 4, 5];
    pagination.innerHTML = pages.map((p, i) => `
      <button class="page-btn ${i === 0 ? "is-active" : ""}">${p}</button>
    `).join("") + `<button class="page-btn">&gt;</button>`;

    pagination.querySelectorAll(".page-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        pagination.querySelectorAll(".page-btn").forEach(b => b.classList.remove("is-active"));
        if (btn.textContent !== ">") btn.classList.add("is-active");
      });
    });
  }

  /* ========================
     목록 페이지 - 작성 버튼
  ======================== */
  const btnWrite = document.getElementById("btnWrite");
  if (btnWrite) {
    btnWrite.addEventListener("click", () => {
      location.href = `${boardType}BoardWrite.html`;
    });
  }

  /* ========================
     목록 - 조회 버튼
  ======================== */
  const btnSearch = document.getElementById("btnSearch");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      alert("조회 기능은 백엔드 연동 후 동작합니다.");
    });
  }

  /* ========================
     상세 페이지 - 댓글 렌더
  ======================== */
  const commentList = document.getElementById("commentList");
  if (commentList) {
    const comments = [
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
    ];

    commentList.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-body">
          <div class="comment-nickname">${c.nickname}</div>
          <div class="comment-content">${c.content}</div>
          <div class="comment-date">${c.date}</div>
        </div>
        <button class="btn btn-red" onclick="deleteComment(this)">삭제</button>
      </div>
    `).join("");
  }

  /* ========================
     상세 - 수정 버튼
  ======================== */
  const btnEdit = document.getElementById("btnEdit");
  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      location.href = `${boardType}BoardEdit.html`;
    });
  }

  /* ========================
     상세 - 삭제 버튼
  ======================== */
  const btnDelete = document.getElementById("btnDelete");
  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (confirm("게시글을 삭제하시겠습니까?")) {
        location.href = `${boardType}BoardList.html`;
      }
    });
  }

  /* ========================
     작성 - 등록 버튼
  ======================== */
  const btnSubmit = document.getElementById("btnSubmit");
  if (btnSubmit) {
    btnSubmit.addEventListener("click", () => {
      const title = document.getElementById("inputTitle")?.value.trim();
      const content = document.getElementById("inputContent")?.value.trim();
      if (!title) { alert("제목을 입력해주세요."); return; }
      if (!content) { alert("내용을 입력해주세요."); return; }
      alert("등록되었습니다.");
      location.href = `${boardType}BoardList.html`;
    });
  }

  /* ========================
     수정 - 저장 버튼
  ========================= */
  const btnSave = document.getElementById("btnSave");
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      if (confirm("수정사항을 저장하시겠습니까?")) {
        alert("저장되었습니다.");
        location.href = `${boardType}BoardDetail.html`;
      }
    });
  }

  /* ========================
     수정 - 삭제 버튼
  ========================= */
  const btnEditDelete = document.getElementById("btnEditDelete");
  if (btnEditDelete) {
    btnEditDelete.addEventListener("click", () => {
      if (confirm("게시글을 삭제하시겠습니까?")) {
        location.href = `${boardType}BoardList.html`;
      }
    });
  }

});

/* ========================
   댓글 삭제 (전역)
======================== */
function deleteComment(btn) {
  if (confirm("댓글을 삭제하시겠습니까?")) {
    btn.closest(".comment-item").remove();
  }
}
