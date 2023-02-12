const Projects = ({ project }) => {
  if (project === "Responsive") {
    return (
      <div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/checkout.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Checkout</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                  <div className="flex">
                      <a href="https://checkout-page-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Responsive%20Web%20Developer/Checkout%20Page" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/edie.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Agency Homepage</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                  <div className="flex">
                      <a href="https://edie-homepage-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Responsive%20Web%20Developer/Edie%20Homepage" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/gallery.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">My Gallery</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                  <div className="flex">
                      <a href="https://my-gallery-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Responsive%20Web%20Developer/My%20Gallery" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  else if (project === "React") {
    return (
      <div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/button.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Button Components</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with React a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://button-component-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/button-component" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/quote.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Quote Generator</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with React a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://quote-generator-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/quote-generator" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/todo.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Todo App</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with React a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://todo-app-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/todo-app" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/input.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Input Components</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with React a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://input-component-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/input-component" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/windbnb.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Windbnb</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with Vue a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://windbnb-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/windbnb" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="p-thumbnail"><img className="h-full w-full object-cover rounded-xl" src="images/country.png" alt="" /></div>
              <div className="p-details">
                  <div className="font-medium text-lg sm:text-2xl text-gray-800">Country Quiz</div>
                  <div className="font-medium text-gray-500 py-4 text-xs sm:text-base">In this project, I work with Vue a web app. The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit, amet consectetur</div>
                  <div className="flex">
                      <a href="https://country-quiz-000.netlify.app/" target="_blank" className="btn-demo">Demo</a>
                      <a href="https://github.com/siamtbhuiyan/devChallenges/tree/main/Front-end%20Developer/country-quiz" target="_blank" className="btn-code">Code</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Projects