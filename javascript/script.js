var buttonsubmit = document.getElementById("btsubmit");
var buttonvisit = document.getElementById("bgvisit");
var buttondelete = document.getElementById("bgdelete");
var site_name = document.getElementById("sitename");
var site_url = document.getElementById("siteurl");
var massage = document.getElementById("note");
buttonsubmit.onclick = addsite;

var list = [];
if (localStorage.getItem("site") !== null) {
  list = JSON.parse(localStorage.getItem("site"));
  display();
} else {
  list = [];
}
function addsite() {
  var site = {
    pname: site_name.value,
    purl: site_url.value,
  };
  if (isValidUrl(site.purl)) {
    list.push(site);
    localStorage.setItem("site", JSON.stringify(list));
    display();
    reset();
  } else {
    massage.innerHTML = "URL IS Not Validate";
  }
}
function display() {
  var box = ``;
  for (var i = 0; i < list.length; i++) {
    box += `
      <div class="col-3 pt-2 fw-bolder">
      ${i + 1}
    </div>
    <div class="col-3 fw-bolder pt-1 fs-5">
   ${list[i].pname}
    </div>
    <div class="col-3 fw-bolder pt-1">
      <button class="fs-5 bgvisit text-white px-3 py-1 rounded-3" id="bgvisit">
        <i class="fa-solid fa-eye " style="color: #ffffff;"></i>
    <a href="${list[i].purl}" target="_blank">Visit</a> 
      </button>
    </div>
    <div class="col-3 fw-bolder pt-1">
      <button onclick="Delete(${i})" class="fs-5 border-0 bg-danger bgdelete text-white px-3 py-1 rounded-3" id="bgdelete">
        <i class="fa-solid fa-trash"></i>
        Delete
      </button>
    </div> 
   <div class="line"></div>
      `;
  }
  document.getElementById("prow").innerHTML = box;
}

function reset() {
  site_name.value = null;
  site_url.value = null;
}
var current;
function Delete(index) {
  current = index;
  list.splice(index, 1);
  display();
  localStorage.setItem("site", JSON.stringify(list));
}

// buttonsubmit.onsubmit = function () {
//   let urlinput = buttonsubmit.value;
//   let regular = new RegExp(
//     "^(https?:\\/\\/)?" + // protocol
//       "(((a-z\\d*)\\.)+[a-z]{2,}|" + // domain name and extension
//       "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//       "(\\:\\d+)?" + // port
//       "(\\/[-a-z\\d%_.~+]*)*" + // path
//       "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   );
//   let validate = regular.test(urlinput);
//   if (validate === false) {
//     return false;
//   }
//   return true;
// };
function isValidUrl(url) {
  const pattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  // const urls = `https://www.freecodecamp.org
  // http://www.freecodecamp.org
  // google.co.uk
  // facebook.net
  // google.com.ng
  // google.com.in
  // freecodecamp.org
  // yoruba.freecodecamp.org
  // freecodecamp.org/yoruba

  // http://www.freecodecamp.org/news
  // freecodecamp.org/news

  // chinese.freecodecamp.org
  // https://chinese.freecodecamp.org`;

  // console.log(pattern.test(urls)); //true;
  // ss2-2

  // Conclusion
  // The regular expression patterns for matching a URL depend on your specific need – since URLs can be in various forms. So, while writing the patterns for the URL, you have to write them to suit the way you expect the URL.

  // Writing a regex that matches all kinds of URLs works, but it's not the best way to because it's very hard to read and debug.

  return pattern.test(url);
}
