const genBreadcrumb = () => {
  // eslint-disable-next-line no-undef
  const URL_ARR = window.location.pathname.split('/');
  return URL_ARR.map((_, index) => {
    const CPY = [...URL_ARR];
    return {
      path: index === 0 ? '/' : CPY.splice(0, index + 1).join('/')
    };
  });
};

export default genBreadcrumb;
