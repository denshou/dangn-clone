const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const PW1 = formData.get("password");
  const PW2 = formData.get("password2");

  if (PW1 === PW2) return true;
  else return false;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256PW = sha256(formData.get("password"));
  formData.set("password", sha256PW);

  const div = document.querySelector("#info");

  if (checkPassword()) {
    div.innerText = "";
    const res = await fetch("/signup", {
      method: "POST",
      body: formData,
    });
    alert("회원가입에 성공했습니다.");
    window.location.pathname = "/login.html";
  } else {
    div.innerText = "비밀번호가 일치하지 않습니다.";
  }
};

form.addEventListener("submit", handleSubmit);
