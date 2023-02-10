const Projects = () => {
  return (
    <div>
        <div className="project">
            <div className="p-thumbnail"><img src="images/checkout.png" alt="" /></div>
            <div className="p-details">
                <div className="font-medium text-2xl text-gray-800">Checkout</div>
                <div className="font-medium text-gray-500 py-4">In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                <div className="flex">
                    <button className="transition mr-3 rounded-xl font-medium text-lg text-white bg-blue-600 border border-blue-600 border-solid py-3 px-11 hover:bg-white hover:text-blue-600">Demo</button>
                    <button className="transition rounded-xl font-medium text-lg text-blue-600 border border-blue-600 border-solid py-3 px-11 hover:bg-blue-600 hover:text-white">Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects