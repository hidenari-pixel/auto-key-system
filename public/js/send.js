require("dotenv").config();

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

// 解錠のPOST
openBtn.onclick = () => {
  const json = { rotate: "1" };
  fetch(process.env.SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  btnDisabled(openBtn);
  btnDisabled(closeBtn);
  setTimeout(() => {
    btnEnabled(openBtn);
    btnEnabled(closeBtn);
    console.log("finish");
  }, 3000);
};
// 施錠のPOST
closeBtn.onclick = () => {
  const json = { rotate: "0" };
  fetch(process.env.SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  btnDisabled(openBtn);
  btnDisabled(closeBtn);
  setTimeout(() => {
    btnEnabled(openBtn);
    btnEnabled(closeBtn);
    console.log("finish");
  }, 2000);
};

const btnDisabled = (btn) => {
  btn.disabled = true;
  btn.style.backgroundColor = "#ccc";
};

const btnEnabled = (btn) => {
  btn.disabled = false;
  btn.style.backgroundColor = "#333";
};
