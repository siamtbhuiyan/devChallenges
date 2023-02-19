import useIcon from "../hooks"

const SearchSection = ({ getLocation, inputRef, locations, handleLocationChange, handleToggle }) => {
    const CloseIcon = useIcon("Close")
  return (
    <div className="left">
        <div className="flex justify-end">
        <button className="px-6 xl:px-11 py-10" onClick={() => handleToggle()}><CloseIcon /></button>
        </div>
        <div className="search-bar"><input className="search-input" ref={inputRef} type="text" placeholder="Search Location"/><button onClick={() => getLocation(inputRef.current.value)} className="search-btn">Search</button></div>
        <div className="py-14 px-6 xl:px-11">{locations !== null ? 
            <div>{locations.map(l => <button key={l.id} className="suggest-btn" onClick={() => handleLocationChange(l.name, l.lat, l.lon)}>{l.name}</button>)}</div> : <></>
        }</div>
    </div>
  )
}

export default SearchSection