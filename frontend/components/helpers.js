export const getBreadcrumbs = (pathName, router) => {
  const breadcrumbs = router.pathname
    .split("/")
    .filter(
      pathname =>
        pathname === "library-related" ||
        pathname === "frontend-related" ||
        pathname === "data-analysis"
    );

  breadcrumbs.unshift("home");
  breadcrumbs.push(...pathName);

  return breadcrumbs;
};
