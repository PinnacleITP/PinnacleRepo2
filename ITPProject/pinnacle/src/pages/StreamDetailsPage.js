import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function StreamDetailsPage() {
  return (
    <div className="text-white">
      <Header navid='streams'/>
      <h1>Stream Details Page</h1>
    </div>
  )
}
