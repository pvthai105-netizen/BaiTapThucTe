const data = {
  success: {
    icon: "✓",
    title: "SUCCESS",
    mess: "Thành công rồi đó bro.",
  },
  error: {
    icon: "✕",
    title: "ERROR",
    mess: "Không thể kết nối bro.",
  },
  info: {
    icon: "M",
    title: "INFO",
    mess: "Đang cập nhật bro.",
  },
  warning: {
    icon: "!",
    title: "WARNING",
    mess: "Không ổn đâu bro.",
  },
};

const showToast = (type) => {
  let container = document.getElementById("container");
  let data = data[type];
  let toast = document.createElement("div");
  if (container.children.length >= 4) {
    return;
  }

  toast.className = `toast toast-${type}`;
  let check = container.querySelectorAll(`.toast-${type}`);
  if (check.length >= 1) {
    return;
  }

  toast.innerHTML = `
    <div class="toast-icon">${data.icon}</div>
    <div class="toast-body">
      <div class="toast-title">${data.title}</div>
      <div class="toast-msg">${data.mess}</div>
    </div>
    <button class="toast-close" onclick="removeToast(this.parentElement)">X</button>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);
  let timer = setTimeout(() => remove(toast), 7000);
  toast._timer = timer;
};

const remove = (toast) => {
  if (!toast) {
    return;
  }

  clearTimeout(toast._timer);
  toast.classList.add("removing");
  setTimeout(() => toast.remove(), 100);
};
