(function () {
  function openTagFromHash() {
    if (!window.location.hash) {
      return;
    }

    var hash = decodeURIComponent(window.location.hash.substring(1));
    var target = document.getElementById(hash);

    if (!target) {
      return;
    }

    /*
     * Legacy tag anchors can redirect to their new
     * canonical tag.
     */
    if (target.classList.contains("tag-alias-anchor")) {
      var canonicalId = target.getAttribute("data-tag-target");
      var canonicalTarget = document.getElementById(canonicalId);

      if (canonicalTarget) {
        target = canonicalTarget;

        if (window.history && window.history.replaceState) {
          window.history.replaceState(
            null,
            "",
            "#" + canonicalId
          );
        }
      }
    }

    if (target.tagName.toLowerCase() === "details") {
      target.open = true;

      window.requestAnimationFrame(function () {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", openTagFromHash);
  window.addEventListener("hashchange", openTagFromHash);
})();