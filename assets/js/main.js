const avatar = document.getElementById("avatar");
const banner = document.getElementById("banner");
const popupAvatar = document.getElementById("popupAvatar");
const popupBanner = document.getElementById("popupBanner");
const popup = document.getElementById("popup"); 
const note = document.getElementById("note");
const music = document.getElementById("music");

note.addEventListener("click", () => {
  if(music.paused){
    music.play();
    avatar.classList.add("spin");
    note.style.color = "var(--primary)";
    
  } else {
    music.pause();
    avatar.classList.remove("spin");
    note.style.color = "var(--text-muted)";
  }
});

avatar.addEventListener("click", () => {
  popup.style.display = "flex";
  popupAvatar.style.display = "block";
  popupBanner.style.display = "none";
});

banner.addEventListener("click", () => {
  popup.style.display = "flex";
  popupBanner.style.display = "block"
  popupAvatar.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});