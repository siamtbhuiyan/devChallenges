import * as icons from '@mui/icons-material'
import stringSimilarity from 'string-similarity'

function useIcon(word) {
    if (word === "") {
        const EmptyComp = () => {
            return "";
        }
        return EmptyComp
    }
    const iconsNames = Object.keys(icons)

    var matches = stringSimilarity.findBestMatch(word, iconsNames)
    const bestMatch = matches.bestMatch.target
    const Icon = icons[bestMatch]
    return Icon
}
export default useIcon