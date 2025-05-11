
function initBusinessTypeSelect(colors) {
    const selectElement = document.getElementById('business-type-select');
    selectElement.innerHTML = '';
    const optionElement = document.createElement('option');
    optionElement.value = 'All';
    optionElement.textContent = 'All';
    selectElement.appendChild(optionElement);
    Object.keys(colors).forEach(type => {
        const optionElement = document.createElement('option');
        optionElement.value = type;
        optionElement.textContent = type;
        selectElement.appendChild(optionElement);
    });
}
function initRatingSelect(option) {
    const selectElement = document.getElementById('rating-select');
    selectElement.innerHTML = '';
    option.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
    });
}

function initNeighborhoodSelect(neighborhoods) {
    const selectElement = document.getElementById('neighborhood-select');
    selectElement.innerHTML = '';
    const option = document.createElement('option');
    option.value = 'All';
    option.textContent = 'Philadelphia';
    selectElement.appendChild(option);
    neighborhoods.features.forEach(feature => {
        const option = document.createElement('option');
        option.value = feature.properties.LISTNAME;
        option.textContent = feature.properties.LISTNAME;
        selectElement.appendChild(option);
    });
}

// Create the legend
function createLegend() {
    const legendEl = document.getElementById('legend-content');

    Object.entries(businessTypeColors).forEach(([type, color]) => {
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = type;

        item.appendChild(key);
        item.appendChild(value);
        legendEl.appendChild(item);
    });
}

