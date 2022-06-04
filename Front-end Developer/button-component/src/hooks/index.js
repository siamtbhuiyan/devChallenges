import { AddShoppingCart, Add, Home, Delete, Settings } from '@mui/icons-material'
import stringSimilarity from 'string-similarity'

function useIcon(word) {
    const icons = {AddShoppingCart, Add, Home, Delete, Settings}
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