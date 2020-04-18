function onThemeToggle(theme) {
  document.body.className = theme;
}

function onColorToggle(hex) {
  var root = document.documentElement;
  root.style.setProperty("--accent", hex);
}

function updateScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

window.onscroll = function () {
  updateScroll();
};

// Load github repos
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.github.com/users/damiandominella/repos", true);
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4) {
    if (xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var html = "<ul>";

      for (item of data) {
        html += `<li><a href=${item.html_url} target="_blank"><span class="name">${item.name}</span><span class="desc">${item.description}</span></a></li>`;
      }

      html += "</ul>";

      document.getElementById("github-repositories").innerHTML = html;
    }
  }
};
xmlhttp.send(null);