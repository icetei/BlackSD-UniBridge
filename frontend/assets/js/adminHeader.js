document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     경로 계산
     예) pathname = /html/admin/adminBoard/menteeBoard/menteeBoardList.html
     segments(파일 제외) = ["html","admin","adminBoard","menteeBoard"] → dirDepth=4
     assets 루트(frontend/)까지: Array(dirDepth).fill("..") = "../../../../"
  ======================== */
  const segments = window.location.pathname.split("/").filter(Boolean);
  const dirDepth = segments.length - 1; // 파일명 제외한 디렉토리 깊이

  const toRoot  = dirDepth > 0 ? Array(dirDepth).fill("..").join("/") : ".";
  // html/admin 까지: dirDepth - 2 단계
  const toAdmin = dirDepth > 2 ? Array(dirDepth - 2).fill("..").join("/") : ".";

  /* 로고 이미지 경로 주입 */
  const logoImg = document.getElementById("header-logo");
  if (logoImg) {
    logoImg.src = `${toRoot}/assets/img/UniBridge.png`;
  }

  /* 로고 링크 */
  const logoLink = document.querySelector(".admin-header__logo");
  if (logoLink) {
    logoLink.href = `${toAdmin}/adminMain/main.html`;
  }

  /* ========================
     메뉴 경로
  ======================== */
  const menuMap = {
    main:     `${toAdmin}/adminMain/main.html`,
    notice:   `${toAdmin}/adminNotice/noticeList.html`,
    board:    `${toAdmin}/adminBoard/menteeBoard/menteeBoardList.html`,
    report:   `${toAdmin}/adminReport/reportList.html`,
    user:     `${toAdmin}/adminUserManagement/userList.html`,
    matching: `${toAdmin}/adminMatching/matchingList.html`,
    logout:   `${toAdmin}/adminLogin/login.html`,
  };

  const pageKeyMap = {
    notice:   ["noticeList.html", "noticeDetail.html", "noticeWrite.html", "noticeEdit.html"],
    board:    ["mentorBoardList.html", "menteeBoardList.html", "mentorBoardDetail.html", "menteeBoardDetail.html", "mentorBoardWrite.html", "menteeBoardWrite.html", "mentorBoardEdit.html", "menteeBoardEdit.html"],
    report:   ["reportList.html", "reportDetail.html"],
    user:     ["userList.html", "userDetail.html", "userDetailWaiting.html"],
    matching: ["matchingList.html", "matchingDetail.html"],
  };

  const currentPath = window.location.pathname;
  const getCurrentMenuKey = () => {
    for (const [key, pages] of Object.entries(pageKeyMap)) {
      if (pages.some(name => currentPath.includes(name))) return key;
    }
    return "";
  };

  const currentMenuKey = getCurrentMenuKey();

  document.querySelectorAll("[data-link]").forEach(btn => {
    const target = btn.dataset.link;

    if (target === currentMenuKey) btn.classList.add("is-active");

    btn.addEventListener("click", e => {
      e.preventDefault();
      if (target === "logout") {
        if (!window.confirm("로그아웃 하시겠습니까?")) return;
      }
      const path = menuMap[target];
      if (path) window.location.href = path;
    });
  });

});
