import useIcon from "../hooks"

const Highlights = ({ highlightsData }) => {
    const NearMeIcon = useIcon("NearMe")
    return (
        <div className="highlights">
            <div className="font-bold text-2xl mb-6">Today's Highlights</div>
            <div className="flex mb-12 pt-8">
                <div className="box mr-12">
                    <div className="font-medium pb-3">Wind status</div>
                    <div className="font-medium text-3xl d-p"><span className="font-bold text-6xl"> {highlightsData.wind}</span> mph</div>
                    <div><span className="pr-2"><NearMeIcon /></span> WSW</div>
                </div>
                <div className="box">
                    <div className="font-medium pb-3">Humidity</div>
                    <div className="font-medium text-3xl pb-7"><span className="font-bold text-6xl"> {highlightsData.humidity}</span>%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full" style={{width: `${highlightsData.humidity}%`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="box mr-12">
                    <div className="font-medium pb-3">Visibility</div>
                    <div className="font-medium text-3xl"><span className="font-bold text-6xl"> {highlightsData.visibility}</span> miles</div>
                </div>
                <div className="air box">
                    <div className="font-medium pb-3">Air Pressure</div>
                    <div className="font-medium text-3xl"><span className="font-bold text-6xl"> {highlightsData.air}</span> mb</div>
                </div>
            </div>
        </div>
    )
}

export default Highlights