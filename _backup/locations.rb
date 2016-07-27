require 'geocoder'

@counts = {}

File.read("SoC-student-locations2.csv").lines.each do |city| 
	city=city.strip
	@counts[city] ||= 0
	@counts[city] += 1
end

def geocode(location)
	Geocoder.search(location).first.geometry['location']
end

@geolocations = {}

@counts.each do | city, count|
	geo = geocode(city)
	@geolocations[city] = {
		count: count,
		x: geo['lng'],
		y: geo['lat']
	} 

end



require 'json'

File.write('locations.json', JSON.generate( @geolocations))
