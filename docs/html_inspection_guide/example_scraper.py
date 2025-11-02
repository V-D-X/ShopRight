"""
Simple Web Scraping Tutorial
============================

See HTML_INSPECTION_GUIDE.md for step-by-step instructions
"""

import requests
from bs4 import BeautifulSoup

def scrape_listings():
    """
    Follow HTML_INSPECTION_GUIDE.md to customize this for your target site.
    """
    
    # STEP 1 & 2: Pick your site and check robots.txt
    url = "https://example.com"  # TODO: Replace with your target site
    
    # Load the webpage
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # STEP 4: Set this to the class name you found by inspecting a product cell  
    container_class_name = "product-card"  # TODO: Replace with actual class name
    
    # STEP 5: Find all cells with that class name
    listing_cells = soup.find_all('div', class_=container_class_name)
    print(f"Found {len(listing_cells)} listing cells")
    
    # If no cells found, double-check your class name
    if len(listing_cells) == 0:
        print("No cells found. Check your class name in the HTML.")
        return []
    
    # STEP 6: Extract data from each cell (customize these selectors!)
    listings = []
    
    for cell in listing_cells:
        # TODO: Customize these selectors based on your site's HTML structure
        
        # Extract title - try different tag options
        title_element = cell.find('h3')  # Try h2, h4, span, etc.
        title = title_element.text.strip() if title_element else "No title found"
        
        # Extract price - customize the class name
        price_element = cell.find('span', class_='price')  # Try 'cost', 'amount', etc.
        price = price_element.text.strip() if price_element else "No price found"
        
        # Store the data
        listing_data = {
            'title': title,
            'price': price
        }
        
        listings.append(listing_data)
        print(f"Title: {title}, Price: {price}")
    
    return listings

if __name__ == "__main__":
    print("Simple Web Scraping Tutorial")
    print("=" * 50)
    print()
    
    try:
        listings = scrape_listings()
        print(f"\nSuccessfully extracted {len(listings)} listings!")
    except Exception as e:
        print(f"Error: {e}")