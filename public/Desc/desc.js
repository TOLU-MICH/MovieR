import { createElement, createimg } from "../index.js";

getdata();
async function getdata() {
  const response = await fetch("/desc");
  const data = await response.json();
  const { recommendation, review, trending } = data;
  const sortRecm = recommendation.sort((a, b) => b.vote_count - a.vote_count);
  const sortTrend = trending.sort((a, b) => b.vote_count - a.vote_count);

  // const { details, cast, recommendation, review } = data;
  // console.log(details, cast, recommendation, review);
  // document.querySelector(".backdrop").src =
  //  `https://image.tmdb.org/t/p/original${details.backdrop_path}`;
  //  document.querySelector(".img-child").src =
  //  `https://image.tmdb.org/t/p/original${details.poster_path}`;
  // document.querySelector(".overview").innerHTML = details.overview;
  // details.genres.forEach(
  //   (item) => {document.querySelector(".genre").innerHTML += item.name;}
  // );
  // document.querySelector(".star").innerHTML = overview;
  // document.querySelector(".imdb").innerHTML = overview;
  // document.querySelector(".premiere").innerHTML = overview;
  // document.querySelector(".date").innerHTML = details.release_date;

  // review
  // for (const item of review) {
  //   const { username, avatar_path } = item.author_details;
  //   const { content, updated_at } = item;
  //   if (avatar_path != null) {
  //     if (avatar_path.length == 32) {
  //       const cad = card(
  //         avatar_path,
  //         username,
  //         "text-image review",
  //         "review-img","",
  //         content,
  //         updated_at
  //       );
  //       document.querySelector(".review-container").append(cad);
  //       console.log(avatar_path.length);
  //     }
  //   }
  // }

  // recommendation
  // for (const item of sortRecm) {
  //   const { id, title, poster_path } = item;
  //   // checks if there is a path to the image
  //   if (poster_path != null) {
  //     const cad = card(poster_path, title, "child center", "", id);
  //     document.querySelector(".recommendation").append(cad);
  //   }
  // }

  // trending
  // console.log(sortTrend);
  // const { poster_path, title, name, id } = sortTrend[0];
  // const cad = card(poster_path, name || title, "center", "", id);
  // document.querySelector(".trending").append(cad);
  // let i = 1;
  // sortTrend.slice(1, 5).forEach((item) => {
  //   const { title, name } = item;
  //   const trend = popular(++i, title || name);
  //   document.querySelector(".trending").append(trend);
  // });
  // const para = p("more", "more");
  // const span = createElement("span", "center", para);
  // console.log(span);
  // document.querySelector(".trending").append(span);
}

function p(clas, content,id) {
  const p = createElement("p", clas,"",id);
  p.textContent = content;
  return p;
}

function card(path, title, pClass, clas, id, content, date) {
  const img = createimg(path, "", pClass, clas, id);
  const para = p("font-small text-image", title);
  let span;
  if (content && content != "") {
    const time = new Date(date);
    const dateP = p("date", time.toDateString());
    para.append(dateP);
    const para1 = p("font-small content", content);
    span = createElement("span", "text", [para, para1]);
    para1.addEventListener("click", () => (para1.style.overflow = "visible"));
  } else span = createElement("span", "text center", para);
  img.append(span);
  return img;
}

function popular(num, name,id) {
  const p1 = p("rank", num,id);
  const p2 = p("info", name,id);
  const span = createElement("span", "trend", [p1, p2]);
  return span;
}