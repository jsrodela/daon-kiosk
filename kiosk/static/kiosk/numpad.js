let name = document.getElementById('name')

btns = document.querySelectorAll('.num_btn');
for (let btn of btns) {
  btn.addEventListener('click', function () {
      if (name.value.length < 5) {
      name.value = name.value + btn.children[0].innerText;
    }
  })
}