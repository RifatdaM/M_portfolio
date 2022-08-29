// set the target element that will be collapsed or expanded (eg. navbar menu)
const targetEl = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const triggerEl = document.getElementById('triggerEl');

// optional options with default values and callback functions
const options = {
  triggerEl: triggerEl,
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};
/*
* targetEl: required
* options: optional
*/
const collapse = new Collapse(targetEl, options);
// show the target element
collapse.expand();

// hide the target element
collapse.collapse();
