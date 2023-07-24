const calcTime = (timestamp) => {
  //한국시간 기준 UTC+9
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (min > 0) return `${min}분 전`;
  else if (sec > 0) return `${sec}초 전`;
  else return "방금 전";
};

const renderData = (data) => {
  const wrap = document.querySelector(".wrap");
  data = data.sort((a, b) => b.insertAt - a.insertAt);
  console.log(data);
  data.forEach(async (obj) => {
    const info = document.createElement("div");
    info.className = "item-info";

    const infoImg = document.createElement("div");
    infoImg.className = "item-info-img";

    const img = document.createElement("img");
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    img.src = url;

    const infoTitle = document.createElement("div");
    infoTitle.className = "item-info-title";
    infoTitle.innerText = obj.title;

    const infoPrice = document.createElement("div");
    infoPrice.className = "item-info-price";
    infoPrice.innerText = obj.price;

    const infoPlace = document.createElement("div");
    infoPlace.className = "item-info-place";
    infoPlace.innerText = obj.place + " " + calcTime(obj.insertAt);

    const infoLike = document.createElement("div");
    infoLike.className = "item-info-like";
    infoLike.innerText = "관심 10 · 채팅 11";

    infoImg.appendChild(img);

    info.appendChild(infoImg);
    info.appendChild(infoTitle);
    info.appendChild(infoPrice);
    info.appendChild(infoPlace);
    info.appendChild(infoLike);

    wrap.appendChild(info);
  });
};

const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
};

fetchList();
