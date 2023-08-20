<script>
  export let location;
</script>

<header>
  <a class="logo-title" href="/" id="logotitle">
    <img src="assets/logo.png" alt="로고" class="logo" />
    <div class="title">당근마켓</div>
  </a>
  {#if location === "home"}
    <a class="nav" id="nav-0-c" href="/">중고거래</a>
  {:else}
    <a class="nav" id="nav-0-u" href="/">중고거래</a>
  {/if}

  {#if location === "neighborshop"}
    <a class="nav" id="nav-1-c" href="#/neighborshop">동네가게</a>
  {:else}
    <a class="nav" id="nav-1-u" href="#/neighborshop">동네가게</a>
  {/if}

  <a class="nav" id="nav-2" href="part-time.html">알바</a>
  <a class="nav" id="nav-3" href="estate.html">부동산 직거래</a>
  <a class="nav" id="nav-4" href="used-car.html">중고차 직거래</a>

  <input type="text" placeholder="물품이나 동네를 검색해보세요" class="input" />
  <a class="chat" href="chat.html">채팅하기</a>
  <a class="chat" href="write.html">글쓰기</a>
  <a class="chat" href="signup.html">회원가입</a>
  <a class="chat" href="login.html">로그인</a>
</header>
