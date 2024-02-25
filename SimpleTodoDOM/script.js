let inpu = document.getElementById("inputField");
let sub = document.querySelector(".submit");
let prevInpu = document.querySelector(".prevInputs");

const addEle = () => {
  const ele = document.createElement("p");
  ele.style.fontSize = "30px";
  ele.innerHTML = inpu.value;
  prevInpu.append(ele);

  inpu.value = "";
};

prevInpu.addEventListener("click", (e) => {
  e.target.remove();
});
