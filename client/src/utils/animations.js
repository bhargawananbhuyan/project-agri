export const fadeOpacity = ({ duration, direction, amount }) =>
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.animate(
          [
            {
              opacity: 0,
              transform:
                direction === "left"
                  ? `translateX(-2.5rem)`
                  : direction === "right"
                  ? "translateX(2.5rem)"
                  : direction === "bottom"
                  ? `translateY(${amount || 2.5}rem)`
                  : "",
            },
            {
              opacity: 1,
              transform:
                direction === "left" || direction === "right"
                  ? "translateX(0rem)"
                  : direction === "bottom"
                  ? "translateY(0rem)"
                  : "",
            },
          ],
          { duration }
        );
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      // threshold: 0.5,
    }
  );

export const fade = ({ duration, direction }) =>
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.animate(
          [
            {
              transform:
                direction === "left"
                  ? "translateX(-2.5rem)"
                  : direction === "right"
                  ? "translateX(2.5rem)"
                  : direction === "bottom"
                  ? "translateY(2.5rem)"
                  : "",
            },
            {
              transform:
                direction === "left" || direction === "right"
                  ? "translateX(0rem)"
                  : direction === "bottom"
                  ? "translateY(0rem)"
                  : "",
            },
          ],
          { duration }
        );
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      // threshold: 0.5,
    }
  );

export const extend = ({ width, duration }) =>
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      setTimeout(() => {
        entry.target.animate([{ width: 0 }, { width }], {
          duration,
          fill: "forwards",
        });
        if (entry.isIntersecting) observer.unobserve(entry.target);
      }, 1000);
    });
  });

export const flash = ({ duration }) =>
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      entry.target.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration,
      });
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });

export const hideAndShow = ({ duration }) =>
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(2rem)" },
          { opacity: 1, transform: "translateY(0rem)" },
        ],
        { duration }
      );
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  });
