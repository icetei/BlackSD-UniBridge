// const summaryData = {
//   totalUsers: 136,
//   mentorCount: 60,
//   menteeCount: 76,
//   todayVisitors: 58,
//   matchingCount: 48,
// };

// const recentPosts = [
//   { number: 1, title: "게시글 제목 1", date: "03.03"},
//   { number: 2, title: "게시글 제목 2", date: "03.03"},
//   { number: 3, title: "게시글 제목 3", date: "03.02"},
//   { number: 4, title: "게시글 제목 4", date: "03.02"},
//   { number: 5, title: "게시글 제목 5", date: "03.01"},
// ];

// const recentUsers = [
//   { name: "유저1", type: "멘토", date: "03.03"},
//   { name: "유저2", type: "멘티", date: "03.03"},
//   { name: "유저3", type: "멘티", date: "03.02"},
//   { name: "유저4", type: "멘토", date: "03.02"},
//   { name: "유저5", type: "멘티", date: "03.01"},
// ];

// const totalUserCount = document.getElementById("totalUserCount");
// const userSubText = document.getElementById("userSubText");
// const todayVisitorCount = document.getElementById("todayVisitorCount");
// const matchingCount = document.getElementById("matchingCount");

// const recentPostList = document.getElementById("recentPostList");
// const recentUserList = document.getElementById("recentUserList");

// function setSummary() {
//   totalUserCount.textContent = `${summaryData.totalUsers} 명`;
//   userSubText.textContent = `멘토 ${summaryData.mentorCount} 멘티 ${summaryData.menteeCount}`;
//   todayVisitorCount.textContent = `${summaryData.todayVisitors} 명`;
//   matchingCount.textContent = `${summaryData.matchingCount} 명`;
// }

// function renderRecentPosts() {
//   recentPostList.innerHTML = recentPosts
//     .map((post) => {
//       return `
//         <div class="table-row three-col">
//           <span class="${post.muted ? "muted" : ""}">${post.number}</span>
//           <span>${post.title}</span>
//           <span>${post.date}</span>
//         </div>
//       `;
//     })
//     .join("");
// }

// function renderRecentUsers() {
//   recentUserList.innerHTML = recentUsers
//     .map((user) => {
//       return `
//         <div class="table-row three-col">
//           <span class="${user.muted ? "muted" : ""}">${user.name}</span>
//           <span>${user.type}</span>
//           <span>${user.date}</span>
//         </div>
//       `;
//     })
//     .join("");
// }

// setSummary();
// renderRecentPosts();
// renderRecentUsers();

// const summaryData = {
//   totalUsers: 136,
//   mentorCount: 60,
//   menteeCount: 76,
//   todayVisitors: 58,
//   matchingCount: 48,
// };

// const recentBoards = [
//   { no: 1, title: "아무개 제목 5", date: "03.03" },
//   { no: 2, title: "아무개 제목 4", date: "03.03" },
//   { no: 3, title: "아무개 제목 3", date: "03.02", muted: true },
//   { no: 4, title: "아무개 제목 2", date: "03.02" },
//   { no: 5, title: "아무개 제목 1", date: "03.01" },
// ];

// const recentUsers = [
//   { name: "유저1", type: "멘토", date: "03.03", muted: true },
//   { name: "유저2", type: "멘티", date: "03.03" },
//   { name: "유저3", type: "멘티", date: "03.02", muted: true },
//   { name: "유저4", type: "멘토", date: "03.02" },
//   { name: "유저5", type: "멘티", date: "03.01" },
// ];

// document.getElementById("totalJoinCount").textContent = `${summaryData.totalUsers} 명`;
// document.getElementById("joinSubText").textContent = `멘토 ${summaryData.mentorCount} 멘티 ${summaryData.menteeCount}`;
// document.getElementById("todayVisitCount").textContent = `${summaryData.todayVisitors} 명`;
// document.getElementById("matchingCount").textContent = `${summaryData.matchingCount} 명`;

// const recentBoardList = document.getElementById("recentBoardList");
// const recentUserList = document.getElementById("recentUserList");

// recentBoardList.innerHTML = recentBoards
//   .map(
//     (item) => `
//       <div class="table-row">
//         <span class="${item.muted ? "muted" : ""}">${item.no}</span>
//         <span>${item.title}</span>
//         <span>${item.date}</span>
//       </div>
//     `
//   )
//   .join("");

// recentUserList.innerHTML = recentUsers
//   .map(
//     (item) => `
//       <div class="table-row">
//         <span class="${item.muted ? "muted" : ""}">${item.name}</span>
//         <span>${item.type}</span>
//         <span>${item.date}</span>
//       </div>
//     `
//   )
//   .join("");


// document.addEventListener("DOMContentLoaded", () => {

//   /* =========================
//      사이드 메뉴 이동
//   ========================= */

//   const sideLinks = document.querySelectorAll(".side-link");

//   const pageMap = [
//     "../../html/adminNotice/noticeList.html",
//     "../../html/adminBoard/mentorBoard/mentorBoardList.html",
//     "../../html/adminReport/reportList.html",
//     "../../html/adminUserManagement/userList.html",
//     "../../html/adminMatching/matchingList.html"
//     //     main: "../../html/admin/adminMain/main.html",
//     // notice: "../../html/admin/adminNotice/noticeList.html",
//     // board: "../../html/admin/adminBoard/menteeBoardList.html",
//     // report: "../../html/admin/adminReport/reportList.html",
//     // user: "../../html/admin/adminUserManagement/userList.html",
//     // matching: "#",
//     // logout: "../../html/admin/adminLogin/login.html",
//   ];

