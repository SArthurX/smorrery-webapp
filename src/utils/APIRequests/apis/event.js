import request from '@/utils/APIRequests/requests.js'

export const fetchCADApi = (date_min, date_max, dist_max ) => {
    return request({
        url: `cad.api?date-min=${date_min}&date-max=${date_max}&dist-max=${dist_max}`
    })
}