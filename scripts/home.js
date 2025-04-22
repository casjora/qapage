document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded

  const qas = [
      {
          qaName: "Aba Nigeria",
          location: "San Pedro Sula, Honduras",
          started: "2005, August, 7",
          Position: "QA Team Leader",
          pictureLoc: "images/qa1.jpg",
          account: ["Kelly","Cyracom","iTi"], // Array of accounts
          funFact: "Is secretly amazing at salsa dancing and loves hiking near Lake Yojoa."
      },
      {
          qaName: "Maria Garcia",
          location: "Mexico City, Mexico",
          started: "2010, March, 15",
          Position: "QA Team Leader",
          pictureLoc: "images/qa2.jpg",
          account: ["Equiti"],
          funFact: "Collects vintage postcards from every city visited. Has over 300!"
      },
      {
          qaName: "John Smith",
          location: "London, UK",
          started: "2012, November, 22",
          Position: "QA Analyst",
          pictureLoc: "images/qa3.jpg",
          account: ["Cyracom","iTi"],
          funFact: "Can identify over 50 types of tea by smell alone. Favorite is Earl Grey."
      },
      {
          qaName: "Priya Sharma",
          location: "Bangalore, India",
          started: "2018, June, 1",
          Position: "QA Analyst",
          pictureLoc: "images/qa4.jpg",
          account: ["Cyracom"],
          funFact: "Is a regional Chess champion and makes incredibly spicy biryani."
      },
      {
          qaName: "Kenji Tanaka",
          location: "Tokyo, Japan",
          started: "2015, September, 10",
          Position: "QA Analyst",
          pictureLoc: "images/qa5.jpg",
          account: ["Equiti"],
          funFact: "Practices calligraphy and builds intricate Gundam models on weekends."
      },
      {
          qaName: "Fatima Rossi",
          location: "Rome, Italy",
          started: "2019, February, 28",
          Position: "QA Analyst",
          pictureLoc: "images/qa6.jpg",
          account: ["Kelly"],
          funFact: "Speaks conversational Italian and makes the best homemade pasta carbonara."
      },
      {
          qaName: "David Miller",
          location: "Sydney, Australia",
          started: "2011, July, 4",
          Position: "QA Analyst",
          pictureLoc: "images/qa7.jpg",
          account: ["Kelly","Equiti"],
          funFact: "Once surfed with dolphins at Byron Bay (and has photos to prove it!)."
      },
      {
          qaName: "Sofia Petrova",
          location: "Kyiv, Ukraine",
          started: "2021, January, 19",
          Position: "QA Analyst",
          pictureLoc: "images/qa8.jpg",
          account: ["Equiti"],
          funFact: "Expert baker known locally for her intricate Pysanky egg designs."
      },
      {
          qaName: "Ahmed Hassan",
          location: "Cairo, Egypt",
          started: "2016, May, 5",
          Position: "QA Analyst",
          pictureLoc: "images/qa9.jpg",
          account: ["Equiti"],
          funFact: "Fascinated by ancient history; volunteers at the Egyptian Museum on Saturdays."
      },
      {
          qaName: "Isabelle Dubois",
          location: "Paris, France",
          started: "2013, October, 31",
          Position: "QA Analyst",
          pictureLoc: "images/qa10.jpg",
          account: ["Kelly"],
          funFact: "Has a small but growing collection of vintage French comic books (bandes dessinées)."
      }
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