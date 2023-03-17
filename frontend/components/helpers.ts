import { useRouter } from "next/router";

export const getBreadcrumbs = (pathName: string[]) => {
  const router = useRouter();

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
