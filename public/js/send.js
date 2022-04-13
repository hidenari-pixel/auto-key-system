require("dotenv").config();

// 解錠のPOST
document.getElementById("open").onclick = () => {
  const json = { rotate: "1" };
  fetch(process.env.SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
};
// 施錠のPOST
document.getElementById("close").onclick = () => {
  const json = { rotate: "0" };
  fetch(process.env.SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
};
