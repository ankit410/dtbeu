const select = document.querySelector('#language-selector')

select.addEventListener('change', (event) => {
  let tempSelect = document.createElement('select'),
      tempOption = document.createElement('option');

  tempOption.textContent = event.target.options[event.target.selectedIndex].text;
  tempSelect.style.cssText += `
      visibility: hidden;
      position: fixed;
      `;
  tempSelect.appendChild(tempOption);
  event.target.after(tempSelect);
  
  const tempSelectWidth = tempSelect.getBoundingClientRect().width;
  event.target.style.width = `${tempSelectWidth + 28}px`;
  tempSelect.remove();
});

select.dispatchEvent(new Event('change'));