import { MyLocation, Close, LocationOn } from '@mui/icons-material'
import stringSimilarity from 'string-similarity'

function useIcon(word) {
    const icons = {MyLocation, Close, LocationOn}
    let available = false;
    Object.keys(icons).map(i => {
        if (i === word) {
            available = true
        }
        return true
    })
    if (available) {
        const iconsNames = Object.keys(icons)
        let matches = stringSimilarity.findBestMatch(word, iconsNames)
        const bestMatch = matches.bestMatch.target
        const Icon = icons[bestMatch]
        return Icon
    } else {
        const EmptyComp = () => {
            return "";
        }
        return EmptyComp
    }
}
export default useIcon