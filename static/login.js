const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256PW = sha256(formData.get("password"));
  formData.set("password", sha256PW);

  const div = document.querySelector("#info");

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);

  if (res.status === 200) {
    div.innerText = "";
    window.location.pathname = "/";
  } else if (res.status === 401) {
    div.innerText = "아이디 혹은 비밀번호가 일치하지 않습니다.";
  }
};

form.addEventListener("submit", handleSubmit);
