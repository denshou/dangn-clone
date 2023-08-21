<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";

  $: items = []; // 반응형 변수

  const db = getDatabase();
  const itemsRef = ref(db, "items/");

  onMount(() => {
    // 화면이 렌더링 될 때마다 onValue 호출
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  });

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
</script>

<Nav location="home" />

<main>
  <section class="content-1">
    <div class="content-text">
      <h1 class="content-title">당신 근처의<br />당근마켓</h1>
      <p class="content-sub">
        중고 거래부터 동네 정보까지, 이웃과 함께해요.<br />가깝고 따뜻한 당신의
        근처를 만들어요.
      </p>
    </div>
    <div>
      <img src="assets/insta.jpg" alt="" class="img" />
    </div>
  </section>

  <section class="content-2">
    <div>
      <img src="assets/bed.png" alt="" class="img" />
    </div>
    <div class="content-text-2">
      <h1 class="content-title-2">우리 동네<br />중고 직거래 마켓</h1>
      <p class="content-sub">
        동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
      </p>
      <div class="more-btn">
        <a class="popular" href="popular.html">인기매물 보기</a>
        <a class="trust" href="trust.html">믿을 수 있는 중고거래</a>
      </div>
    </div>
  </section>

  <section class="content-3">
    <div class="content-text">
      <h1 class="content-title-2">이웃과 함께 하는<br />동네생활</h1>
      <p class="content-sub">
        우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
      </p>
      <div class="content-3-icons">
        <div class="content-3-icon">
          <img src="assets/question.png" alt="" />
          <p class="bold">우리동네질문</p>
          <p class="sub">궁금한 게 있을 땐</p>
          <p>이웃에게 물어보세요.</p>
        </div>
        <div class="content-3-icon">
          <img src="assets/lost.png" alt="" />
          <p class="bold">동네분실센터</p>
          <p class="sub">무언가를 잃어버렸을 때,</p>
          <p>함께 찾을 수 있어요.</p>
        </div>
        <div class="content-3-icon">
          <img src="assets/chat.png" alt="" />
          <p class="bold">동네모임</p>
          <p class="sub">관심사가 비슷한 이웃과</p>
          <p>온오프라인으로 만나요.</p>
        </div>
      </div>
    </div>
    <div>
      <img src="assets/blue.png" alt="" class="img" />
    </div>
  </section>

  <section class="content-2">
    <div>
      <img src="assets/bed.png" alt="" class="img" />
    </div>
    <div class="content-text-2">
      <h1 class="content-title-2">내 근처에서 찾는<br />동네가게</h1>
      <p class="content-sub">
        우리 동네 가게를 찾고 있나요?<br />동네 주민이 남긴 진짜 후기를 함께
        확인해보세요!
      </p>
      <div class="more-btn">
        <a class="trust" href="find-store.html">당근마켓 동네가게 찾기</a>
      </div>
    </div>
  </section>

  <section class="content-5">
    <div class="hot-title">중고거래 인기매물</div>

    <div class="wrap">
      {#each items as item}
        <div class="item-info">
          <div class="item-info-img">
            <img src={item.imgUrl} alt="" />
          </div>
          <div class="item-info-title">{item.title}</div>
          <div class="item-info-price">{item.price}</div>
          <div class="item-info-place">
            {item.place} · {calcTime(item.insertAt)}
          </div>
          <div class="item-info-like">관심 11 - 채팅 47</div>
        </div>
      {/each}
      <!-- <div class="item-info">
        <div class="item-info-img">
          <img src="assets/cat.png" alt="" />
        </div>
        <div class="item-info-title">제습기</div>
        <div class="item-info-price">10,000원</div>
        <div class="item-info-place">서울 서초구 반포1동</div>
        <div class="item-info-like">관심 11 - 채팅 47</div>
      </div> -->
    </div>

    <a
      class="see-more"
      href="popular-more.html"
      style="text-decoration: underline">인기매물 더 보기</a
    >
  </section>
</main>

<footer>
  <div class="hs">
    <a
      class="hot-search"
      href="hot-search.html"
      style="text-decoration: underline">중고거래 인기검색어</a
    >
    <div class="hot-search-items">
      <a class="it" href="hot-1.html">자전거</a>
      <a class="it" href="hot-1.html">의자</a>
      <a class="it" href="hot-1.html">냉장고</a>
      <a class="it" href="hot-1.html">노트북</a>
      <a class="it" href="hot-1.html">컴퓨터</a>
      <a class="it" href="hot-1.html">모니터</a>
      <a class="it" href="hot-1.html">아이폰</a>
      <a class="it" href="hot-1.html">책상</a>
      <a class="it" href="hot-1.html">아이패드</a>
      <a class="it" href="hot-1.html">가방</a>
    </div>
  </div>

  <hr class="hr-1" />

  <div class="more">
    <div class="column">
      <a class="column-list" href="footer-more.html">중고거래</a>
      <a class="column-list" href="footer-more.html">동네가게</a>
      <a class="column-list" href="footer-more.html">당근알바</a>
      <a class="column-list" href="footer-more.html">부동산 직거래</a>
      <a class="column-list" href="footer-more.html">중고차 직거래</a>
    </div>

    <div class="column">
      <a class="column-list" href="footer-more.html">당근비즈니스</a>
      <a class="column-list" href="footer-more.html">채팅하기</a>
    </div>

    <div class="column">
      <a class="column-list" href="footer-more.html">자주 묻는 질문</a>
      <a class="column-list" href="footer-more.html">회사 소개</a>
      <a class="column-list" href="footer-more.html">인재 채용</a>
    </div>

    <div class="column">
      <div class="app-down">당근마켓 앱 다운로드</div>
      <div class="download">
        <a
          class="down-btn"
          href="https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%ED%95%84%EC%88%98%EC%95%B1/id1018769995"
          target="_blank"
        >
          <img src="assets/apple.png" alt="" class="apple" />App Store
        </a>
        <a
          class="down-btn"
          href="https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko&pli=1"
          target="_blank"
        >
          <img src="assets/googleplay.png" alt="" class="googleplay" />Google
          Play
        </a>
      </div>
    </div>
  </div>

  <hr class="hr-2" />
  <div class="last">
    <div class="corp">
      <div>
        <div>
          <span class="bold">대표</span> 김용현, 황도연 |
          <span class="bold">사업자번호</span>
          375-87-00088
        </div>
        <div>
          <span class="bold">직업정보제공사업 신고번호</span>
          2016-서울서초-0051
        </div>
        <div>
          <span class="bold">주소</span> 서울특별시 구로구 디지털로 30길 28, 609호
          (당근서비스)
        </div>
        <div>
          <span class="bold">전화</span> 1544-9796 |
          <span class="bold">고객문의</span> cs@daangnservice.com
        </div>
      </div>

      <div class="inq">
        <a class="bold-2" href="footer-more.html">제휴 문의</a>
        <a class="bold-2" href="footer-more.html">광고 문의</a>
        <a class="bold-2" href="footer-more.html">PR 문의</a>
        <a class="bold-2" href="footer-more.html">IR 문의</a>
      </div>

      <div class="inq">
        <a class="bold-2" href="footer-more.html">이용약관</a>
        <a class="bold-2" href="footer-more.html">개인정보처리방침</a>
        <a class="bold-2" href="footer-more.html">위치기반서비스 이용약관</a>
        <a class="bold-2" href="footer-more.html">이용자보호 비전과 계획</a>
        <a class="bold-2" href="footer-more.html">청소년보호정책</a>
      </div>

      <div class="sns-icons">
        <a
          class="footer-icons"
          href="https://www.facebook.com/daangn"
          target="_blank"
        >
          <img src="assets/facebook.png" alt="" class="footer-icon" />
        </a>
        <a
          class="footer-icons"
          href="https://www.instagram.com/daangnmarket/"
          target="_blank"
        >
          <img src="assets/instagram.png" alt="" class="footer-icon" />
        </a>
        <a
          class="footer-icons"
          href="https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA"
          target="_blank"
        >
          <img src="assets/youtube.png" alt="" class="footer-icon" />
        </a>
        <a
          class="footer-icons"
          href="https://blog.naver.com/daangn"
          target="_blank"
        >
          <img src="assets/naver.png" alt="" class="footer-icon" />
        </a>

        <!-- <div class="dropdown">
              <button class="dropbtn">
                <span class="dropbtn_icon"
                  ><img src="assets/earth.png" alt="" class="btn-img"
                /></span>
                <span class="dropbtn_content">한국</span>
                <span class="dropbtn_click" onclick="dropdown()"
                  ><img
                    src="assets/arrow-down.svg"
                    alt=""
                    class="dropbtn_click"
                    style="font-size: 16px; float: right"
                /></span>
              </button>
              <div class="dropdown-content">
                <div class="fastfood" onclick="showMenu(this.innerText)">
                  한국
                </div>
                <div class="fastfood" onclick="showMenu(this.innerText)">
                  영국
                </div>
                <div class="fastfood" onclick="showMenu(this.innerText)">
                  캐나다
                </div>
                <div class="fastfood" onclick="showMenu(this.innerText)">
                  미국
                </div>
                <div class="fastfood" onclick="showMenu(this.innerText)">
                  일본
                </div>
              </div>
            </div> -->
      </div>
    </div>
  </div>
</footer>
