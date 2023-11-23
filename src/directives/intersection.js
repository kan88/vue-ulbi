export default {
  name: "intersection",
  mounted(element, binding) {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      // if (entries[0].isIntersecting && this.page < this.totalPages) {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  },
};
