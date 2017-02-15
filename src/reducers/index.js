import { combineReducers } from	'redux'

import gallery      from './gallery'
import pagination   from './pagination'
import menu         from './menu'
import map          from './map'

export	default	combineReducers({
    gallery,
    pagination,
    menu,
    map
})