// Function to categorize businesses
function categorizeBusinesses(business) {
    if (!business.categories) return 'Other';

    const categories = business.categories.split(', ');

    const restaurantCategories = ['Japanese', 'Pizza', 'Sushi Bars', 'Bakeries', 'Coffee & Tea', 'Restaurant', 'Restaurants', 'Food', 'Cafes', 'Delis', 'Diners', 'Seafood', 'Sandwiches', 'Steakhouses', 'Fast Food', 'Ethnic Food', 'Barbeque', 'Mexican', 'Chinese', 'Italian', 'American', 'Thai', 'Vegan', 'Vegetarian', 'Breakfast & Brunch'];
    const foodCategories = ['Grocery', 'Specialty Food', 'Farmers Market', 'Food Delivery Services', 'Butcher', 'Cheese Shops', 'Convenience Stores', 'Organic Stores', 'Health Markets'];
    const barsNightlifeCategories = ['Bars', 'Cocktail Bars', 'Nightlife', 'Lounges', 'Pubs', 'Sports Bars', 'Breweries', 'Wine Bars', 'Nightclubs', 'Beer', 'Beer Gardens'];
    const shoppingCategories = ['Fashion', 'Jewelry', "Men's Clothing", 'Shopping', 'Department Stores', 'Shopping Centers', 'Outlet Stores', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Vintage & Thrift', 'Bookstores', 'Comic Books', 'Electronics', 'Mobile Phones', 'Computers', 'Hardware Stores'];
    const beautySpaCategories = ['Barbers', 'Hair Salons', 'Nail Salons', 'Beauty & Spas', 'Massage', 'Day Spas', 'Hair Removal', 'Skin Care', 'Cosmetics & Beauty Supply'];
    const healthMedicalCategories = ['Dentists', 'Doctors', 'Pharmacy', 'Medical Centers', 'Optometrists', 'Hospitals', 'Physical Therapy', 'Chiropractors', 'Urgent Care', 'Family Practice', 'Health & Medical'];
    const homeServicesCategories = ['Keys & Locksmiths', 'Carpet Cleaning', 'Real Estate', 'Home Services', 'Plumbing', 'Electricians', 'HVAC', 'Contractors', 'Landscaping', 'Painters', 'Home Cleaning', 'Interior Design'];
    const localServicesCategories = ['Shoe Repair', 'Printing Services', 'Local Services', 'Dry Cleaning & Laundry', 'Tailors', 'IT Services', 'Watch Repair', 'Self Storage', 'Notaries', 'Appliance Repair'];
    const automotiveCategories = ['Gas Stations', 'Auto Parts & Supplies', 'Automotive', 'Car Dealerships', 'Auto Repair', 'Car Wash', 'Tires', 'Body Shops', 'Parking', 'Oil Change Stations'];
    const artsEntertainmentCategories = ['Music Venues', 'Performing Arts', 'Eatertainment', 'Arts & Entertainment', 'Cinemas', 'Art Galleries', 'Museums', 'Arcades', 'Bowling', 'Comedy Clubs', 'Theatres'];
    const hotelsTravelCategories = ['Hotels', 'Tours', 'Transportation', 'Hotels & Travel', 'Airports', 'Hostels', 'Bed & Breakfast', 'Train Stations', 'Bus Stations', 'Car Rental'];
    const educationCategories = ['Specialty Schools', 'Driving Schools', 'Education', 'Colleges & Universities', 'Preschools', 'Elementary Schools', 'Middle Schools', 'High Schools', 'Tutoring Centers', 'Language Schools'];
    const activeLifeCategories = ['Gyms', 'Bike Rentals', 'Parks', 'Active Life', 'Fitness', 'Yoga', 'Swimming Pools', 'Tennis', 'Recreation Centers', 'Playgrounds', 'Hiking', 'Sports Clubs'];
    const eventPlanningCategories = ['Caterers', 'Venues & Event Spaces', 'Event Planning & Services', 'Wedding Planning', 'Party Supplies', 'Photographers', 'Videographers', 'Florists', 'DJs'];
    const petServicesCategories = ['Dog Walkers', 'Pet Services', 'Pet Stores', 'Veterinarians', 'Pet Groomers', 'Pet Sitting', 'Pet Training', 'Pet Boarding', 'Pet Adoption'];
    const professionalServicesCategories = ['Internet Service Providers', 'Counseling & Mental Health', 'Professional Services', 'Lawyers', 'Accountants', 'Financial Services', 'Insurance', 'Marketing', 'Web Design', 'Business Consulting'];

    // Check against each category group
    if (categories.some(cat => restaurantCategories.includes(cat))) return 'Restaurants';
    if (categories.some(cat => foodCategories.includes(cat))) return 'Food';
    if (categories.some(cat => barsNightlifeCategories.includes(cat))) return 'Bars & Nightlife';
    if (categories.some(cat => shoppingCategories.includes(cat))) return 'Shopping';
    if (categories.some(cat => beautySpaCategories.includes(cat))) return 'Beauty & Spas';
    if (categories.some(cat => healthMedicalCategories.includes(cat))) return 'Health & Medical';
    if (categories.some(cat => homeServicesCategories.includes(cat))) return 'Home Services';
    if (categories.some(cat => localServicesCategories.includes(cat))) return 'Local Services';
    if (categories.some(cat => automotiveCategories.includes(cat))) return 'Automotive';
    if (categories.some(cat => artsEntertainmentCategories.includes(cat))) return 'Arts & Entertainment';
    if (categories.some(cat => hotelsTravelCategories.includes(cat))) return 'Hotels & Travel';
    if (categories.some(cat => educationCategories.includes(cat))) return 'Education';
    if (categories.some(cat => activeLifeCategories.includes(cat))) return 'Active Life';
    if (categories.some(cat => eventPlanningCategories.includes(cat))) return 'Event Planning & Services';
    if (categories.some(cat => petServicesCategories.includes(cat))) return 'Pet Services';
    if (categories.some(cat => professionalServicesCategories.includes(cat))) return 'Professional Services';

    return 'Other';
}

// Function to check if a business is in Philadelphia
function isInPhiladelphia(business) {
    return business.city === "Philadelphia" ||
        (business.city && business.city.includes("Philadelphia"));
}

// Load and process Yelp data
async function loadYelpData() {
    try {
        const response = await fetch('../../json/yelp_philadelphia_business.json');
        const text = await response.text();

        // Parse the JSONL file
        const lines = text.split('\n').filter(line => line.trim());
        const businesses = lines.map(line => {
            try {
                return JSON.parse(line);
            } catch (e) {
                console.error('Error parsing business JSON:', e);
                return null;
            }
        }).filter(Boolean);

        // Filter for Philadelphia businesses
        const phillyBusinesses = businesses.filter(isInPhiladelphia);

        // Categorize businesses
        phillyBusinesses.forEach(business => {
            business.businessType = categorizeBusinesses(business);
        });

        // Create GeoJSON
        const geojsonData = {
            type: 'FeatureCollection',
            features: phillyBusinesses.map(business => ({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [business.longitude, business.latitude]
                },
                properties: {
                    name: business.name,
                    rating: business.stars,
                    review_count: business.review_count,
                    address: business.address,
                    categories: business.categories,
                    businessType: business.businessType,
                    hours: business.hours,
                    id: business.business_id
                }
            }))
        };

        return geojsonData;
    } catch (error) {
        console.error('Error loading Yelp data:', error);
        document.getElementById('loading').innerHTML = 'Error loading data. Please check console for details.';
        throw error;
    }
}
function getCenter(geometry) {
    let coordinates;
    if(geometry.type==='Polygon'){
        coordinates=geometry.coordinates[0]
    }else if(geometry.type==='MultiPolygon'){
        coordinates=geometry.coordinates[0][0]
    }
    const features = turf.points(coordinates);
    const center = turf.center(features);
    console.log('center', center)
    return center;
}

