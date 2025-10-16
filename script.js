const followButton = document.querySelector(`[data-testid="follow-button"]`);

followButton.addEventListener("click", () => {
  const isFollowing = followButton.innerText.toLowerCase() === "following";
  followButton.innerText = isFollowing ? "Follow" : "Following";
  followButton.classList.toggle("following", !isFollowing);
});
