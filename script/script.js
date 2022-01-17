let nav_icons = Array.from(document.querySelectorAll('.icon'));
let selected_index = 0;

console.log("navs: "+nav_icons.length)
nav_icons.forEach(element=>{
  element.addEventListener('click',(e)=>{
    const index = nav_icons.indexOf(element)
    select_icon(index);
    // console.log("clicked: "+in);
  })
})

function select_icon(i){
  const selected = nav_icons[selected_index];
  const next = nav_icons[i];
  console.log("Before selected: "+selected.classList);
  selected.classList.replace('material-icons','material-icons-outlined')
  next.classList.replace('material-icons-outlined','material-icons')
  selected_index = i;
  console.log("After selected: "+selected.classList);
}

function openApp(pkgName) {
  const url = 'https://play.google.com/store/apps/details?id='+pkgName;
  window.open(url, '_blank').focus();
 }
 
