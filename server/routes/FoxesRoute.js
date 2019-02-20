fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(json => console.log(json));

    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
      }
    
      function append(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one
      }

      const ul = document.getElementById("root")
      then(function(data) {
        let foxes = data.results; // Get the results
        return foxes.map(function(fox) { // Map through the results and for each run the code below
          let li = createNode('li'), //  Create the elements we need
              img = createNode('img'),
              span = createNode('span');
          img.src = fox.picture.medium;  // Add the source of the image to be the src of the img element
          append(li, img); // Append all our elements
          append(li, span);
          append(ul, li);
        })
      })
    