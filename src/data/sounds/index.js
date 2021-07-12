import Crim from './crim.json'
import Elio from './elio.json'
import Pekora from './pekora.json'
import Suzuno from './suzuno.json'
import Moco from './moco.json'
import Filters from '../filters.json'

const Channels = Filters.channels
const Sounds = {
  [Channels.CRIM]: Crim,
  [Channels.ELIO]: Elio,
  [Channels.MOCO]: Moco,
  [Channels.SUZUNO]: Suzuno,
  [Channels.PEKORA]: Pekora,
}

export default Sounds