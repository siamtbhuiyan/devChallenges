import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="container mx-auto py-14">
      <h1 className="font-poppins text-2xl font-medium text-gray-900">Buttons</h1>
      <Button title="<Button />" btnTitle="Default"/>
      <Button title="<Button variant='outline'/>" btnTitle="Default" variant="outline"/>
      <Button title="<Button variant='text'/>" btnTitle="Default" variant="text"/>
    </div>
  )
};

export default App;
