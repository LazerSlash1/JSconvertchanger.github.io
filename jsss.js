console.log("Login");
console.log("Passwd: # ");
console.log("User: # ");

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        alert('Nuh uh :P');

    }
    
    return false;

};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  

  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  });
  
 
