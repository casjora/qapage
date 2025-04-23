document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded

  const qas = [
      {
          qaName: "Carlos Figueroa",
          location: "Tegucigalpa, Honduras",
          started: "2005, August, 7",
          Position: "QA Team Leader",
          pictureLoc: "images/qa-photos/carlos-f.jpg",
          account: ["Kelly Services","Cyracom","iTi","CLI"], // Array of accounts
          funFact: "Is secretly amazing at salsa dancing and loves hiking near Lake Yojoa."
      },
      {
          qaName: "Sarah Zelaya",
          location: "Tegucigalpa, Honduras",
          started: "2010, March, 15",
          Position: "QA Team Leader",
          pictureLoc: "images//qa-photos/sarah-z.jpg",
          account: ["Equiti","CLI"],
          funFact: "Collects vintage postcards from every city visited. Has over 300!"
      },
      {
          qaName: "Gabriela Diaz",
          location: "El Paraiso, Honduras",
          started: "2012, November, 22",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/gaby-d.jpg",
          account: ["Equiti"],
          funFact: "Can identify over 50 types of tea by smell alone. Favorite is Earl Grey."
      },
      {
          qaName: "Maria Contreras",
          location: "Monteria, Colombia",
          started: "2025, April, 7",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/maria-c.jpg",
          account: ["Equiti"],
          funFact: "Is a regional Chess champion and makes incredibly spicy biryani."
      },
      {
          qaName: "Daniela Gonzalez",
          location: "Cartagena, Colombia",
          started: "2025, April, 7",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/daniela-g.jpg",
          account: ["Equiti"],
          funFact: "Practices calligraphy and builds intricate Gundam models on weekends."
      },
      {
          qaName: "Valentina Valencia",
          location: "Armenia, Colombia",
          started: "2024, May, 02",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/valentina-v.jpg",
          account: ["Equiti"],
          funFact: "Speaks conversational Italian and makes the best homemade pasta carbonara."
      },
      {
          qaName: "Gregory Ermoff",
          location: "San Lorenzo, Paraguay",
          started: "2024, May, 02",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/gregory.jpg",
          account: ["Equiti"],
          funFact: "Once surfed with dolphins at Byron Bay (and has photos to prove it!)."
      },
      {
          qaName: "Jennifer Malaver",
          location: "Bogota, Colombia",
          started: "2024, May, 02",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/jennifer.jpg",
          account: ["Equiti"],
          funFact: "Expert baker known locally for her intricate Pysanky egg designs."
      },
      {
          qaName: "Rene Enamorado",
          location: "San Pedro Sula, Honduras",
          started: "2016, May, 5",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/rene.jpg",
          account: ["Equiti"],
          funFact: "Fascinated by ancient history; volunteers at the Egyptian Museum on Saturdays."
      },
      {
          qaName: "Hillary Cohen",
          location: "San Salvador, El Salvador",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/hillary.jpg",
          account: ["Equiti"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
        qaName: "Juan Guerrero",
        location: "Bogota, Colombia",
        started: "2025, February, 03",
        Position: "QA Analyst",
        pictureLoc: "images//qa-photos/juan-g.jpg",
        account: ["Equiti"],
        funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
    },
      {
          qaName: "Louik Ardila",
          location: "Bogota, Colombia",
          started: "2024, May, 02",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/louik.jpg",
          account: ["Kelly Services"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Daniel Castillo",
          location: "San Salvador, El Salvador",
          started: "2025, Feb, 26",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/daniel-casti.jpg",
          account: ["Kelly Services"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Lucia Tabora",
          location: "Tegucigalpa, Honduras",
          started: "2024, October, 01",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/lucia.jpg",
          account: ["Kelly Services"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Diego Oliva",
          location: "San Salvador, El Salvador",
          started: "2024, May, 02",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/diego.jpg",
          account: ["Kelly Services"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Gisela Morales",
          location: "San Salvador, El Salvador",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/gisela.jpg",
          account: ["Kelly Services"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Nemesis Alvarado",
          location: "Juticalpa, Honduras",
          started: "2025, April, 2",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/nemesis.jpg",
          account: ["Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Oblincks Richmond",
          location: "Port-au-Prince, Haiti ",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/oblincks.jpg",
          account: ["Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Meylin Velasquez",
          location: "Comayagua, Honduras",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/meylin.jpg",
          account: ["Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Daniel Castellanos",
          location: "San Pedro Sula, Honduras",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/dan-caste.jpg",
          account: ["Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Beyson Martinez",
          location: "San Pedro Sula, Honduras",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/beyson.jpg",
          account: ["iTi","Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Cristina Moreno",
          location: "Siguatepeque, Honduras",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/alma.jpg",
          account: ["CQ Fluency","Cyracom"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Ashley Landaverde",
          location: "Choluteca, Honduras",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images//qa-photos/ash-lan.jpg",
          account: ["CLI"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },
      {
          qaName: "Rafael Lopez",
          location: "Tegucigalpa, Honduras",
          started: "2024, April, 29",
          Position: "QA Coordinator",
          pictureLoc: "images//qa-photos/rafa-l.jpg",
          account: ["Equiti","Cyracom","iTi","Kelly Services","CLI","CQ Fluency"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      },

  ];

  const qaContainer = document.querySelector(".img-container");
  const filterControlsContainer = document.getElementById("filter-controls");

  // --- Function to get unique account names ---
  function getUniqueAccounts(qaList) {
      const accounts = new Set(); // Use a Set to automatically handle uniqueness
      qaList.forEach(qa => {
          qa.account.forEach(acc => accounts.add(acc));
      });
      return Array.from(accounts).sort(); // Convert Set to sorted array
  }

  // --- Function to create filter checkboxes ---
  function createFilterControls(accounts) {
      if (!filterControlsContainer) return; // Exit if container not found

      accounts.forEach(account => {
          const checkboxDiv = document.createElement('div');
          checkboxDiv.classList.add('filter-option'); // Add class for potential styling

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `filter-${account}`;
          checkbox.value = account;
          checkbox.classList.add('account-filter-checkbox'); // Class to identify these checkboxes

          const label = document.createElement('label');
          label.htmlFor = `filter-${account}`;
          label.textContent = account;

          checkboxDiv.appendChild(checkbox);
          checkboxDiv.appendChild(label);
          filterControlsContainer.appendChild(checkboxDiv);
      });

      // Add event listener to the container (event delegation)
      filterControlsContainer.addEventListener('change', handleFilterChange);
  }

  // --- Function to display QA cards ---
  function displayQACards(qasList) {
      if (!qaContainer) return; // Exit if container not found

      // Clear existing cards
      qaContainer.innerHTML = '';

      if (qasList.length === 0) {
          qaContainer.innerHTML = '<p>No QA members match the selected criteria.</p>';
          return;
      }

      qasList.forEach(qa => {
          let card = document.createElement("section");
          card.setAttribute("class", "qaPhoto");
          let img = document.createElement("img");
          let name = document.createElement("h3");
          let textBox = document.createElement("div");
          textBox.setAttribute("class", "textBox");
          let location = document.createElement("p");
          let startDate = document.createElement("p");
          let position = document.createElement("p");
          let accountsP = document.createElement("p"); // Element to show accounts
          let funF = document.createElement("p");

          name.textContent = qa.qaName;
          location.innerHTML = `<span class="label">Location:</span> ${qa.location}`;
          startDate.innerHTML = `<span class="label">Start Date:</span> ${qa.started}`;
          position.innerHTML = `<span class="label">Position:</span> ${qa.Position}`;
          accountsP.innerHTML = `<span class="label">Accounts:</span> ${qa.account.join(', ')}`; // Display accounts
          img.setAttribute("src", qa.pictureLoc);
          img.setAttribute("alt", qa.qaName);
          img.setAttribute("loading", "lazy");
          funF.innerHTML = `<span class="label">Fun Fact:</span> ${qa.funFact}`;

          card.appendChild(img);
          card.appendChild(textBox);
          textBox.appendChild(name);
          textBox.appendChild(location);
          textBox.appendChild(startDate);
          textBox.appendChild(position);
          textBox.appendChild(accountsP); // Add accounts paragraph
          textBox.appendChild(funF);

          qaContainer.appendChild(card);
      });
  }

  // --- Function to handle filter changes ---
  function handleFilterChange() {
      // Get all checked checkboxes
      const checkedBoxes = filterControlsContainer.querySelectorAll('.account-filter-checkbox:checked');
      const selectedAccounts = Array.from(checkedBoxes).map(cb => cb.value);

      let filteredQAs;

      // If no accounts are selected, show all (Complete Team)
      if (selectedAccounts.length === 0) {
          filteredQAs = qas;
      } else {
          // Filter the main qas array
          filteredQAs = qas.filter(qa => {
              // Check if *any* of the QA's accounts are in the selectedAccounts array
              return qa.account.some(acc => selectedAccounts.includes(acc));
          });
      }

      // Update the displayed cards
      displayQACards(filteredQAs);
  }

  // --- Initial Setup ---
  const uniqueAccounts = getUniqueAccounts(qas);
  createFilterControls(uniqueAccounts);
  displayQACards(qas); // Display all QAs initially ("Complete Team")

}); // End of DOMContentLoaded listener