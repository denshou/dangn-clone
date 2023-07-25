function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}

function popImage(url) {
  var img = new Image();
  img.src = url;
  var img_width = img.width;
  var win_width = img.width + 25;
  var img_height = img.height;
  var win = img.height + 30;
  var popup = window.open(
    "",
    "_blank",
    "width=" +
      img_width +
      ", height=" +
      img_height +
      ", menubars=no, scrollbars=auto"
  );
  popup.document.write(
    "<style>body{margin:0px;}</style><img src='" +
      url +
      "' width='" +
      win_width +
      "'>"
  );
}

const form = document.getElementById("input-form");

const handleSubitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  //세계시간 기준
  const accessToken = window.localStorage.getItem("token");

  const res = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body,
  });

  if (res.status === 200) window.location.pathname = "/";
  else if (res.status === 401) {
    alert("로그인이 필요합니다.");
    window.location.pathname = "/login.html";
    return;
  }
};

form.addEventListener("submit", handleSubitForm);
