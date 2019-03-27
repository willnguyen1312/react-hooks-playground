// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import "jest-dom/extend-expect";
// this adds jest-dom's custom assertions
import "react-testing-library/cleanup-after-each";
