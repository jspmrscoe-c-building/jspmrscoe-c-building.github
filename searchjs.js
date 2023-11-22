let searchable = [
    "<a href='ground.html'>C-001(Classroom)</a>",
    "<a href='ground.html'>C-002(Faculty Room)</a>",
    "<a href='ground.html'>C-003(Faculty Room)</a>",
    "<a href='ground.html'>Gents Toilet</a>",
    "<a href='ground.html'>C-004(Graphics Lab)</a>",
    "<a href='ground.html'>C-005(Research Lab)</a>",
    "<a href='ground.html'>C-006(Machine Lab)</a>",
    "<a href='ground.html'>Ladies Toilet</a>",
    "<a href='ground.html'>C-008(Faculty Room)</a>",
    "<a href='ground.html'>C-009(Faculty Room)</a>",
    "<a href='ground.html'>C-010(Faculty Room)</a>",
    
    "<a href='1st.html'>C-101(Faculty Room)</a>",
    "<a href='1st.html'>C-102(Classroom)</a>",
    "<a href='1st.html'>C-103(Faculty Room)</a>",
    "<a href='1st.html'>Gents Toilet</a>",
    "<a href='1st.html'>C-104(Lab)</a>",
    "<a href='1st.html'>C-105(Lab)</a>",
    "<a href='1st.html'>C-106(Basic Electrical Engineering Lab)</a>",
    "<a href='1st.html'>C-107(High Voltage Lab)</a>",
    "<a href='1st.html'>Store Room</a>",
    "<a href='1st.html'>C-108(Store Room)</a>",
    "<a href='1st.html'>C-109(EV-Club)</a>",
    "<a href='1st.html'>C-110(Classroom)</a>",
    "<a href='1st.html'>C-111(Faculty Room)</a>",

    "<a href='2nd.html'>C-201(Faculty Room)</a>",
    "<a href='2nd.html'>C-202(Classroom)</a>",
    "<a href='2nd.html'>C-203(HOD Electrical)</a>",
    "<a href='2nd.html'>C-204(Faculty Room)</a>",
    "<a href='2nd.html'>Ladies Toilet</a>",
    "<a href='2nd.html'>C-205(Computer Lab)</a>",
    "<a href='2nd.html'>C-206(Power Electronics Lab)</a>",
    "<a href='2nd.html'>C-207(Control System Lab)</a>",
    "<a href='2nd.html'>C-208(Power System Lab)</a>",
    "<a href='2nd.html'>Department Library</a>",
    "<a href='2nd.html'>Store Room</a>",
    "<a href='2nd.html'>C-209(Cipher)</a>",
    "<a href='2nd.html'>C-210(Classroom)</a>",
    "<a href='2nd.html'>C-211(Faculty Room)</a>",

    "<a href='3rd.html'>C-301(Faculty Room)</a>",
    "<a href='3rd.html'>C-302(Classroom)</a>",
    "<a href='3rd.html'>C-303(Faculty Room)</a>",
    "<a href='3rd.html'>C-304(HOD Mechanical)</a>",
    "<a href='3rd.html'>Gents Toilet</a>",
    "<a href='3rd.html'>Auditorium</a>",
    "<a href='3rd.html'>C-306(Control Room)</a>",
    "<a href='3rd.html'>C-307(Faculty Room)</a>",
    "<a href='3rd.html'>C-308(Central Store)</a>",
    "<a href='3rd.html'>C-309(Classroom)</a>",
    "<a href='3rd.html'>C-310(Faculty Room)</a>",

    "<a href='4th.html'>Gymkhana</a>",
    "<a href='4th.html'>Hip-Hoppers</a>",
    "<a href='4th.html'>Terrace</a>",
    "<a href='4th.html'>Rangabhumi</a>",
    "<a href='4th.html'>Changing Room</a>",
    "<a href='4th.html'>Store Room</a>",
 

  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li><a>${item}</a></li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  