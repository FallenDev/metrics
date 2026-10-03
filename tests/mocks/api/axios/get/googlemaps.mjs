/**Mocked data */
export default function({faker, url}) {
  //Google Maps geocode api
  if (/^https:..maps.googleapis.com.maps.api.geocode.json$/.test(url)) {
    console.debug(`metrics/compute/mocks > mocking google maps geocode result > ${url}`)
    const lat = faker.location.latitude()
    const lng = faker.location.longitude()
    const city = faker.location.city()
    const country = faker.location.country()
    return ({
      status: 200,
      data: {
        results: [
          {
            address_components: [
              {
                long_name: city,
                short_name: city,
                types: ["political"],
              },
              {
                long_name: country,
                short_name: faker.location.countryCode(),
                types: ["country", "political"],
              },
            ],
            formatted_address: `${city}, ${country}`,
            geometry: {
              bounds: {
                northeast: {lat, lng},
                southwest: {lat, lng},
              },
              location: {lat, lng},
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {lat, lng},
                southwest: {lat, lng},
              },
            },
            place_id: "ChIJu9FC7RXupzsR26dsAapFLgg",
            types: ["locality", "political"],
          },
        ],
      },
    })
  }
}
