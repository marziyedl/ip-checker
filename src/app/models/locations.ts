
export interface LocationResponseModel {
    as: AsModel,
    domains: string[]
    ip: string,
    isp: string,
    location: LocationModel
}
interface AsModel {
    asn: number,
    domain: string
    name: string,
    route: string,
    type: string
}
interface LocationModel {
    city: string,
    country: string,
    geonameId: number,
    lat: number,
    lng: number,
    postalCode: string,
    region: string,
    timezone: string
}
