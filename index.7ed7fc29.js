var ref={backdropVideo:document.querySelector(".backdrop-video"),openModalVideoBtn:document.querySelector("[data-video-open]"),closeModalVideoBtn:document.querySelector("[data-video-close]"),modalVideo:document.querySelector("[data-video]")},backdropVideo=ref.backdropVideo,openModalVideoBtn=ref.openModalVideoBtn,closeModalVideoBtn=ref.closeModalVideoBtn,modalVideo=ref.modalVideo;function openModalVideo(){modalVideo.classList.toggle("is-hidden-video"),document.querySelector("body").classList.toggle("js-body-scroll"),backdropVideo.addEventListener("click",closeModalVideoClick),window.addEventListener("keydown",closeModalVideoEsc)}function closeModalVideo(){modalVideo.classList.toggle("is-hidden-video"),document.querySelector("body").classList.toggle("js-body-scroll"),backdropVideo.removeEventListener("click",closeModalVideoClick),window.removeEventListener("keydown",closeModalVideoEsc)}function closeModalVideoClick(o){o.target===backdropVideo&&closeModalVideo()}function closeModalVideoEsc(o){"Escape"===o.code&&closeModalVideo()}openModalVideoBtn.addEventListener("click",openModalVideo),closeModalVideoBtn.addEventListener("click",closeModalVideo);
//# sourceMappingURL=index.7ed7fc29.js.map