//   sideLinks.forEach((link, index) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();

//       const movePage = pageMap[index];

//       if (movePage) {
//         window.location.href = movePage;
//       }
//     });
//   });


//   /* =========================
//      관리자 메인 데이터 표시
//   ========================= */

//   const summaryData = {
//     totalUsers: 136,
//     mentorCount: 60,
//     menteeCount: 76,
//     todayVisitors: 58,
//     matchingCount: 48,
//   };

//   const recentBoards = [
//     { no: 1, title: "게시글 제목 예시 5", date: "03.03" },
//     { no: 2, title: "게시글 제목 예시 4", date: "03.03" },
//     { no: 3, title: "게시글 제목 예시 3", date: "03.02" },
//     { no: 4, title: "게시글 제목 예시 2", date: "03.02" },
//     { no: 5, title: "게시글 제목 예시 1", date: "03.01" },
//   ];

//   const recentUsers = [
//     { name: "유저1", type: "멘토", date: "03.03" },
//     { name: "유저2", type: "멘티", date: "03.03" },
//     { name: "유저3", type: "멘티", date: "03.02" },
//     { name: "유저4", type: "멘토", date: "03.02" },
//     { name: "유저5", type: "멘티", date: "03.01" },
//   ];

//   /* =========================
//      summary 데이터 출력
//   ========================= */

//   const totalJoinCount = document.getElementById("totalJoinCount");
//   const joinSubText = document.getElementById("joinSubText");
//   const todayVisitCount = document.getElementById("todayVisitCount");
//   const matchingCount = document.getElementById("matchingCount");

//   if (totalJoinCount) {
//     totalJoinCount.textContent = `${summaryData.totalUsers} 명`;
//   }

//   if (joinSubText) {
//     joinSubText.textContent = `멘토 ${summaryData.mentorCount} 멘티 ${summaryData.menteeCount}`;
//   }

//   if (todayVisitCount) {
//     todayVisitCount.textContent = `${summaryData.todayVisitors} 명`;
//   }

//   if (matchingCount) {
//     matchingCount.textContent = `${summaryData.matchingCount} 명`;
//   }


//   /* =========================
//      최근 게시글 출력
//   ========================= */

//   const recentBoardList = document.getElementById("recentBoardList");

//   if (recentBoardList) {
//     recentBoardList.innerHTML = recentBoards
//       .map(
//         (item) => `
//         <div class="table-row">
//           <span>${item.no}</span>
//           <span>${item.title}</span>
//           <span>${item.date}</span>
//         </div>
//       `
//       )
//       .join("");
//   }


//   /* =========================
//      최근 가입자 출력
//   ========================= */

//   const recentUserList = document.getElementById("recentUserList");

//   if (recentUserList) {
//     recentUserList.innerHTML = recentUsers
//       .map(
//         (item) => `
//         <div class="table-row">
//           <span>${item.name}</span>
//           <span>${item.type}</span>
//           <span>${item.date}</span>
//         </div>
//       `
//       )
//       .join("");
//   }

// });

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     관리자 통계 데이터
  ========================= */
  const summaryData = {
    totalUsers: 136,
    mentorCount: 60,
    menteeCount: 76,
    todayVisitors: 58,
    matchingCount: 48,
  };

  const recentBoards = [
    { no: 1, title: "아무개 제목 5", date: "03.03" },
    { no: 2, title: "아무개 제목 4", date: "03.03" },
    { no: 3, title: "아무개 제목 3", date: "03.02" },
    { no: 4, title: "아무개 제목 2", date: "03.02" },
    { no: 5, title: "아무개 제목 1", date: "03.01" },
  ];

  const recentUsers = [
    { name: "유저1", type: "멘토", date: "03.03" },
    { name: "유저2", type: "멘티", date: "03.03" },
    { name: "유저3", type: "멘티", date: "03.02" },
    { name: "유저4", type: "멘토", date: "03.02" },
    { name: "유저5", type: "멘티", date: "03.01" },
  ];

  /* =========================
     summary 데이터 출력
  ========================= */
  const totalJoinCount = document.getElementById("totalJoinCount");
  const joinSubText    = document.getElementById("joinSubText");
  const todayVisitCount = document.getElementById("todayVisitCount");
  const matchingCount  = document.getElementById("matchingCount");

  if (totalJoinCount) totalJoinCount.textContent = `${summaryData.totalUsers} 명`;
  if (joinSubText)    joinSubText.textContent    = `멘토 ${summaryData.mentorCount}  멘티 ${summaryData.menteeCount}`;
  if (todayVisitCount) todayVisitCount.textContent = `${summaryData.todayVisitors} 명`;
  if (matchingCount)  matchingCount.textContent  = `${summaryData.matchingCount} 명`;

  /* =========================
     최근 게시글 출력
  ========================= */
  const recentBoardList = document.getElementById("recentBoardList");
  if (recentBoardList) {
    recentBoardList.innerHTML = recentBoards
      .map(item => `
        <div class="table-row">
          <span>${item.no}</span>
          <span>${item.title}</span>
          <span>${item.date}</span>
        </div>
      `)
      .join("");
  }

  /* =========================
     최근 가입자 출력
  ========================= */
  const recentUserList = document.getElementById("recentUserList");
  if (recentUserList) {
    recentUserList.innerHTML = recentUsers
      .map(item => `
        <div class="table-row">
          <span>${item.name}</span>
          <span>${item.type}</span>
          <span>${item.date}</span>
        </div>
      `)
      .join("");
  }

});