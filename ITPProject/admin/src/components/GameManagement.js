import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GameDetailcard from "./GameDetailcard";
import SearchError from "../assets/animations/searchnotfound.webm";
import "../pages/styles/extarnal.css";

export default function GameManagement() {
  var pageid = "game";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [configurations, setConfiguration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [type, setType] = useState("action");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [releasdate, setReleasDate] = useState("");
  const navigate = useNavigate();

  const [itemId, setitemId] = useState("");
  const [itemname, setitemName] = useState("");
  const [itemgameImageUrl, setitemgameImageUrl] = useState("");
  const [itemconfigurations, setitemConfiguration] = useState("");
  const [itemdescription, setitemDescription] = useState("");
  const [itemprice, setitemPrice] = useState(0);
  const [itemdownloadCount, setitemDownloadCount] = useState(0);
  const [itemtype, setitemType] = useState("action");
  const [itemdeveloper, setitemDeveloper] = useState("");
  const [itempublisher, setitemPublisher] = useState("");
  const [itemreleasdate, setitemReleasDate] = useState("");

  const [isAllChecked, setIsAllCkecked] = useState(true);
  const [isActionChecked, setIsActionCkecked] = useState(false);
  const [isAdventureChecked, setIsAdventureCkecked] = useState(false);
  const [isRacingChecked, setIsRacingCkecked] = useState(false);
  const [isShootingChecked, setIsShootingCkecked] = useState(false);
  const [isSportChecked, setIsSportCkecked] = useState(false);
  const [isFilterBtnChecked, setIsFilterBtnChecked] = useState(false);
  const [isGameAddFormChecked, setIsGameAddFormChecked] = useState(false);
  const [isGameDetailCardCheked, setIsGameDetailCardCheked] = useState(false);
  const [isGameUpdateFormCheked, setIsGameUpdateFormCheked] = useState(false);
  const [gameDetails, setGameDetails] = useState([]);
  const [gameSearch, setGameSearch] = useState(false);
  const [gameSearchResultArr, setGameSearchResultArr] = useState([]);

  const [nameError, setNameError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [developerError, setDeveloperError] = useState("");
  const [publisherError, setPublisherError] = useState("");
  const [releaseDateError, setReleaseDateError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [configurationsError, setConfigurationsError] = useState("");
  const [imageError, setImageError] = useState("");

  const [submitButtonEnable, setSubmitButtonEnable] = useState(false);

  const actionGames = gameDetails.filter((game) => game.type === "action");
  const adventureGames = gameDetails.filter(
    (game) => game.type === "adventure"
  );
  const racingGames = gameDetails.filter((game) => game.type === "racing");
  const shooterGames = gameDetails.filter((game) => game.type === "shooter");
  const sportsGames = gameDetails.filter((game) => game.type === "sports");

  //read game details
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${pageid}`)
      .then((result) => setGameDetails(result.data))
      .catch((err) => console.log(err));
  }, [pageid]);

  // Function to upload file to Cloudinary
  const uploadFile = async (type, file) => {
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      type === "image" ? "Game_Preset" : "Stream_Preset"
    );

    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      console.log("Cloudinary cloud name:", cloudName);
      let resourceType = type === "image" ? "image" : "video";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(`${type} uploaded successfully:`, secure_url);

      return secure_url;
    } catch (error) {
      console.error(
        "Error uploading file to Cloudinary:",
        error.response?.data
      );
      throw new Error("Failed to upload file to Cloudinary");
    }
  };

  const createGame = async (e) => {
    e.preventDefault();
    try {
      // Upload image file
      const gameImageUrl = image ? await uploadFile("image", image) : null;

      // Send backend API request
      const response = await axios.post("http://localhost:3001/createGame", {
        name,
        gameImageUrl,
        configurations,
        description,
        price,
        downloadCount,
        type,
        developer,
        publisher,
        releasdate,
      });

      console.log("Game created successfully:", response.data);
      navigate("/");
      window.location.reload();

      // Reset form fields and file inputs
      //   setName("");
      //   setVideo(null);
      //   setThumbnail(null);
      //   setDescription("");
      // setViewCount(0);
      //   setType("action");
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  const allGameHandler = () => {
    setIsAllCkecked(true);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
    setIsFilterBtnChecked(false);
  };

  const actionGameHandler = () => {
    setIsAllCkecked(false);
    setIsActionCkecked(true);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
    setIsFilterBtnChecked(false);
  };

  const adventureGameHandler = () => {
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(true);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
    setIsFilterBtnChecked(false);
  };

  const racingGameHandler = () => {
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(true);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
    setIsFilterBtnChecked(false);
  };

  const shootingGameHandler = () => {
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(true);
    setIsSportCkecked(false);
    setIsFilterBtnChecked(false);
  };

  const sportGameHandler = () => {
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(true);
    setIsFilterBtnChecked(false);
  };

  const filterBtnHandler = () => {
    setIsFilterBtnChecked(!isFilterBtnChecked);
  };

  const gameDeyailcardHandle = (id) => {
    setIsGameDetailCardCheked(true);
    axios
      .get(`http://localhost:3001/getGamebyID/${id}`)
      .then((result) => {
        console.log(result);
        setitemId(result.data._id);
        setitemName(result.data.name);
        setitemgameImageUrl(result.data.gameImageUrl);
        setitemConfiguration(result.data.configurations);
        setitemDescription(result.data.description);
        setitemPrice(result.data.price);
        setitemDownloadCount(result.data.downloadCount);
        setitemType(result.data.type);
        setitemDeveloper(result.data.developer);
        setitemPublisher(result.data.publisher);
        setitemReleasDate(result.data.releasdate);
      })
      .catch((err) => console.log(err));
  };

  const gameUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateGame/" + itemId, {
        itemname,
        itemgameImageUrl,
        itemconfigurations,
        itemdescription,
        itemprice,
        itemdownloadCount,
        itemtype,
        itemdeveloper,
        itempublisher,
        itemreleasdate,
      })
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // delete game using game id
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteGame/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  const gamesSearch = () => {
    setGameSearch(true);
    const gameSearchInput = document.getElementById("gameSearchbar").value;
    const gameSearchResult = gameDetails.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(gameSearchInput.toLowerCase())
    );
    setGameSearchResultArr(gameSearchResult);
  };

  const handlePriceChange = (e) => {
    const enteredPrice = e.target.value;
    const isValid = /^\d*\.?\d*$/.test(enteredPrice); // Check if input contains only numbers

    if (!isValid) {
      setSubmitButtonEnable(false);
      setPriceError("Price cannot contain letters");
      document.getElementById("gameAddSubmit").disabled = true;
  
    } else {
      setPriceError("");
      document.getElementById("gameAddSubmit").disabled = false;
      setSubmitButtonEnable(true);
    }

    setPrice(enteredPrice);
  };

  const handleUpdatePriceChange = (e) => {
    const enteredPrice = e.target.value;
    const isValid = /^\d*\.?\d*$/.test(enteredPrice); // Check if input contains only numbers

    if (!isValid) {
      setSubmitButtonEnable(false);
      setPriceError("Price cannot contain letters");
      document.getElementById("gameUpdateSubmit").disabled = true;
    } else {
      setSubmitButtonEnable(true);
      setPriceError("");
      document.getElementById("gameUpdateSubmit").disabled = false;
    }

    setitemPrice(enteredPrice);
  };

  const handleDeveloperChange = (e) => {
    const enteredDeveloper = e.target.value;

    // Check if the entered developer name exceeds the maximum limit of 10 characters
    if (enteredDeveloper.length > 25) {
      setDeveloperError("Maximum size limit should be 25 characters");
      setSubmitButtonEnable(false);
      document.getElementById("gameAddSubmit").disabled = true;
    } else {
      setDeveloperError("");
      setDeveloper(enteredDeveloper);
      document.getElementById("gameAddSubmit").disabled = false;
      setSubmitButtonEnable(true);
    }
  };

  const handleUpdateDeveloperChange = (e) => {
    const enteredDeveloper = e.target.value;

    // Check if the entered developer name exceeds the maximum limit of 10 characters
    if (enteredDeveloper.length > 25) {
      setDeveloperError("Maximum size limit should be 25 characters");
      setSubmitButtonEnable(false);
      document.getElementById("gameUpdateSubmit").disabled = true;

    } else {
      setDeveloperError("");
      setitemDeveloper(enteredDeveloper);
      setSubmitButtonEnable(true);
      document.getElementById("gameUpdateSubmit").disabled = false;
    }
  };

  const handlePublisherChange = (e) => {
    const enteredPublisher = e.target.value;

    // Check if the entered publisher name exceeds the maximum limit of 10 characters
    if (enteredPublisher.length > 10) {
      setPublisherError("Maximum size limit is 10 characters");
      setSubmitButtonEnable(false);
      document.getElementById("gameAddSubmit").disabled = true;
    } else {
      setPublisherError("");
      setPublisher(enteredPublisher);
      setSubmitButtonEnable(true);
      document.getElementById("gameAddSubmit").disabled = false;
    }
  };

  const handleUpdatePublisherChange = (e) => {
    const enteredPublisher = e.target.value;

    // Check if the entered publisher name exceeds the maximum limit of 10 characters
    if (enteredPublisher.length > 10) {
      setPublisherError("Maximum size limit is 10 characters");
      setSubmitButtonEnable(false);
      document.getElementById("gameUpdateSubmit").disabled = true;
    } else {
      setPublisherError("");
      setitemPublisher(enteredPublisher);
      setSubmitButtonEnable(true);
      document.getElementById("gameUpdateSubmit").disabled = false;
    }
  };

  const handleReleaseDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (selectedDate > today) {
      setReleaseDateError("Select a previous day from today");
      setSubmitButtonEnable(false);
      document.getElementById("gameAddSubmit").disabled = true;
    } else {
      setReleaseDateError("");
      setReleasDate(selectedDate);
      setSubmitButtonEnable(true);
      document.getElementById("gameAddSubmit").disabled = false;
    }
  };

  const handleUpdateReleaseDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (selectedDate > today) {
      setReleaseDateError("Select a previous day from today");
      setSubmitButtonEnable(false);
      document.getElementById("gameUpdateSubmit").disabled = true;
    } else {
      setReleaseDateError("");
      setitemReleasDate(selectedDate);
      setSubmitButtonEnable(true);
      document.getElementById("gameUpdateSubmit").disabled = false;
    }
  };

  return (
    <div className="py-5 px-7 text-white ">
      <h1 className=" text-[25px] font-bold mb-3">Game Management</h1>
      <button
        onClick={() => setIsGameAddFormChecked(true)}
        className=" float-right bg-gradient-to-tr from-[#FF451D] to-[#FE7804] px-4 py-2 text-[18px] font-semibold rounded-lg"
      >
        Add new game +
      </button>
      <div className="flex justify-start">
        <div className=" w-1/2 p-[2px] bg-gradient-to-l from-[#FE7804] to-[#FF451D] rounded-2xl">
          <input
            id="gameSearchbar"
            className=" bg-[#262628] text-[#FE7804] rounded-2xl w-full  px-3 py-2 placeholder-[#FE7804]"
            type="search"
            placeholder="Search Games...."
            onKeyUp={gamesSearch}
          />
        </div>
        <button className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] px-4 py-2 text-[18px] font-semibold rounded-lg ml-3">
          Search
        </button>
        <div className=" relative ml-3">
          <button
            onClick={filterBtnHandler}
            className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] h-full px-2 text-[18px] font-semibold rounded-lg "
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/pulsar-line/48/FFFFFF/vertical-settings-mixer.png"
              alt="vertical-settings-mixer"
            />
          </button>
          {isFilterBtnChecked && (
            <div className=" absolute z-10 bg-black bg-opacity-85 pl-5 pr-10 py-3 leading-7">
              <p
                onClick={allGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                All
              </p>
              <p
                onClick={actionGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                Action
              </p>
              <p
                onClick={adventureGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                Adventure
              </p>
              <p
                onClick={racingGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                Racing
              </p>
              <p
                onClick={shootingGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                Shooter
              </p>
              <p
                onClick={sportGameHandler}
                className=" hover:text-[#FE7804] cursor-pointer"
              >
                Sport
              </p>
            </div>
          )}
        </div>
      </div>

      {gameSearch && (
        <div className="mt-9">
          <h1 className="text-[18px] font-bold mb-5">Searched Results</h1>
          {gameSearchResultArr.length > 0 ? (
            <div className="flex justify-between flex-wrap">
              {gameSearchResultArr.map((item) => (
                <div
                  onClick={() => gameDeyailcardHandle(item._id)}
                  className="p-0 m-0 w-[22%]"
                >
                  <GameDetailcard
                    image={item.gameImageUrl}
                    name={item.name}
                    id={item._id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className=" w-full p-7 flex flex-col justify-center items-center mb-9">
              <video autoPlay loop className="w-[200px] h-auto">
                <source src={SearchError} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <p className=" text-[#ffffffa0] text-[18px]">No results found</p>
            </div>
          )}
        </div>
      )}
      {!gameSearch && (
        <div className="mt-9">
          {isAllChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">All games</h1>
              <div className="flex justify-between flex-wrap">
                {gameDetails.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isActionChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">Action games</h1>
              <div className="flex justify-between flex-wrap">
                {actionGames.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isAdventureChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">Adventure games</h1>
              <div className="flex justify-between flex-wrap">
                {adventureGames.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isRacingChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">Racing games</h1>
              <div className="flex justify-between flex-wrap">
                {racingGames.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isShootingChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">Shooter games</h1>
              <div className="flex justify-between flex-wrap">
                {shooterGames.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isSportChecked && (
            <div>
              <h1 className=" text-[18px] font-bold mb-5">Sport games</h1>
              <div className="flex justify-between flex-wrap">
                {sportsGames.map((item) => {
                  return (
                    <div
                      onClick={() => gameDeyailcardHandle(item._id)}
                      className="p-0 m-0 w-[22%]"
                    >
                      <GameDetailcard
                        image={item.gameImageUrl}
                        name={item.name}
                        id={item._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add new game */}
      {isGameAddFormChecked && (
        <div className=" absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur-lg">
          <form
            onSubmit={createGame}
            className="bg-[#1B1E20] rounded-2xl border-2 w-[70%] border-[#FE7804] px-10 py-8"
          >
            <div className=" w-full">
              <h1 className=" inline-block text-[25px] font-bold">
                Add New Game
              </h1>
              <div className="float-right">
                <img
                  onClick={() => setIsGameAddFormChecked(false)}
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png"
                  alt="multiply"
                />
              </div>
            </div>

            <div className=" mt-5 mb-8 flex justify-between">
              <div className="w-[30%]">
                <label>Game Name</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    nameError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={name}
                  required
                />
                {nameError && <span className="text-red-500">{nameError}</span>}
              </div>

              <div className="w-[30%]">
                <label>Type</label>
                <br />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                  required
                >
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="racing">Racing</option>
                  <option value="shooter">Shooter</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              <div className="w-[30%]">
                <label>Price</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    priceError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  required
                />
                {priceError && (
                  <span className="text-red-500">{priceError}</span>
                )}
              </div>
            </div>

            <div className=" flex justify-between mb-8">
              <div className="w-[30%]">
                <label>Developer</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    developerError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={developer}
                  onChange={handleDeveloperChange}
                  required
                />
                {developerError && (
                  <span className="text-red-500">{developerError}</span>
                )}
              </div>

              <div className="w-[30%]">
                <label>Publisher</label>
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    publisherError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={publisher}
                  onChange={handlePublisherChange}
                  required
                />
                {publisherError && (
                  <span className="text-red-500">{publisherError}</span>
                )}
              </div>

              <div className="w-[30%]">
                <label>Release date</label>
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    releaseDateError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="date"
                  value={releasdate}
                  onChange={handleReleaseDateChange}
                  required
                />
                {releaseDateError && (
                  <span className="text-red-500">{releaseDateError}</span>
                )}
              </div>
            </div>

            <div className="w-[30%] mb-8">
              <label>Image</label>
              <br />
              <input
                className="w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <div className=" flex justify-between mb-8">
              <div className="w-[48%]">
                <label>Description</label>
                <br />
                <textarea
                  className=" w-full rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="w-[48%]">
                <label>Configurations:</label>
                <br />
                <textarea
                  className="rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 w-full mt-2"
                  type="text"
                  value={configurations}
                  onChange={(e) => setConfiguration(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <button
              id="gameAddSubmit"
              type="submit"
              className={`float-right bg-transparent rounded-lg px-5 py-2 text-[16px] font-bold ${
                !submitButtonEnable ? "btndisabled" : "btnenable"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* update Game */}
      {isGameUpdateFormCheked && (
        <div className=" absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur-lg">
          <form
            onSubmit={gameUpdate}
            className="bg-[#1B1E20] rounded-2xl border-2 w-[70%] border-[#FE7804] px-10 py-8"
          >
            <div className=" w-full">
              <h1 className=" inline-block text-[25px] font-bold">
                Update game details
              </h1>
              <div className="float-right">
                <img
                  onClick={() => setIsGameUpdateFormCheked(false)}
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png"
                  alt="multiply"
                />
              </div>
            </div>

            <div className=" mt-5 mb-8 flex justify-between">
              <div className="w-[30%]">
                <label>Game Name</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    nameError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={itemname}
                  required
                />
                {nameError && <span className="text-red-500">{nameError}</span>}
              </div>

              <div className="w-[30%]">
                <label>Type</label>
                <br />
                <select
                  value={itemtype}
                  onChange={(e) => setitemType(e.target.value)}
                  className="w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                  required
                >
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="racing">Racing</option>
                  <option value="shooter">Shooter</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              <div className="w-[30%]">
                <label>Price</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    priceError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={itemprice}
                  onChange={handleUpdatePriceChange}
                  required
                />
                {priceError && (
                  <span className="text-red-500">{priceError}</span>
                )}
              </div>
            </div>

            <div className=" flex justify-between mb-8">
              <div className="w-[30%]">
                <label>Developer</label>
                <br />
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    developerError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={itemdeveloper}
                  onChange={handleUpdateDeveloperChange}
                  required
                />
                {developerError && (
                  <span className="text-red-500">{developerError}</span>
                )}
              </div>

              <div className="w-[30%]">
                <label>Publisher</label>
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    publisherError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="text"
                  value={itempublisher}
                  onChange={handleUpdatePublisherChange}
                  required
                />
                {publisherError && (
                  <span className="text-red-500">{publisherError}</span>
                )}
              </div>

              <div className="w-[30%]">
                <label>Release date</label>
                <input
                  className={`w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 ${
                    releaseDateError ? "border-red-500" : "border-[#D8DAE3]"
                  } border-opacity-20 mt-2`}
                  type="date"
                  value={itemreleasdate}
                  onChange={handleUpdateReleaseDateChange}
                  required
                />
                {releaseDateError && (
                  <span className="text-red-500">{releaseDateError}</span>
                )}
              </div>
            </div>

            <div className="flex mb-8 ">
              <div className="w-[30%]">
                <label>Image</label>
                <br />

                <input
                  className="w-full p-1 text-[16px] rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <img className="h-[70px] ml-5" src={itemgameImageUrl} />
            </div>
            <div className=" flex justify-between mb-8">
              <div className="w-[48%]">
                <label>Description</label>
                <br />
                <textarea
                  className=" w-full rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 mt-2"
                  onChange={(e) => setitemDescription(e.target.value)}
                  required
                >
                  {itemdescription}
                </textarea>
              </div>
              <div className="w-[48%]">
                <label>Configurations:</label>
                <br />
                <textarea
                  className="rounded-lg bg-[#2A2B2F] border-2 border-[#D8DAE3] border-opacity-20 w-full mt-2"
                  type="text"
                  onChange={(e) => setitemConfiguration(e.target.value)}
                  required
                >
                  {itemconfigurations}
                </textarea>
              </div>
            </div>
            <button
              id="gameUpdateSubmit"
              type="submit"
              className={`float-right bg-transparent rounded-lg px-5 py-2 text-[16px] font-bold ${
                !submitButtonEnable ? "btndisabled" : "btnenable"
              }`}
            >
              Update
            </button>
          </form>
        </div>
      )}

      {isGameDetailCardCheked && (
        <div className=" absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full backdrop-blur-lg">
          <div className="bg-[#1B1E20] rounded-2xl border-2 w-[70%] border-[#FE7804] px-10 py-8">
            <div>
              <h1 className=" inline-block text-[25px] font-bold mb-6">
                {itemname}
              </h1>
              <img
                onClick={() => setIsGameDetailCardCheked(false)}
                className=" float-right"
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png"
                alt="multiply"
              />
            </div>
            <div className=" flex justify-between">
              <img className="h-auto w-[30%]" src={itemgameImageUrl} />
              <div className=" w-[67%] pl-5 leading-8">
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Type</span> :{" "}
                  <span>{itemtype}</span>
                </pre>
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Price</span> :{" "}
                  <span>$ {itemprice}</span>
                </pre>
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Downloads</span> :{" "}
                  <span>{itemdownloadCount} Downloads</span>
                </pre>
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Developer</span> :{" "}
                  <span>{itemdeveloper}</span>
                </pre>
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Publisher</span> :{" "}
                  <span>{itempublisher}</span>
                </pre>
                <pre className=" text-[#ffffff73]">
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Releas Date</span> :{" "}
                  <span>{itemreleasdate}</span>
                </pre>
              </div>
            </div>

            <div className="flex justify-between">
              <div className=" w-[50%] p-5">
                <p>
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Configuration</span>
                  <br />
                  <span className=" text-[#ffffff73]">
                    {itemconfigurations}
                  </span>
                </p>
              </div>
              <div className=" w-[50%] p-5">
                <p>
                  <img
                    className=" inline-block mr-3"
                    width="12"
                    height="12"
                    src="https://img.icons8.com/tiny-glyph/32/FD7E14/checkmark.png"
                    alt="checkmark"
                  />
                  <span className=" text-white font-bold">Description</span>
                  <br />
                  <span className=" text-[#ffffff73]">{itemdescription}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setIsGameUpdateFormCheked(true);
                  setIsGameDetailCardCheked(false);
                }}
                className=" bg-transparent text-[#FE7804] border-2 border-[#FE7804] hover:bg-[#FE7804] hover:text-white rounded-lg px-5 py-2 text-[16px] font-bold"
              >
                Upgrade
              </button>
              <button
                onClick={(e) => handleDelete(itemId)}
                className=" bg-[#FE7804] hover:bg-[#FF451D] rounded-lg px-5 py-2 text-[16px] font-bold ml-5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
