const breadcrumb = document.querySelector("#breadcrumb");
const paths = window.location.pathname.split("/").filter(Boolean);

let pathHtml = '<li><a href="/">ホーム</a></li>';
let currentPath = "";

paths.forEach((path, index) => {
  currentPath += `/${path}`;
  if (index === paths.length - 1) {
    pathHtml += `<li>${decodeURIComponent(path)}</li>`;
  } else {
    pathHtml += `<li><a href="${currentPath}">${
      decodeURIComponent(path)
    }</a></li>`;
  }
});

breadcrumb.innerHTML = pathHtml;
