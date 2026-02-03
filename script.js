function download() {
  const id = document.getElementById("assetId").value.trim();
  const status = document.getElementById("status");

  if (!id) {
    status.textContent = "Please enter an Asset ID";
    return;
  }

  status.textContent = "Redirecting...";
  window.location.href =
    "https://assetdelivery.roblox.com/v1/asset/?id=" + id;
}
