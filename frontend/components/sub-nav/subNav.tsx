import { useEffect } from "react";
import NavOptions from "./nav-options/navOptions";
import styles from "./subNav.module.css";

const SubNav = (props: { secondary: string; tertiary: string }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const { secondary, tertiary } = props;

  const passDownProps = {
    secondary,
    tertiary,
  };

  if (secondary === "library-related") {
    return (
      <section id='sub-nav' className='mt-5 pt-5'>
        <nav className='container'>
          <div
            className='mx-auto nav nav-tabs nav-fill'
            id='nav-tab'
            role='tablist'>
            <button
              className={`nav-link active ${styles.subNavBtn}`}
              id='nav-library-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-library'
              type='button'
              role='tab'
              aria-controls='nav-library'
              aria-selected='true'>
              Library-Related
            </button>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-frontend-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-frontend'
              type='button'
              role='tab'
              aria-controls='nav-frontend'
              aria-selected='false'>
              Frontend-Related
            </button>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-data-analysis-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-data-analysis'
              type='button'
              role='tab'
              aria-controls='nav-data-analysis'
              aria-selected='false'>
              Data Analysis
            </button>
          </div>
        </nav>

        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-library'
            role='tabpanel'
            aria-labelledby='nav-library-tab'
            tabIndex={0}>
            <NavOptions {...passDownProps} />
          </div>
          <div
            className='tab-pane fade'
            id='nav-frontend'
            role='tabpanel'
            aria-labelledby='nav-frontend-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "frontend-related", tertiary: "undefined" }}
            />
          </div>
          <div
            className='tab-pane fade'
            id='nav-data-analysis'
            role='tabpanel'
            aria-labelledby='nav-data-analysis-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "data-analysis", tertiary: "undefined" }}
            />
          </div>
        </div>
      </section>
    );
  } else if (secondary === "frontend-related") {
    return (
      <section id='sub-nav' className='mt-5 pt-5'>
        <nav className='container'>
          <div
            className='mx-auto nav nav-tabs nav-fill'
            id='nav-tab'
            role='tablist'>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-library-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-library'
              type='button'
              role='tab'
              aria-controls='nav-library'
              aria-selected='true'>
              Library-Related
            </button>
            <button
              className={`nav-link active ${styles.subNavBtn}`}
              id='nav-frontend-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-frontend'
              type='button'
              role='tab'
              aria-controls='nav-frontend'
              aria-selected='false'>
              Frontend-Related
            </button>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-data-analysis-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-data-analysis'
              type='button'
              role='tab'
              aria-controls='nav-data-analysis'
              aria-selected='false'>
              Data Analysis
            </button>
          </div>
        </nav>

        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade'
            id='nav-library'
            role='tabpanel'
            aria-labelledby='nav-library-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "library-related", tertiary: "undefined" }}
            />
          </div>
          <div
            className='tab-pane fade show active'
            id='nav-frontend'
            role='tabpanel'
            aria-labelledby='nav-frontend-tab'
            tabIndex={0}>
            <NavOptions {...passDownProps} />
          </div>
          <div
            className='tab-pane fade'
            id='nav-data-analysis'
            role='tabpanel'
            aria-labelledby='nav-data-analysis-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "data-analysis", tertiary: "undefined" }}
            />
          </div>
        </div>
      </section>
    );
  } else if (secondary === "data-analysis") {
    return (
      <section id='sub-nav' className='mt-5 pt-5'>
        <nav className='container'>
          <div
            className='mx-auto nav nav-tabs nav-fill'
            id='nav-tab'
            role='tablist'>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-library-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-library'
              type='button'
              role='tab'
              aria-controls='nav-library'
              aria-selected='true'>
              Library-Related
            </button>
            <button
              className={`nav-link ${styles.subNavBtn}`}
              id='nav-frontend-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-frontend'
              type='button'
              role='tab'
              aria-controls='nav-frontend'
              aria-selected='false'>
              Frontend-Related
            </button>
            <button
              className={`nav-link active ${styles.subNavBtn}`}
              id='nav-data-analysis-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-data-analysis'
              type='button'
              role='tab'
              aria-controls='nav-data-analysis'
              aria-selected='false'>
              Data Analysis
            </button>
          </div>
        </nav>

        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade'
            id='nav-library'
            role='tabpanel'
            aria-labelledby='nav-library-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "library-related", tertiary: "undefined" }}
            />
          </div>
          <div
            className='tab-pane fade'
            id='nav-frontend'
            role='tabpanel'
            aria-labelledby='nav-frontend-tab'
            tabIndex={0}>
            <NavOptions
              {...{ secondary: "frontend-related", tertiary: "undefined" }}
            />
          </div>
          <div
            className='tab-pane fade show active'
            id='nav-data-analysis'
            role='tabpanel'
            aria-labelledby='nav-data-analysis-tab'
            tabIndex={0}>
            <NavOptions {...passDownProps} />
          </div>
        </div>
      </section>
    );
  }
};

export default SubNav;
