// Button Pointer
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.style.cursor = "pointer";
});

// Heart Icons Functionality
const icons = document.querySelectorAll(".fa-heart");
let heartElement = document.getElementById("liveNumber");
let heartValue = parseInt(heartElement.textContent);

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    heartValue++;
    heartElement.textContent = heartValue;
  });
});

// Call Buttons Functionality
const callButtons = document.querySelectorAll("#callButton");
let coinElement = document.getElementById("callNumber");
let coinValue = parseInt(coinElement.textContent);
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");
console.log(coinValue);

callButtons.forEach((cb) => {
  cb.addEventListener("click", () => {
    if (coinValue < 20) {
      alert("You have insufficient coin.");
      return;
    }

    const card = cb.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent.trim();
    const serviceNumber = card
      .querySelector(".service-number")
      .textContent.trim();

    coinValue -= 20;
    coinElement.textContent = coinValue;
    let now = new Date();
    now = now.toLocaleTimeString();

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between items-center my-2">
      <div>
        <h4 class="hind-madurai-font font-bold text-[12px]">
          ${serviceName}
        </h4>
        <p class="hind-madurai-font text-gray-500 text-[12px]">${serviceNumber}</p>
      </div>
      <div class="text-[12px]">${now}</div>
    </div>`;
    historyList.appendChild(div);
  });
});

clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  console.log("ami kaj krteci");
});

// Copy Buttons Functionality
const copyButtons = document.querySelectorAll("#copyButton");
const copyElement = document.getElementById("copyNumber");
let copyValue = parseInt(copyElement.textContent);

copyButtons.forEach((cpyBtn) => {
  cpyBtn.addEventListener("click", () => {
    copyValue++;
    copyElement.textContent = copyValue;
    const card = cpyBtn.closest(".card");
    const textToCopy = card.querySelector(".service-number").textContent.trim();
    navigator.clipboard.writeText(textToCopy);
    alert(`Copied: ${textToCopy}`);
  });
});
