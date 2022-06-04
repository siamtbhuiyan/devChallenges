import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="container mx-auto py-14">
      <h1 className="font-poppins text-2xl font-medium text-gray-900">Buttons</h1>
      <div className="grid grid-cols-2 py-6">
        <Button title="<Button />" btnTitle="Default"/>
        <Button title="&:hover, &:focus" btnTitle="Default"/>
      </div>
      <div className="grid grid-cols-2 py-6">
        <Button title="<Button variant='outline'/>" btnTitle="Default" variant="outline"/>
        <Button title="&:hover, &:focus" btnTitle="Default" variant="outline"/>
      </div>
      <div className="grid grid-cols-2 py-6">
        <Button title="<Button variant='text'/>" btnTitle="Default" variant="text"/>
        <Button title="&:hover, &:focus" btnTitle="Default" variant="text"/>
      </div>
      <div className="grid grid-cols-1 py-6">
        <Button title="<Button disableShadow />" color="primary" disableShadow />
      </div>
      <div className="grid grid-cols-2 py-6">
        <Button title="<Button disabled />" disabled btnTitle="Disabled"/>
        <Button title="<Button variant=”text” disabled />" disabled variant="text" btnTitle="Disabled"/>
      </div>
      <div className="grid grid-cols-2 py-6">
        <Button title="<Button startIcon=AddShoppingCart />" color="primary" startIcon="AddShoppingCart"/>
        <Button title="<Button endIcon=AddShoppingCart />" color="primary" endIcon="AddShoppingCart"/>
      </div>
      <div className="grid grid-cols-3 py-6">
        <Button title="<Button size=”sm” />" color="primary" size="sm"/>
        <Button title="<Button size=”md” />" color="primary" size="md"/>
        <Button title="<Button size=”lg” />" color="primary" size="lg"/>
      </div>
      <div className="grid grid-cols-4 py-6">
        <Button title="<Button color=”default” />" color="default"/>
        <Button title="<Button color=”primary” />" color="primary"/>
        <Button title="<Button color=”secondary” />" color="secondary"/>
        <Button title="<Button color=”danger” />" color="danger"/>
      </div>
      <div className="grid grid-cols-4 pt-6 pb-20">
        <Button title="&:hover, &:focus" color="default"/>
        <Button title="&:hover, &:focus" color="primary"/>
        <Button title="&:hover, &:focus" color="secondary"/>
        <Button title="&:hover, &:focus" color="danger"/>
      </div>
      <a href="https://mui.com/material-ui/material-icons/" className="text-gray-400">Icons: https://mui.com/material-ui/material-icons/</a>
      <p className="pt-12 text-gray-400">created by <a href="https://devchallenges.io/portfolio/siamtbhuiyan" className="font-bold">@siamtbhuiyan</a> - devChallenges</p>
    </div>
  )
};

export default App;
