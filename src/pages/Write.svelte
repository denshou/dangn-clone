<script>
  import Nav from "../components/Nav.svelte";
  import { getDatabase, ref, push } from "firebase/database";

  let title;
  let price;
  let description;
  let place;

  function writeItemData(evnet) {
    const db = getDatabase();
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
    });
    window.location.hash = "/";
  }
</script>

<Nav location="write" />
<container>
  <form
    class="input-form"
    id="input-form"
    on:submit|preventDefault={writeItemData}
  >
    <!-- <label for="image"> -->
      <!-- <img src="assets/camera.svg" alt="" class="img-upload" /> -->
    <!-- </label> -->
    <!-- <input type="file" onchange="readURL(this);" id="image" name="image" />
    <span class="preview-img">
      <img id="preview" onclick="popImage(this.src)" class="preview-img" />
    </span> -->
    <!-- <input type="file" id="image" name="image" /> -->

    <hr />
    <div>
      <label for="title">제목</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="제목"
        bind:value={title}
      />
    </div>
    <div>
      <label for="price">가격</label>
      <input
        type="text"
        id="price"
        name="price"
        placeholder="가격을 입력해주세요."
        bind:value={price}
      />
    </div>
    <div>
      <label for="description">설명</label>
      <textarea
        id="description"
        name="description"
        placeholder="게시글 내용을 작성해 주세요. &#13;&#10;(판매 금지물품은 게시가 제한될 수 있어요.) &#13;&#10; &#13;&#10;신뢰할 수 있는 거래를 위해 자세히 적어주세요."
        bind:value={description}
      />
    </div>
    <div>
      <label for="place">거래 희망 장소</label>
      <input
        type="text"
        id="place"
        name="place"
        placeholder="거래 희망 장소 "
        bind:value={place}
      />
    </div>

    <button type="submit" class="submit-btn">작성 완료</button>
  </form>
</container>
